const rework = require('rework');
const fs = require('fs');
rework.namespace = require('rework-namespace-css');
rework.important = require('rework-important');
rework.comments = require('rework-comments');

module.exports = () => {
  const styles = fs.readFileSync(__dirname + '/style.css', 'utf8');
  return rework(styles)
          .use(rework.namespace({
            selector: '.custom',
            root: 'body',
            namespaceBody: false,
          }))
          .use(rework.important())
          .use(rework.comments)
          .toString()
          .replace(/(\r\n|\n|\r)/gm, '');
};
