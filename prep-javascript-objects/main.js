var person = {
  firstName: 'Jerry',
  lastName: 'Le',
  hobby: 'music'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);

person.job = 'sleeping';
console.log("The person's current job is: " + person.job);

person.previousJob = 'waking up';
console.log("The person's previous job is: " + person.previousJob);

console.log(person);
