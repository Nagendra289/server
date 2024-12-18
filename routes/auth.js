/*const passport=require('passport');
module.exports= app=>{
app.get('/auth/google',
    passport.authenticate('google',
        {
            scope:['profile','email']
        }
    )
);
app.get('/auth/google/callback',passport.authenticate('google'));


app.get('/api/logout',(req,res)=>{
    req.logOut();
    res.send(req.user);

    
    
});
app.get('/api/current_user',(req,res)=>{
    res.send(req.user);
    //console.log(req.user);
});
app.get('/auth/google/callback',passport.authenticate('google'));
    };
//this is the route for the current user so w cnat get the error
*/
const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

