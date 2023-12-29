import mongoose from "mongoose";
import user from "../models/auth.js";
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await user.find();
    const allUserDetails = [];
    allUsers.forEach((user) => {
      allUserDetails.push({
        _id: user._id,
        name: user.name,
        about: user.about,
        tags: user.tags,
        joinedOn: user.joinedOn,
      });
    });
    res.status(200).json(allUserDetails);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
export const updateProfile = async (req, res) => {
  const { id: _id } = req.params;
  const { name, about, tags } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable");
  }
  try {
    const updateProfile = await user.findByIdAndUpdate(
      _id,
      {
        $set: {
          name: name,
          about: about,
          tags: tags,
        },
      },
      {
        new: true,
      }
    );
    res.status(200).json(updateProfile);
  } catch (error) {
    res.status(405).json({
      message: error.message,
    });
  }
};
