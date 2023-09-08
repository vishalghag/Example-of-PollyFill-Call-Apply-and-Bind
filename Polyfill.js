let fullName = function(state,city) {
  console.log(`Your First Name is ${this.firstName} and last Name ${this.lastName} belong to ${state} and live in ${city}`)
}

const person2 = {
    firstName:'viral',
    lastName:'Ghag'
  }

Function.prototype.myBind = function(...args) {
  // "this" refers to the function to which myBind is being applied
  let obj = this;

  // "args" is an array containing all the arguments passed to myBind.
  // We're using splice(1) to remove the first element of the args array.
  // This is because the first argument is intended to be the object to bind to the function,
  // so we want to capture all other arguments starting from the second one.
  params = args.splice(1);

  // Here, we define a new function that will be returned when myBind is called.
  return function(...args2) {
    // Inside this returned function, we're using the apply method on "obj," which is the original function.
    // The first argument to apply is the context (the object on which the function should be invoked).
    // In this case, it's args[0], which should be the object passed as the first argument to myBind.
    
    // The second argument to apply is an array containing the combined parameters from three sources:
    // 1. The "params" array, which contains arguments passed to myBind after the first one.
    // 2. The "args2" array, which contains arguments passed when the bound function is eventually called.
    obj.apply(args[0], [...params, ...args2]);
  }
}


let print2 = fullName.myBind(person2,'Maharashtra','Mumbai')
print2()
