import {Model,Collection} from 'odgn-backbone-model';


const MyModel = Model.extend();

const MyCollection = Collection.extend({
    model: MyModel
});


let collection = new MyCollection();

collection.add({name:'charles', age:58});

console.log( collection.toJSON() );