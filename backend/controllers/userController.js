const { ObjectId } = require("mongodb");
const User = require("../models/userModel");

const cloudinary = require("cloudinary");

// Register 5 users
exports.registerUsers = async (i) => {
    console.log("registerUsers", i)
    let user = {
        username: "user" + i,
        email: "user" + i + "@gmail.com",
        password: "user" + i,
    }
    let myCloud ;
    try {
        // C:\Users\gshas\OneDrive\Desktop\Highon\test-highon\backend\imgs\user1.jpg
        // backend\imgs\user1.jpg
        myCloud = await cloudinary.v2.uploader.upload(`imgs/img${i}.jpg`, {
            folder: "users",
        });
    } catch (err) {
        console.log("error uploading user images to cloudinary", err, i)
        return;
    }
let newUser;
    try {
        newUser = await User.create({
            ...user,
            avatar: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            },
        });
    } catch (err) {
        console.log("err 2", err, i)
    }
};

exports.getUserDetails = async () => {
    // Gets details of user 1
    let userId = new ObjectId("64c9006cc033c31b28366cac");
    try {
        const user = await User.findById(userId)
        return user;
    } catch (err) { 
        console.log(err) 
    }
};
