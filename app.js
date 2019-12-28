const createError = require('http-errors');
const express = require('express');
const path = require('path');
// const cors = require('cors');

// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

// const indexRouter = require('./routes/index');

const app = express();
// app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public1'))); use verjum

module.exports = (async (message) => {
  if (message) {
    // res.status(500).status
    console.log(message, 665566)
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
    app.use('/portals', portalRouter);
    app.use('/nicknames', nicknameRouter)
    app.use('/questions', questionRouter)
    app.use('/answers', answerRouter)

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


