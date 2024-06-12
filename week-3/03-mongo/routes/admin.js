const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
//here the /admin routes will be handled


//this doesnt mean it handles the /signup req
//it handles /admin/signup req
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //check if the username already exists 
    await Admin.create({
        username: username,
        password: password
    })
    //if Admin.create throughs an excception 
    // it just stop here and will not procced 

        res.json({
            msg: "admin created successfully"
        })

        //u can use try catch instead

    
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic

    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    //zod for input validation //ideally

    // await Course.create({
    //     title: title,
    //     description: description,
    //     imageLink: imageLink,
    //     price: price 
    // })

    //is key and value are same 
    //ucan ommit value
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    });

    // console.log(newCourse);

    res.json({
        msg: "Course created successfully", courseId: newCourse._id
    })
});

router.get('/courses',adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    // res.json({ message: "fetching all courses" });

    const response = await Course.find({});

    res.json({
        courses: response
    })


});

module.exports = router;