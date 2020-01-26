const createError = require('http-errors');
const express = require('express');
const path = require('path');
// const cors = require ('cors');
const { passport_strategy } = require('./middlewares/JWT_passport');

// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

// const indexRouter = require('./routes/index');

const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// const corsOption = {
//   origin: true,
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   exposedHeaders: ['x-auth-token']
// };
// app.use(cors(corsOption));

passport_strategy(app);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// call passport middleware

// app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public1'))); use verjum

module.exports = (async (message) => {
  if (message) {
    // res.status(500).status
    app.get('/*', (req, res) => {
      res.render('error', {message})
    })
    return app;
  } else {
    const {
      userRouter,
      portalRouter,
      nicknameRouter,
      questionRouter,
      answerRouter
    } = await require('./routes')()

    // app.use('/', indexRouter);
    // app.use('/api/users', userRouter);
    app.use('/api/users', userRouter);
    app.use('/api/portals', portalRouter);
    app.use('/api/nicknames', nicknameRouter)
    app.use('/api/questions', questionRouter)
    app.use('/api/answers', answerRouter)

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
      next(createError(404));
    });

    // error handler
    app.use(function (err, req, res, next) {
      // set locals, only providing error in development.
      console.log(err, 991)
      console.log(err.message, 999)
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });

    return app;
  }
})


