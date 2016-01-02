const rework = require('rework');
const fs = require('fs');
rework.namespace = require('rework-namespace-css');
rework.important = require('rework-important');
rework.comments = require('rework-comments');


const styles = fs.readFileSync(__dirname + '/style.css', 'utf8');
const reworkCSS = rework(styles)
  .use(rework.namespace({
    selector: '.custom',
    root: 'body',
    namespaceBody: false,
  }))
  .use(rework.important())
  .use(rework.comments)
  .toString()
  .replace(/(\r\n|\n|\r)/gm, '');
try {
  fs.mkdirSync(__dirname + '/../build');
} catch (e) {
  // If the build directory exists absorb the error
}
fs.writeFileSync(__dirname + '/../build/rework.css', reworkCSS);
console.info('Rework CSS Generated'); // eslint-disable-line
