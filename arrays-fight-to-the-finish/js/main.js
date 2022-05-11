//Create an array of movie titles. Loop through the array and add each element to the h2.
let Movies = ['Raid', 'The cops', 'Abu the thief', 'Aladin']

for(let i = 0; i < Movies.length; i++){
  document.querySelector('h2').innerText += Movies[i]
}  
//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let num  = [10,20,30]

num.forEach((x,i) => {
   num[i] = x + 3
});
 console.log(num)

//Find the average of all the numbers from question three
let sum = 0
//  for(let i = 0; i < num.length; i++){
//      sum += num[i]
//  }

num.forEach((x,i) =>{
    sum += x
})

 let avg = sum/num.length
 console.log(avg)

 