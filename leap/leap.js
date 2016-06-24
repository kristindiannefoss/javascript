var Year = function() {};

Year.prototype.isLeap = function(input) {
    if (input % 4 === 0) {
      return true;
    } else {
      return false;
    }
};

module.exports = Year;
