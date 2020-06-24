const chalk = require('chalk')
const router = require('express').Router()
const { User } = require('../models')


router.get("/:username/resume", (req, res, next) => {
    const username = req.params.username;
    User.findOne({username : username})
    .exec((error, currentUser) => {
        if (error) {
          console.log(chalk.red(error))
          return res.render('error', { error: error })
        }
        let resume_data = currentUser.resume
        res.render('user/resume', {
          resume: resume_data,
          title: req.app.config.title,
          events: req.app.events
        });
      })
  });


  module.exports = router