const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "vira", age: 23, profession: "admin" },
  
];



// Function to print all developers
function printDeveloper() {
  const developers = data.filter(person => person.profession === 'developer');
  console.log('Developers:');
  console.log(developers);
}

// Function to add a new data object
function addData() {
  const name = prompt('Enter name:');
  const age = parseInt(prompt('Enter age:'));
  const profession = prompt('Enter profession:');
  const newData = { name, age, profession };
  data.push(newData);
  console.log(data);

}
// Function to remove admin
function removeAdmin() {
  const filteredPeople = data.filter(person => person.profession !== 'admin');
  data.length = 0; // Clear the original array

  Array.prototype.push.apply(data, filteredPeople); // Copy back the filtered data
  console.log(data);

}

// 4. Concatenate Array
function concatenateArray() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const concatenatedArray = array1.concat(array2);
  console.log("Concatenated Array", concatenatedArray);

}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / data.length;
  console.log('Average Age:', average);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some(person => person.age > 25);
  console.log('Is there at least one person above 25?', isAbove25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map(person => person.profession))];
  console.log('Unique Professions:', professions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log('Sorted by Age (Ascending):');
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const target_name = 'john';
  data.forEach((obj) => {
    if (obj.name === target_name) {
      obj.profession = 'manager';
    }
  });
  console.log(data);
}
// 10. Profession Count
function getTotalProfessions() {
  const developerCount = data.filter(person => person.profession === 'developer').length;
  const adminCount = data.filter(person => person.profession === 'admin').length;
  console.log('Total Developers:', developerCount);
  console.log('Total Admins:', adminCount);
}
