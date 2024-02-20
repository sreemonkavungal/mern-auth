import User from '../models/user.model.js';
import bcryptjs  from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

// SignUP
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    // To Hash The Password
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({ username, email, password: hashedPassword });

    try {
    await newUser.save()
    res.status(201).json({message:"User Created Successfully"});
    
} catch (error) {
    next(error);
    }
    
};

// SignIn
export const signin = async (req, res, next) => {
    const {email, password} =  req.body;
    try {
        const validUser = await  User.findOne({email});
        if (!validUser) return next(errorHandler(401,'User Not Found'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(401,"Invalid Password"));
        
    // Create JWT Token
    const token = jwt.sign({id:validUser._id} ,process.env.JWT_SECRET);
    const {password: hashedPassword, ...rest} = validUser._doc;
    // Adding Expiry Date To Cookie
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    res
    .cookie('access_token',token, {httpOnly: true,  expires: expiryDate })
    .status(200)
    .json(rest)
       
    } catch (error) {
        next(error);
    }
}