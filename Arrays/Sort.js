const nums = [2, 3, 1, 6, 5, 8, 9, 0];

nums.sort();
console.log(nums);

nums.reverse();
console.log(nums);

const persons = [
    {name: 'Ravi', age: 32},
    {name: 'Kiran', age: 27},
    {name: 'Thej', age: 45},

];

persons.sort((a, b) => a.age - b.age);
console.log(persons);

persons.sort((a, b) => {
    
    const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
    
    if (nameA < nameB) {
        return -1;
    } else if (nameA > nameB) {
        return 1;
    } else {
        return 0;
    }
});

console.log(persons);