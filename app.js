const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');

/* CONFIG */
const app = express();
const port = process.env.APP_PORT;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('GOOGLE_CLIENT_ID', '329235712483-f2isifu37ih9eguiaha6aoe4hgeafkh3.apps.googleusercontent.com');
app.set('SESSION_SECRET', process.env.SESSION_SECRET);
app.set('COOKIE_MAX_AGE', 1000 * 60 * 60 * 24); // 24 hours

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* SESSIONS */

const MySQLStore = require('express-mysql-session')(session);

const mysqlSessionConfig = {
  connectionLimit: 10,
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_PORT,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DB,
};

console.log(mysqlSessionConfig);

const sessionStore = new MySQLStore(mysqlSessionConfig);

const sessionConfig = {
  name: 'trivia_session_cookie',
  secret: app.get('SESSION_SECRET'),
  store: sessionStore,
  saveUninitialized: false,
  cookie: {
    maxAge: app.get('COOKIE_MAX_AGE'),
  },
  resave: false,
};

if (app.get('env') === 'production') {
  app.set('trust proxy', 1);
  sessionConfig.cookie.secure = true;
}

console.log(sessionConfig);

app.use(session(sessionConfig));

/* ROUTES */

app.use('/', require('./routes'));

/* HEY, LISTEN! */

app.listen(port, () => {
  console.log(`Trivia app listening at http://localhost:${port}`);
});