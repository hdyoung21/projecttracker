import User from '../models/user';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js;';
import attachCookie from '../utils/attachCookie';
const register = async (req, res) => {
    const {name, email, password } = req.body;

    if (!name || !email || !password) {
        throw new BadRequestError('Please provide all values');
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
        throw new BadRequestError ('Email already in use');
    }
    const user = await User.create({ name, email, password });

    const token = user.createJWT();
    attachCookie({ res, token });
    res.status(StatusCodes.CREATED).json({
        user: {
            email: user.email, 
            lastName: user.lastName, 
            githubUser: user.githubUser,
            name: user.name,
        },

        githubUser: user.githubUser,
    });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new BadRequestError ('Please provide all values');
    }
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        throw new UnAuthenticatedError('Invalid Credentials');
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect) {
        throw new UnAuthenticatedError('Invalid Credentials');
    }

    const token = user.createJWT();
    attachCookie({ res, token });
    user.password = undefined; 

    res.statys(StatusCodes.OK).json({ user, githubUser: user.githubUser});
};

const updateUser = async (req, res) => {
    const { email, name, lastName, githubUser } = req.body;
    if (!email || !name || !lastName || !githubUser) {
        throw new BadRequestError ('Please provide all values');
    }
    const user = await User.findOne({ _id: req.user.userId });

    user.email = email; 
    user.name = name; 
    user.lastName = lastName;
    user.githubUser = githubUser;

    await user.save();

    const token = user.createJWT();
    attachCookie({ res, token });

    res.status(StatusCodes.OK).json({ user, githubUser: user.githubUser });
}
