import User from "../models/user.model.js";

const signupUser = async (req, res) => {
  try {
    const { name, email, userName, password } = req.body;
    const user = await User.findOne({ $or: [{ email }, { userName }] });

    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(
      "🚀 ~ file: user.controller.js:5 ~ signupUser ~ error:",
      error.message
    );
    
  }
};

export { signupUser };
