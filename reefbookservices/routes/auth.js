const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation} = require('../validation')
const bcrypt = require('bcryptjs');
const cors = require('cors');


router.use(cors());
//REGISTER
router.post('/register' , async (req, res) => {

    //Validation before creating a user
   const { error } = registerValidation(req.body); // registerValidation checks that the user data complies
   if(error) return res.status(400).send(error.details[0].message);

    //Check if the user already exist in the database
   const emailExist = await User.findOne({email : req.body.email})
   if(emailExist) return res.status(400).send('Email already exists');


    //Hash the password
   const saltRounds = 10;
   const salt = await bcrypt.genSalt(saltRounds);
   const hashedPassword = await bcrypt.hash(req.body.password, salt);

   //Create a new usera
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

//LOGIN
router.post('/login', async (req, res) => {

    const { error } = loginValidation(req.body);
    if(error)return res.status(400).send(error.details[0].message);

    //Check if the email already exist in the database
    const user = await User.findOne({email : req.body.email})
    if(!user) return res.status(400).send('Email is not found');

    //Check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid Password');

    //Create and assign token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});

module.exports = router;