/* Object.freeze() method freezes an object. a frozen object can no longer be changed. freezing object prevents new properties
to add in it, existing propertis from being removed, prevents changing enumerability, configurability, or writability
od existing properties, and prevents the values of existing properties being changed. also prvents its prototype to changed.
freeze() returns the same object, which is passed. */

const obj = {
    prop: 42
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);
  // expected output: 42

  