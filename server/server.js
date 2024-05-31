import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import User from './models/users.model.js'
import bcrypt from 'bcrypt'

// initialize express
const app = express()
app.use(cors())
app.use(express.json())

// connecting to mongoDB database
// typically I would put this in an environment variable but for the sake of this challenge I will hardcode it
mongoose.connect('mongodb+srv://admin:passwordpassword@formdata.bpqvnlt.mongodb.net/formData?retryWrites=true&w=majority&appName=formData')
    .then(() => {
        console.log('connected to database')    
    })
    .catch((err) => {
        console.log('error connecting to database', err)
    })

app.get('/', (req, res) => {
    res.status(200).json({'message': 'hello world'})
})

// form submit to db
app.post('/api/form-to-db', async (req, res) => {
    try {

        // checking if the user's form data is already in the database
        const existingUser = await User.findOne({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email
        });

        if(existingUser){
            return res.status(400).json({'message': 'User already exists in the database'})
        }

        // hashing the password
        const hashedPassword = await bcrypt.hash(req.body.password, 1) // using 1 for the salt rounds because we don't want it to take too long but typically we would use 10 for more secure hashing

        // creating a new user object to save form data
        const formData = new User({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: hashedPassword,
            phone: req.body.phone,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
            province: req.body.province
        });

        // saving the form data to the database
        const savedFormData = await formData.save();
        return res.status(200).json({'message': 'Form successfully submitted to the database'})
    }catch (err){
        return res.status(500).json({'message': err.message})
    }
});

app.listen(5000, () => {
    console.log('server is running on port 5000')
});