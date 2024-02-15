import {User} from "../models/user";

export const getAllUser = async (req, res) => {
    const users = await User.find({})
    const keyword = req.query.keyword;
    console.log(keyword)
    res.json({
        success: true,
        users,
    });
};

export const login = async () => {
    
}

export const register = async (req, res) => {
    const {name, email, password} = req.body;
    await User.create({
        name,
        email,
        password
    })
    res.status(201).cookie("tempi", "lol").json({
        success: true,
        message: "Registered Successfully",
    })
}

export const specialFunc = async (req, res) => {
    await res.json({
        success: true,
        message: "just special"
    })
}

export const getUserDetails = async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);

    res.json({
        success: true,
        user,
    })
}
