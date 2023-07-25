import { userSchemaMessage } from "@/constants/Modelvalidation_message";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, userSchemaMessage.USER_NAME_REQUIRED],
    },
    email: {
        type: String,
        required: [true,  userSchemaMessage.EMAIL_REQUIRED],
        unique: true,
    },
    questions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"questions"

    }],
    

    password: {
        type: String,
        required: [true,  userSchemaMessage.PASSWORD_REQUIRED],
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

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;