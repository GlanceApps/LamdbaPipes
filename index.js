var fs = require('fs'), path = require('path');
console.log('Loading event');

var runner = require('pipes2js').run;

exports.handler = function(event, context) {

    var deciderCode = fs.readFileSync(path.join(__dirname + '/converted/', event['_id'] + '.js'), 'utf8');
    runner({}, deciderCode, function (err, results, state) {
      result = context.done(null, results);
    });
};
