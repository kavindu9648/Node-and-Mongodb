//third parti libraries and modules
const bcrypt = require("bcrypt");

//custom libraries and modules
const { usermodle } = require("../modles");

//function to register new user

const register = async (req, res) => {
  //request body
  const {
    firstName,
    lastName,
    id,
    email,
    password,
    dateCreated,
    timeCreated,
    dateUpdated,
    timeUpdated,
  } = req.body;

  try {
    //check if email address alredy available
    const User = await usermodle.findOne({ email });
    if (User) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Email address already in use",
        },
      });
    }
    //password encription
    const encriptedPassword = await bcrypt.hash(password, 8);
    //create new user
    const newuser = new usermodle({
      firstName,
      lastName,
      id,
      email,
      password: encriptedPassword,
      dateCreated,
      timeCreated,
      dateUpdated,
      timeUpdated,
    });
    //save new user to the data base
    const saveuser = await newuser.save();

    return res.status(201).json({
      status: true,
      success: {
        message: "Successfuly Created",
      },
      //find who are the save
      user: saveuser,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: {
        message: "Fail to new user due to server error",
      },
    });
  }
};
module.exports = { register };
