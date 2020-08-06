const User = require('../models/user');
const Logger = require('../models/logger');
const mongoose = require("mongoose")
const objectify = mongoose.Types.ObjectId



//find all logs
const findLogs = async (req, res) => {
    try{
        const findLogs = await Logger.find({}).populate("user");
        res.status(200).json(findLogs);
    } catch(error) {
        res.status(400).send(error);
    }
};

//find all users
const findUsers = async (req, res) => {
    try{
        const findUsers = await User.find({});
        res.status(200).json(findUsers);
    } catch(error) {
        res.status(400).send(error);
    }
};

//create logs
const createLog = async (req, res) => {
    try{
        req.body.user = objectify(req.body.user)
        const newLog = await Logger.create(req.body);
        res.status(200).json(newLog);
    } catch(error) {
        res.status(400).send(error);
    }
};

//create user
const createUser = async (req, res) => {
    try{
       const newUser = await User.create(req.body);
        //console.log(newUser)
        res.status(200).json(newUser);
    } catch(error) {
        res.status(400).send(error);
    }
};

//update logs
const updateL = async (req, res) => {
    try{
        const updateLogs = await Logger.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updateLogs);
    } catch(error) {
        res.status(400).send(error);
    }
};

//update user
const updateU = async (req, res) => {
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updateUser);
    } catch(error) {
        res.status(400).send(error);
    }
};

//delete logs
const destroy = async (req, res) => {
    try{
        const deletedLog = await Logger.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedLog);
    } catch(error) {
        res.status(400).send(error);
    }
}


module.exports = {
   
    findLogs,
    findUsers,
    createLog,
    createUser,
    updateL,
    updateU,
    destroy
}
