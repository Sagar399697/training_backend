import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
            trim: true,
            index: true
        },
        Email: {
            type: String,
            unique: true,
            required: [true,"email is requried"],
            lowercase: true,
            trim: true,

        },
        phoneNumber: {
            type: String,
            unique: true,
            required: [true,"phone number is requried"]
        },
        admissionNumber: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        password: {
            type: String,
            required: [true,"password is requiredd"],
            trim: true,
        },
        address: {
            type: String,
            required: [true,"address is requiredd"],
            lowercase: true,
            trim: true,
        },
        role: {
            type: String,
            enum: ['student', 'admin', 'vendor','deliveryAgent'],
            default: 'student'
        }
    }
, {timestamps: true})

export const User = mongoose.model('User', userSchema)

