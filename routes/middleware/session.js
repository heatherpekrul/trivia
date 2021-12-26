const express = require('express');
const sessions = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

app.use(function (req, res, next) {
  try {
    console.log({
      GOOGLE_CLIENT_ID: req.app.get('GOOGLE_CLIENT_ID')
    });

    const sessionConfig = {
      secret: app.get('COOKIE_SECRET'),
      saveUninitialized: false,
      cookie: {
        maxAge: app.get('COOKIE_MAX_AGE')
      },
      resave: false 
    };

    console.log(sessionConfig);
    
    if (app.get('env') === 'production') {
      app.set('trust proxy', 1);
      sessionConfig.cookie.secure = true;
    }

    console.log(req.app);
    
    // app.use(sessions(sessionConfig));
    
    // app.use(cookieParser());
  } catch (e) {
    console.log(e);
  }

  next();
});

module.exports = app;