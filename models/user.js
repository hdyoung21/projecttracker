import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Please provide your first name.'], 
        minlength: 3, 
        maxlength: 20, 
        trim: true, 
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
        type: String, 
        required: [true, 'Please provide password.'],
        minlength: 8,
        select: false,
    },
    lastName: {
        type: String, 
        trim: true, 
        maxlength: 20, 
        required: [true, 'Please provide your last name.']
    },
    githubUser: {
        type: String, 
        required: [true, 'Please provide your github username.']
        //could ask for the link but i think it would be better if it was just the username
    }, 
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
      },
})

UserSchema.ppre('save', async function () {
if (!this.isModified('password')) return
const salt = await bcrypt.genSalt(10)
this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
    return jwt.sign({ userID: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    })
}

UserSchema.methods.comparePassword = async function (canidatePassword) {
    const isMatch = await bcrypt.compare(canidatePassword, this.password)
    return isMatch
}

export default mongoose.model('User', UserSchema)