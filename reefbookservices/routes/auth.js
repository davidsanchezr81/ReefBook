const router = require('express').Router();
const User = require('../model/User');
const {registerValidation} = require('../validation')
const bcrypt = require('bcryptjs');

router.post('/register' , async (req, res) => {

    //Validation before creating a user
   const { error } = registerValidation(req.body);
   if(error) return res.status(400).send(error.details[0].message);

    //Check if the user already exist in the database
   const emailExist = await User.findOne({email : req.body.email})
   if(emailExist) return res.status(400).send('Email alrady exists');

    //Hash the password
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(req.body.password, salt);

   //Create a new user
   const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
   });
   try{
        const savedUser = await user.save();
        res.send({user: user._id});
   
   }catch(err)
   {
    res.status(400).send(err);
   }
});

module.exports = router;