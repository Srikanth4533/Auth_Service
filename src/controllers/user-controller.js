const UserService = require("../services/user-service")

const userService = new UserService()

const create = async (req, res) => {
    try {
        const user = await userService.create({
            email: req.body.email,
            password: req.body.password
        })
        return res.status(201).json({
            data: user,
            success: true,
            message: "Successfully created a new user",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong",
            err: error
        })
    }
}

const signIn = async (req, res) => {
    try {
        const user = await userService.signIn(req.body.email, req.body.password)
        return res.status(200).json({
            data: user,
            success: true,
            message: "Successfully signed in",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong",
            err: error
        })
    }
}

module.exports = {
    create,
    signIn
}