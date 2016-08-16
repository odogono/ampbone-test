const AmpersandState = require('ampersand-state');
const AmpersandCollection = require('ampersand-collection');

const MyModel = AmpersandState.extend({
    props:{
        name: 'string',
        age: 'number'
    }
});

const MyCollection = AmpersandCollection.extend({
    model: MyModel
});


let collection = new MyCollection();

collection.add([{name:'charles', age:58}]);

console.log( collection.toJSON() );