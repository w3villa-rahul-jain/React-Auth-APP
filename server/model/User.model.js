import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "please provide Unique Values"],
        uinque: [true, "Username Exist"]
    },
    password: {
        type: String,
        required: [true, "please provide password"],
        uinque: false,
    },
    email: {
        type: String,
        required: [true, "please provide email"],
        unique: true,
    },
    firstName : {type: String},
    lastName : {type: String},
    mobile: {type: Number},
    address: {type: String},
    profile: {type: String},

})



export default mongoose.model.Users || mongoose.model('User', UserSchema);