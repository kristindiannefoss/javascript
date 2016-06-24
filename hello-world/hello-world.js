var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
    if (input.length) {
      return 'Hello, ' + input + '!';
    } else {
      return 'Hello, World!';
    }
};

module.exports = HelloWorld;
