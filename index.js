//strings

// let firstname="wow";
// let secondname="Programmer";

// console.log(firstname,secondname);

//string concatenation
// let fullname=firstname+" "+secondname;

//method 2 using template literials
// let fullname=`I want to become ${firstname} ${secondname}`
// console.log(fullname);

//getting string character

// console.log(firstname[2]);

//string methods

// console.log(firstname.toUpperCase());

//includes method

// console.log(fullname.includes("reading"));
// //slice method

// console.log(fullname.slice(0,4))//return character from 0 to 4 index 

//string "slpit" method

// let favouriteColors="Brown Blue Black Grey"

// console.log(favouriteColors.split(" "))

//numbers

//loose equlaity(==) vs Strict Equality operator
//loose equlaity

// let age=45;
// console.log(age==34)

//strict equality
// console.log(age===75)

//methods

// function nameoffunction(){
//     console.log("You are running code present inside the function")
// }

// nameoffunction();

//passing values(Arguments and Parameters)

// let invitation=function(name){
//     console.log(`welcome ${name} you are invited to the function`);
// }

// invitation("marie");

//return values(How to return values from the function)

// let ageCalculation=function(birthyear,currentyear=2024){
//     age=currentyear-birthyear;
//     return age;
// }
// console.log(ageCalculation(2005))

//Passing function as an argument(higher order function example)

// let uppercase=function(str){
//     return str.toUpperCase();
// }
// let lowercase=function(str){
//     return str.toLowerCase();
// }

// let transformer=function(str,fun){
//     return fun(str);
// }

// console.log(transformer("HELLO",lowercase))

//objects

// let car={
//     color:"black",
//     model:"2022",
//     company:"Honda"
// }

// //accessing the javascript objects properties
// let propertyName="color";
// console.log(car[propertyName])
// console.log(car.color);
// //modify the property

// car.color="blue",
// car.model="2024"

// console.log({...car}) //{ color: 'blue', model: '2024', company: 'Honda' }

//delete properties of object

// let obj={
//     prop1:"value1",
//     prop2:"value2"
// }

// delete obj["prop1"]
// console.log(obj.prop2)


//function vs method

//function
// let agecalculator=function(birthyear){
//     let age=2023-birthyear
//     console.log(`current age = ${age}`);
// }

// agecalculator(2004)


//method

// let person={
//     agecalculator:function(birthyear){
//         let age=2023-birthyear;
//         return age;
//     }
// }
// console.log(person.agecalculator(2003))

//this keyword

// let person={
//     firstName:"Harry",
//     lastName:"Brook",
//     city:"Delhi",
//     birthyear:"Software Engineer",
//     getsummary:function(){
//         return `${this.firstName} ${this.lastName} lives in ${this.city}`
//     }
// }

// console.log(person.getsummary())

//'objects/Arrays' how 'reference' are passed to variable

// let arr=[1,2,3,4,5]
// let getref=arr;
// getref[5]=8;
// getref.shift();

// console.log("original array ",arr)//original array  [ 2, 3, 4, 5, 8 ]
// console.log('getref array ',getref)//getref array  [ 2, 3, 4, 5, 8 ]

// console.log("**************")

// //pass by value

// let getvalue=[...arr];
// getvalue[5]=9;
// console.log(arr);//[ 2, 3, 4, 5, 8 ]
// console.log(getvalue)//[ 2, 3, 4, 5, 8, 9 ] 
//no change in arr array 

//Javascript DOM(Document object model)
// console.log(document.URL)

//Getting HTML'S element using queryselector/All
//queryselector returns "first element" that match css selector 
//to get all matched elements we use queryselector

// let resultedElement=document.querySelector('p');
// let Allresult=document.querySelectorAll('p');
// console.log(resultedElement);
// console.log(Allresult)

//By id

// let resultedId=document.querySelector('#dost')
// console.log(resultedId)


//getting and setting attributesof element

// let coderdost=document.querySelector('a');

// coderdost.setAttribute('href','https://www.youtube.com/watch?v=lGmRnu--iU8')
// console.log(coderdost.getAttribute('href'));
// coderdost.innerText='javascript masterclass'

//Event 

// let element=document.querySelector('.click-me');

// element.addEventListener('click',function(){
//     console.log('clicked')
// })


//create
// let ul=document.querySelector('ul')
// let button=document.querySelector('.click-me');

// button.addEventListener('click',function(){
//     let li=document.createElement('li');
//     li.textContent="Something new is added";
//     ul.append(li)
// })

//remove
// let element=document.querySelectorAll('li');
// element.forEach(function(element){
//     element.addEventListener('click',e=>{
//         // console.log(e.target)
//         // e.target.style.textDecoration= "line-through"
//         e.target.remove();
//     })
// });


//forms events

// let form=document.querySelector('.sign-up-form');
// // let email=document.querySelector('#email');
// // let password=document.querySelector('#password');

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log(form.email.value,form.password.value)
//     // console.log(email.value,password.value);
// })

//Arrays

// let num=[2,3 ,4,5,9,2];

// let reverse=num.reverse();
// console.log(reverse);

//slice
// let slice=reverse.slice(1,3)//1-2
// console.log(slice)
//splice
//used to add new elements into the array
//array.splice(index,deletedvalue,valuetobeadded)
// let extractarray=reverse.splice(1,2,6) 
// console.log(extractarray)

//map method

// let salaries=[2000,3000,4000,5000]

// let newSalaries=salaries.map((salary)=>{
//     let incrementSalary=salary/2;
//     return salary+incrementSalary;
// })

// console.log(newSalaries);

//filter method
// const gifts=["watch","chocolate","Teddy-Bear","Bouquette","Ring","Necklace"];

// const filteredarray=gifts.filter((gift)=>{
//     if(gift==="Teddy-Bear"||gift==="Bouquette"){
//         return gift;
//     }

// }
// )
// console.log(filteredarray);

//Reduce Method
//array.reduce(function(total,currentvalue),initialvalue)
//return single value

// let array=[2,4,5,6,8,9];

// let sum=array.reduce((total,currentvalue)=>{
//     return total+currentvalue
// },0)

// console.log(sum)

//find method
//it return the first element we are looking for

//  let student=[{id:1,name:"alex"},{id:2,name:"aarav"},{id:4,name:"aayush"}];

//  let result=student.find((student)=>{
//     return student.id===4;
//  })

//  console.log(result);


//findindex
//it return "index" of that array element who "first " pass the text otherwise return -1;
// let ages=[21,42,16,36,10]

// let index=ages.findIndex((age)=>{
//     return age>88
// })

// console.log(index)


//local Storage

//in the previous todo list task when we refresh the browser we lose our current state data

//store and retrieve  data from database 
//for now our foucus is on localstorage
//store and retrieve data from localstorage 
//it is an api provide by the browser to store data inside browser


//localstorage
//getitem
//setitem
//updateitem


//setItem
// console.log(localStorage)
// localStorage.setItem('passion',"programming")
// localStorage.setItem('age',29)
// console.log(localStorage)
//getItem
// console.log(localStorage.getItem('passion'))

//updateItem

// localStorage.setItem('passion',"coding")
// localStorage.setItem('age',24)

//removeItem

// localStorage.removeItem('age')


//How to store complex data like 
//array of objects

// let student=[
//     {Name:"Aman",age:21},
//     {Name:"Deo Raj",age:23}
// ]

// let stringdata=JSON.stringify(student);

// localStorage.setItem('student',stringdata)

// console.log(localStorage)

// let data=localStorage.getItem('student');

// let objectFormat=JSON.parse(data);
// console.log(objectFormat)

