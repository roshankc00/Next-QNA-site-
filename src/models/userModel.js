import { userSchemaMessage } from "@/constants/Modelvalidation_message";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, userSchemaMessage.USER_NAME_REQUIRED],
    },
    email: {
        type: String,
        required: [true, userSchemaMessage.EMAIL_REQUIRED],
        unique: true,
    },
    password: {
        type: String,
        required: [true, " password is required"],
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;