const bcryptjs = require("bcryptjs");
const userModel = require("../models/registerUser");
const userController = {
  registerUser: async (req, res) => {
    try {
      const {
        firstName,
        lName,
        email,
        passWord,
        dob,
        timeZone,
        phoneNumber,
        countryCode,
        class_id,
      } = req.body;

      let hPassWord = await bcryptjs.hash(passWord, 10);
      const passRegex =
        /^(?=.*\d.*\d.*\d)(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
      const valid = passRegex.test(passWord);

      if (valid) {
        const storeUser = await userModel.create({
          firstName: firstName,
          lName: lName,
          email: email,
          passWord: hPassWord,
          dob: dob,
          timeZone: timeZone,
          phoneNumber: phoneNumber,
          countryCode: countryCode,
          class_id: class_id,
        });
        await storeUser.save();
        res.status(200).json({ success: true, user: storeUser });
      } else {
        res.status(401).json({
          success: false,
          message:
            "invalid passWord format ,passWord must contain alphnumberic,capital,lower",
        });
      }
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, passWord, phoneNumber } = req.body;

      if ((email && passWord) || (phoneNumber && passWord)) {
        const finduser = await userModel.findOne({
          $or: [{ email: email }, { phoneNumber: phoneNumber }],
        });

        // console.log(finduser);
        if (finduser) {
          let comparePassWord = await bcryptjs.compare(
            passWord,
            finduser.passWord
          );
          if (comparePassWord) {
            let { passWord, ...rest } = finduser.toObject();
            console.log(rest, "rest");
            return res
              .status(201)
              .json({ success: true, message: "loginSuccess", user: rest });
          } else {
            return res
              .status(401)
              .json({ success: false, message: "invalid passWord" });
          }
        } else {
          return res
            .status(401)
            .json({ success: false, message: "user not found" });
        }
      } else {
        return res
          .status(401)
          .json({ success: false, message: "invalid details" });
      }
    } catch (error) {
      return res.status(200).json({ success: false, error: error.message });
    }
  },
  findRegisterUser: async (req, res) => {
    try {
      const user = await userModel.find({}).sort({_id:-1}).populate("class_id");
      console.log(user);
      res.status(200).json({user:user});
    } catch (error) {
      res.status(400).json({ message: "false", error: error.message });
    }
  },
};

module.exports = userController;
