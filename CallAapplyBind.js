const person = {
    firstName: 'vishal',
    lastName: 'Ghag'
  }
  
  // Define a function called "fullName" that takes two parameters, "state" and "city."
  let fullName = function(state, city) {
    // Inside the function, it uses "this" to access properties of an object.
    // In this case, "this" will refer to the "person" object defined above.
  
    // It logs a message using the properties of the "person" object and the "state" and "city" parameters.
    console.log(`Your First Name is ${this.firstName} and last Name ${this.lastName} belong to ${state} and live in ${city}`)
  }
  
  // Call the "fullName" function with the "call" method, providing the "person" object as the context,
  // and passing 'Maharashtra' and 'Nallasopara' as arguments.
  fullName.call(person, 'Maharashtra', 'Nallasopara');
  
  // Call the "fullName" function with the "apply" method, providing the "person" object as the context,
  // and passing an array ['Naigoan', 'Delhi'] as arguments.
  fullName.apply(person, ['Naigoan', 'Delhi']);
  
  // Create a new function "copyBind" by using the "bind" method on the "fullName" function.
  // The "bind" method binds the "person" object as the context and partially applies arguments 'Nagpur' and 'goa.'
  // It doesn't immediately invoke the function but creates a new function with the specified context and arguments.
  let copyBind = fullName.bind(person, 'Nagpur', 'goa');
  copyBind()
  