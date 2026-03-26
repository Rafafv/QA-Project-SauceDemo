module.exports = {
  default: {
    require: [
      'automation/cucumber-js/step-definitions/**/*.js',
      'automation/cucumber-js/support/**/*.js'
    ],
    paths: [
      'automation/cucumber-js/features/**/*.feature'
    ],
    formatOptions: {
      snippetInterface: 'async'
    }
  }
};