import mongoose from "mongoose";

const loginHistorySchema = mongoose.Schema({
  userId: {
    type: String,
  },
  browser: {
    type: String,
  },
  os: {
    type: String,
  },
  deviceType: {
    type: String,
  },
  ipAddress: {
    type: String,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model("loginHistory", loginHistorySchema);
