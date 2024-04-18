const user = require("../models/user")

async function handleGetAllUser(req,res){
    const allUsers = await User.find({});
    return res.json(allUsers);
}

async function handlegetUserById(req, res){
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    return res.json(user);
}

async function handleUpdateById(req, res){
    const userInput = req.body; // Corrected
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, userInput, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json(updatedUser);
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

async function handleDeleteById(req, res) {
    // Delete user by ID
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json({ message: "User deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

//add user 
async function handleCreateNewUser (req, res) {
    const newUser = req.body;
    if(!newUser || !newUser.first_name || !newUser.last_name || !newUser.email || !newUser.job_title || !newUser.gender ){
        return res.status(400).json({ status: "all fileds are required" });
    }

   const result =  await User.create({
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        gender: newUser.gender,
        email: newUser.email,
        job_title: newUser.job_title
    })
    console.log('result',result)
    return res.status(201).json({status: "success"})

}

module.exports ={
    handleGetAllUser,
    handlegetUserById,
    handleUpdateById,
    handleDeleteById,
    handleCreateNewUser
}