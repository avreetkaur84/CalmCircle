import User from "../models/user.model.js";
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import { uploadOnCloudinary } from "../utils/Cloudinary.js";
import bycrpt from 'bcryptjs'
import generateTokenAndSetCookies from "../utils/generateJwtToken.js";

export const signup = async (req, res) => {
    try {
        const {username, fullname, email, password, gender} = req.body;

        if(!username) return `Username is Required`;
        if(!fullname) return `Fullname is Required`;
        if(!password) return `Password is Required`;
        if(!email) return `Email is Required`;
        if(!gender) return `Gender is Required`;
        console.log(username)
    
        const existedUser = await User.findOne({username});
        if(existedUser) {
            throw new ApiError(400, `User with ${username} username already exists`);
        }
    
        const profilePicPath = req.files?.profilePic[0]?.path;
        if(!profilePicPath) {
            throw new ApiError(400, `Profile Pic path not found!!`);
        }
        console.log(profilePicPath);
    
        const profilePic = await uploadOnCloudinary(profilePicPath);
        // console.log(profilePic);
        if(!profilePic) {
            throw new ApiError(400, `Unable to upload profile pic on Cloudinary!!`);
        }
    
        const salt = await bycrpt.genSalt(10);
        const hashedPassword = await bycrpt.hash(password,salt);
    
        const createdUser = await User.create({
            username,
            fullname,
            profilePic: profilePic?.url,
            password: hashedPassword,
            email,
            gender,
        })
    
        console.log(createdUser);
    
        const user = await User.findById(createdUser._id);
        if(!user) {
            throw new ApiError(400, `Something went wrong while creating user`);
        } else {
            generateTokenAndSetCookies(user._id, res);
            await user.save();
        }
        
        return res.status(200).json(
            new ApiResponse(400, createdUser, "User registered successfully")
        )
    } catch (error) {
        throw new ApiError(500, `Something went wrong while signing up the user`, error);
    }
}

export const login = async(req, res) => {
    try {
        const { username, password} = req.body;
        if(!username) return `Username is required`;
        if(!password) return `Password is required`;
    
        const user = await User.findOne({username});
        if(!user) {
            throw new ApiError(400, `No user with ${username} username found!!`);
        }
    
        const isPasswordCorrect = await bycrpt.compare(password, user?.password || "");
        if(!isPasswordCorrect) {
            throw new ApiError(400, `Incorrect Password`)
        }
    
        generateTokenAndSetCookies(user?._id, res);
    
        return res.status(200).json(
            new ApiResponse(201, user,`Successfully Logged in`)
        )
    } catch (error) {
        throw new ApiError(500, `Something went wrong while logging in the user`, error)   
    }
}   

export const logout = async(req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: "0"});
        res.status(200).json(
            new ApiResponse(201, `Successfully logged out`)
        )
    } catch (error) {
        throw new ApiError(500, `Something wen wrong while logging out`, error)
    }
}