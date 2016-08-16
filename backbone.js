const Backbone = require('backbone');


const MyModel = Backbone.Model.extend();

const MyCollection = Backbone.Collection.extend({
    model: MyModel
});


let collection = new MyCollection();

collection.add({name:'charles', age:58});

console.log( collection.toJSON() );