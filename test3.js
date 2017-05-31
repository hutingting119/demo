exports.a = function(){
    console.log('hello')
};

module.exports = {a: 'world'};
exports.a = 'test';
