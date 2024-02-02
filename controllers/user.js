const User = require('../models/user_model');

exports.addUser = async (req, res, next) => {
    try {
        const { name, contact, email } = req.body;
        const data = await User.create({ name, contact, email });
        res.status(201).json({ newUserDetail: data });
    } catch (err) {
        console.error("Error adding user:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getUser = async (req, res, next) => {
    try {
        const users = await User.findAll();
        console.log("findall");
        console.log(users);
        res.status(200).json(users);
    } catch (err) {
        console.error("Error getting users:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        if (!userId) {
            console.log("Id is missing");
            return res.status(400).json({ err: 'Id is missing in Url' });
        }
        await User.destroy({ where: { id: userId } });
        res.status(208).json({ deletedUser: userId });
    } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};
