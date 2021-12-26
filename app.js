const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.set('myVar', 'myVarHasValue');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('GOOGLE_CLIENT_ID', '329235712483-f2isifu37ih9eguiaha6aoe4hgeafkh3.apps.googleusercontent.com');
app.set('SESSION_SECRET', process.env.SESSION_SECRET);
app.set('COOKIE_MAX_AGE', 1000 * 60 * 60 * 24); // 24 hours

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Trivia app listening at http://localhost:${port}`);
});