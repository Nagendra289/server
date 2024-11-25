const express=require('express');
const mongoose=require('mongoose');
const keys=require('./config/keys');
require('./models/user');
require('./services/passport');// executing the passport service
const cookieSession = require('cookie-session');
const passport = require('passport');
const app=express();
// here after getting to the auth file it execute the app function which are exporting

mongoose.connect(keys.mongoURI);
app.use(cookieSession({
    keys: [keys.cookieKey],
  
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }))
app.use(passport.initialize());
app.use(passport.session());
    //console.log(user);

require('./routes/auth')(app);

const PORT= process.env.PORT|| 5000
app.listen(PORT);