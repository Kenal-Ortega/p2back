const {Router} = require('express');

const appRouter = Router();
const {findLogs, createLog, createUser, updateL, updateU, destroy} = require("../controllers/index.js");

appRouter.get('/', (req, res) => {
    res.send('This is the router')
  })

  ////////create routes////////

  //get aka findLogs
  appRouter.get("/findLogs", findLogs);

  //create aka createLog
  appRouter.post("/log/", createLog);

  //create aka createUser
  appRouter.post("/user/", createUser);

  //put aka updateL
  appRouter.put("/updatelog/:id", updateL);

  //put aka updateU
  appRouter.put("/updateuser/:id", updateU);

  //delete aka destroy
  appRouter.delete("/:id", destroy);

  module.exports = appRouter;

