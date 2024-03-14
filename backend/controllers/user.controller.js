import User from '../models/user.model.js';

export const getUsersFromSidebar = async (req, res) => {
    try{
        const loggedInUserId = req.user;

        const allUsers = await User.find({ _id: { $ne: loggedInUserId } });

        res.status(200).json(allUsers);

    }catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}