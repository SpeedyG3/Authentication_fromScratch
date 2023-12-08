const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./models/User');
const path = require('path');
const bcrypt = require('bcrypt');
const session = require('express-session');

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/MyAuthDemo');
    console.log("Mongoose open");
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
app.use(session({secret: 'thisisanamazingsecret', resave: false, saveUninitialized: false}));

const reqLogin = (req, res, next)=>{
    if(!req.session.user_id){
        return res.redirect('/login');
    }
    next();
}

app.get('/', (req, res)=>{
    res.render('home');
})

app.get('/register', (req, res)=>{
    res.render('register');
})

app.post('/register', async(req, res)=>{
    const {username, password} = req.body;
    //general method to do here -> but lets do on mongoose middle ware
    // const hashedPass = await bcrypt.hash(password, 12); //12 is the salt round
    const user = new User({
        username:username, hashedPass:password
    })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('login');
})

app.get('/login', (req, res)=>{
    res.render('login');
})

app.post('/login', async(req, res)=>{
    const{username, password} = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secret1');
    } else {
        res.render('login');
    }
})

app.post('/logout', (req, res)=>{
    // req.session.user_id = null; //only id removal
    req.session.destroy();
    res.redirect('/login'); 
})

app.get('/secret1', reqLogin, (req, res)=>{
    res.render('secret1');
})

app.get('/secret2', reqLogin, (req, res)=>{
    res.render('secret2');
})

app.listen(3000, ()=>{
    console.log("Serving your app on port 3000");
})