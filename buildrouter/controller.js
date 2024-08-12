const loginController = (req,res)=>{
    console.log(" login api");
    return res.send("hi I'm from login api");
}

const registerController = (req,res)=>{
    console.log(" register api");
    return res.send("hi I'm from register api");
}

module.exports = {loginController,registerController}