const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    //as key and value are same 
    //so need of 
    // username: username 
    await User.create({
        username,
        password
    })
    res.json({
        msg: "User created successfully"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    //showing all courses available
    //so no need of middleware 

    const response = await Course.find({});

    res.json({
        response 
    })
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    //if u had the Purchases table all u need 
    // Purchase.Create({
    //     userId,
    //     courseId
    // })

    //but the db has 3 tables : admin , users , courses 
    const courseId = req.params.courseId;
    const username = req.headers.username;

    //if the user has passed the userMiddleware it a legit user
    //so u can update the User table with purchased courses 
        
    // try{
    //    await User.updateOne({
    //         username
    //     }, {
    //         purchasedCourses: {
    //             "$push": courseId
    //         }
    //     })
    // } catch(e){
    //     console.log(e);
    // }
    //used for debugging

    await User.updateOne({
        username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })

    //??   //understand query 

    res.json({
        msg: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    })

    // console.log(user.purchasedCourses);

    // const courses = await Course.find({
    //     courseId: {
    //         "$in": user.purchasedCourses
    //     }
    // });

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });
    
    res.json({
        courses
    })
});

module.exports = router