// creates a new Express server
const path = require('path');
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require("./config/keys").mongoURI;
const users = require('./routes/api/users');
const tweets = require('./routes/api/tweets');
const User = require('./models/User');
const bodyParser = require('body-parser');
const passport = require('passport');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.use(passport.initialize());
require('./config/passport')(passport);


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json());

// route setup
// app.get("/", (req, res) => {
// 	const user = new User({
// 		handle: "jim",
// 		email: "jim@jim.jim",
// 		password: "jimisgreat123"
// 	})
// 	user.save()
// 	res.send(" go")
// });

app.use('/api/users', users);
app.use('/api/tweets', tweets);

// tell our app which port to run on
const port = process.env.PORT || 5001;

// log success message to console when server is running
app.listen(port, () => console.log(`Server is running on port ${port}`));







