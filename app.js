const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bluebird = require('bluebird');
const mysql = require('mysql2/promise');

/* CONFIG */
const app = express();
const port = process.env.APP_PORT;
app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'ejs');
app.set('GOOGLE_CLIENT_ID', '329235712483-f2isifu37ih9eguiaha6aoe4hgeafkh3.apps.googleusercontent.com');
app.set('SESSION_SECRET', process.env.SESSION_SECRET);
app.set('COOKIE_MAX_AGE', 1000 * 60 * 60 * 24); // 24 hours
app.set('MYSQL_HOST', process.env.MYSQL_HOST);
app.set('MYSQL_PORT', process.env.MYSQL_PORT);
app.set('MYSQL_USER', process.env.MYSQL_USER);
app.set('MYSQL_PASSWORD', process.env.MYSQL_PASSWORD);
app.set('MYSQL_DB', process.env.MYSQL_DB);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* MYSQL POOL */
const connection = mysql.createPool({
  host : app.get('MYSQL_HOST'),
  user : app.get('MYSQL_USER'),
  password : app.get('MYSQL_PASSWORD'),
  database : app.get('MYSQL_DB'),
  Promise: bluebird,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
app.set('MYSQL_CONNECTION', connection);

/* SESSIONS */
const MySQLStore = require('express-mysql-session')(session);

const mysqlSessionConfig = {
  connectionLimit: 10,
	host: app.get('MYSQL_HOST'),
	port: app.get('MYSQL_PORT'),
	user: app.get('MYSQL_USER'),
	password: app.get('MYSQL_PASSWORD'),
	database: app.get('MYSQL_DB'),
};

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

app.use(session(sessionConfig));

/* ROUTES */
app.use('/', require('./server/routes'));

/* HMR */
if (process.env.HMR_ENABLED === 'true') {
  const webpack = require('webpack');
  const webpackConfig = require('./node_modules/@vue/cli-service/webpack.config');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
    },
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
}

/* HEY, LISTEN! */
app.listen(port, () => {
  console.log(`Trivia app listening at http://localhost:${port}`);
});