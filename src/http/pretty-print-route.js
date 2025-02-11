let chalk = require('chalk')

/**
 * print a route as its being registered
 */
module.exports = function log(params) {
  if (!process.env.QUIET) {
    let {verb, route, path} = params
    let httpVerb = chalk.grey(verb.padStart(7)) // 'delete' + 1
    let routePath = chalk.cyan(route) + ' '
    let lambda = chalk.grey(`${verb}${path}`)
    console.log(chalk.grey(`${httpVerb} ${routePath.padEnd(45, '.')} ${lambda}`))
  }
}
