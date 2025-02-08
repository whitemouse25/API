import {user} from '../model/userModel.js';

export const create = async (req, res) => {
    try {
        const userData = new user(req.body);
        const {email} = userData;

        const userExist = await user.findOne({email});
        if (userExist) {
            return res.status(400).json({message: 'Email already exists'});
        }
        const savedUser = await userData.save();
        res.status(200).json(savedUser)
    }
    catch(err){
        res.status(500).json({ err: "Internal Error"})
    }
}


export const fetch = async (req, res) => {
    try{
        const users = await user.find();
        if(user.length === 0){
            res.status(404).json({message: "User not found"});

        }
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Error" });
    }
}

export const update = async (req, res) => {
    try{
        const id = req.params.id;
        const userExist = await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message: "User not found"});
            }
            const updatedUser = await user.findByIdAndUpdate(id, req.body, {new: true});
            res.status(201).json(updatedUser);
    }
    catch(err){
        res.status(500).json({ err: "Internal Error" })
    }
}

export const deleteuser = async (req, res) => {
    try{
        const id = req.params.id;
        const userExist = await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message: "User not found"});
            }
            await user.findByIdAndDelete(id);
            res.status(200).json({message: "User deleted successfully"});
            
    }
    catch(err){
        res.status(500).json({ err: "Internal Error" })
    }
}