




// -----------------------------------------------------------------------------------
// PART II
// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.

//  alert('file connected');

// function getUSA() {

//   let word = 'USA';   

//    let element = document.querySelector('h1');

//    console.log(`element : ${element.nodeName} -  content : ${element.textContent}`);
  
// }


// getUSA();


// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

// function getPeopleInSales(){

// let people = document.querySelectorAll('tr');
// let peopleInSales=[];


//     for(let i=0 ; i<people.length ; i++) {

        
//         if (people[i].textContent.includes('Sales')){
           
//           console.log(people[i].getElementsByClassName("empName")[0].textContent);
       
//          }

         
//     }

    
    

// }

// getPeopleInSales();



// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>


// function getAnchorChildren(){

//   let anchorElements = document.getElementsByTagName('a');
   
//   for (let i= 0 ; i< anchorElements.length ; i++){
    
    
//       if (anchorElements[i].children[0] !== undefined ){
              
//              console.log(anchorElements[i].children[0].textContent);
          
//       }

//   }


// }
// getAnchorChildren();

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.


// function getHobbies(){

// let skillElements =  document.getElementsByName("skills")[0]; 
 
 
// for(let i=0; i<skillElements.length; i++){
       

//     if (skillElements[i].getAttribute('selected') !== null){

//       console.log(skillElements[i].textContent) ;

//     } 


// }


// }


// getHobbies();


// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.


// function getCustomAttribute(){

// let allElements = document.querySelectorAll('*');
// let elementsArr = Array.from(allElements); 
// elementsArr.forEach((element)=>{
// let attr;  
//  if( element.getAttribute('data-customAttr') !== null){

//    console.log(`element : ${element.nodeName} data-customAttr : ${element.getAttribute('data-customAttr')} content : ${element.textContent}`) ;                          
//  }


// })

// }

// getCustomAttribute();


// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
//   <input id="num1" class="nums" type="text"/>
//   <input id="num2" class="nums" type="text"/>
//   <h3>Sum: <span id="sum"></span></h3>
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element


// let sum =  document.getElementById('sum');

// let results
// let num1 = document.getElementById('num1');
// let num2 = document.getElementById('num2');

// let results = num1.textContent+num2.textContent;

// console.log(sum);
// sum.textContent = 'results';





// let num1 = document.getElementById('num1');
// let num2 = document.getElementById('num2');

// function chaged(){

//   console.log(num1.value);
//   console.log(num2.value);

//   let results = toString(parseInt(num1.value)+parseInt(num2.value));
//   sum.textContent = results;
// }
// sum.addEventListener('onchange' ,()=>{
// console.log(num1.value);
// console.log(num2.value);


//   console.log('change triggered');
// // let results = toString(parseInt(num1.value)+parseInt(num2.value));
//  results =  parseInt(num1.value)+parseInt(num2.value);
// sum.textContent = results;



// })





// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
//   "Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.


 function selectedOpt() {
  let selected = document.getElementsByName('skills');
  let selArr = Array.from (selected)

  for(let i=0 ; i<selected.length;i++){
  //console.log(selected[i].value);
    alert(`are you sure ${selected[i].value} is one of your skills ? `)
       
       }
  }
  


// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
//   "So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
//   Hide the name if shown.
//   Show the name if hidden.
// 10. Current Time
// Regarding this element:
//   <h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
// 11. Delay
// Regarding this element:
//   <p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
// Collapse 