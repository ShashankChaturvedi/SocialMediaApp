const { ObjectId } = require("mongodb");
const User = require("../models/userModel");

exports.getUserDetails = async () => {
    // this is the id of user created manually in mongoDB
    let userId = new ObjectId("64c9006cc033c31b28366cac");
    try {
        const user = await User.findById(userId)
        return user;
    } catch (err) { 
        console.log(err) 
    }
};
