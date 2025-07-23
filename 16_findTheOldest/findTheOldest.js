const findTheOldest = function(array) { 
return array.reduce((oldest ,index) => {
let ageOfOldest =  0;
let ageOfIndex = 0;
let todayyear = new Date().getFullYear()
if("yearOfDeath"in oldest){
     ageOfOldest =  oldest.yearOfDeath - oldest.yearOfBirth
}else{
     ageOfOldest = todayyear - oldest.yearOfBirth 
}
if("yearOfDeath" in index){
     ageOfIndex =  index.yearOfDeath - index.yearOfBirth
}else{
     ageOfIndex = todayyear - index.yearOfBirth 
}
return (ageOfOldest)  > (ageOfIndex) ? oldest:index},array[0]);
}



// Do not edit below this line
module.exports = findTheOldest;
