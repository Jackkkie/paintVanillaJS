const a = Symbol("test");
const b = Symbol("test");
//a === b false
//console.log(a) = Symbol(test)
//you cannot retrieve 'test'

const c = {
  [Symbol("a")]: {
    name: "c"
  },
  [Symbol("a")]: {
    name: "c"
  }
};

// new Set (); => containing distinct values
// Set.has()
// Set.delete();

//WeakSet : eakSet objects are collections of objects. An object in the WeakSet may occur only once; it is unique in the WeakSet's collection.
//
//The main differences to the Set object are:
//
//In contrast to Sets, WeakSets are collections of objects only and not of arbitrary values of any type.
//The WeakSet is weak: References to objects in the collection are held weakly. If there is no other reference to an object stored in the WeakSet,
//they can be garbage collected. That also means that there is no list of current objects stored in the collection.
//WeakSets are not enumerable.

//Map : key value

//The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced.
//The keys must be objects and the values can be arbitrary values.
