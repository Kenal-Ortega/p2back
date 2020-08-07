# Project 2 Backend

## Test for Routes
https://p2back93.herokuapp.com/


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Priority Matrix | Complete
|Day 2| Working RestAPI | Complete
|Day 3| MVP & Bug Fixes | Complete


## Project Description

Create an api that allows you to create, repeat, update and delete. 

## Time/Priority Matrix 

- [Graphic](https://res.cloudinary.com/dlcjnygpy/image/upload/v1596192523/0_e0clgi.jpg)

### MVP/PostMVP - 

#### MVP (examples)

- Pull data using  api
- Allow user to create user
- Allow user to log events
- Allow user to log job place
- Allow user to update logs
- Allow user to delete logs
- Deploy app on Heroku

#### PostMVP 

- Accept pictures on incidents
- Accept voice documentations 

## Functional Components



#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Pull data using api | H | 8hr | 8hr | 8hr|
| Create user | H | 3hr | 1hr | 1hr|
| Log events | H | 3hr | 1hr | 1hr|
| Log job place | H | 1.5hr| 1hr | 1hr |
| Update logs| H | 4hr | 1hr | 1hr|
| Delete logs | H | 3hrs| 1hr | 1hr |
| Deploy | H | 1hr | 1hr | 1hr|
| Total | H | 26.5hrs| 14hrs | 14hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Accept pictures | L | 3hr | N/A | N/A|
| Accept voice docs | L | 3hr | N/A | N/A|
| Total | H | 6hrs| N/A | N/A |

## Additional Libraries


## Code Snippet
I was very proud to complete this Schema.

```
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const LoggerSchema = Schema({
    Date: String,
    Log: String,
    user: 
        {
            type: Schema.Types.ObjectId,
            ref: 'user' 
        }
    
});

module.exports = mongoose.model("Log", LoggerSchema);
```

## Issues and Resolutions

#### I had to require mongoose in order to display info from my Schema

```
const mongoose = require("mongoose")
```


