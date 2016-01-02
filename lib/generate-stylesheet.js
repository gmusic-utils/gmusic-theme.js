const CleanCSS = require('clean-css');
const rework = require('rework');
const fs = require('fs');
rework.namespace = require('rework-namespace-css');
rework.important = require('rework-important');
rework.comments = require('rework-comments');

const CONSTANTS = require('./_constants');


const styles = fs.readFileSync(__dirname + '/style.css', 'utf8');
const reworkCSS = rework(styles)
  // DEV: Adds a .custom selector to the beginning of all CSS selectors
  .use(rework.namespace({
    selector: '.' + CONSTANTS.CLASS_NAMESPACE,
    root: 'body',
    namespaceBody: false,
  }))
  // DEV: Adds !important flag to all CSS rules
  .use(rework.important())
  // DEV: Removes all CSS comments
  .use(rework.comments)
  .toString();
try {
  fs.mkdirSync(__dirname + '/../build');
} catch (e) {
  // If the build directory exists absorb the error
}
// DEV: Write the CSS minified to the temporary CSS file
fs.writeFileSync(__dirname + '/../build/rework.css', new CleanCSS().minify((reworkCSS)).styles);
console.info('Rework CSS Generated'); // eslint-disable-line
