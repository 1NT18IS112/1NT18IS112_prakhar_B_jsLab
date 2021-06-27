//use of for loops//
var val=1;
let a= [2,3,4,'abc',true,val]

console.log(`${a}`);
//loop for checking element and printing its datatype of array 'a'
for(let i=0;i<a.length;i++)
    console.log(a[i] +" -> " +typeof(a[i]))

//new array with some integers in it
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`\n${arr}`);
//loop for checking it is even or odd using bitwise and
for (let i = 0; i < arr.length; i++) {
  if (arr[i] & 1) 
  console.log(`${arr[i]}:odd`);
  else 
  console.log(`${arr[i]}:even`);
}

//array of object
let obj = [
  { usn: 1111, name: "abhishek" },
  { usn: 2222, name: "singh" },
];
console.log();

//printing using for in
for (i in obj) 
console.log(obj[i]);
//printing in table format
console.table(obj);
