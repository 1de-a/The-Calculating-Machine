let a = 0;
let b = 0;
let result ;
let para;
let output;
let holder = "";
let char = [];
let values = [];
let displayText = "";
let midText;



// the addition function
function add(a,b) {
    result = a + b;
    
}
// the subtraction function
function subtract(a,b) {
    result = a-b;
    
}
// the multiplying function
function multiply(a,b){
    result = a*b;
    
}
// the dividing function
function divide(a,b){
    result = a/b;

    //for number/0 error

    if (b===0) {
    
        displayText = "Error! Pls press CLR";
        para.textContent = displayText;
        
    
    }
    
}

//creates the display text item

para = document.createElement('p');

output = document.getElementById("item1")

//creates the top line text item

let topPara = document.createElement("p");
let topOutput = document.getElementById("line2")



//function to fill the holder with pressed buttons
//also fills the char array and adds the new values to display text.



function logger(btn) {

    if (result === "end") {location.reload()}

    holder = holder + btn.value;
    char.push(btn.value);
    topPara.textContent = char.join("");
    topOutput.appendChild(topPara);
}


//function to add the value to values array and characters to char array
// and empties the holder
// also updates the display text by rearranging the char array.

function operation(btn) {

    if (midText != undefined) {





    }

    values.push(holder);
    char.push(btn.value);
    values.push(btn.value);
    topPara.textContent=char.join("");
    holder = "" ;
    result = "";
    console.log(values);
    console.log(char)
    
    
}


//function adds the given number to values array and empties the holder
//then functions result function.

function equal(btn) {

    

    values.push(holder);
    holder="";
   
    resultFunc(values);           
}


// result function 
// searches the values array for the operators one by one starting
// with multiply and divide.
// then gives previous and next items to appropriate operator and puts the result
// into array.also takes operators and used numbers out.

function resultFunc(values) {

if (values.indexOf("")>=0) {
    
    displayText = "Error! Pls press CLR";
    para.textContent = displayText;
    output.appendChild(para);
    console.log(values)
    
    

}

while (values.indexOf("x")>=0) {
    
    a=Number(values[(values.indexOf("x"))-1]);
    b=Number(values[(values.indexOf("x"))+1]);
    multiply(a,b);
    values.splice((values.indexOf("x"))-1,1);
    values.splice((values.indexOf("x"))+1,1);
    values[values.indexOf("x")] = result;
    
}

while (values.indexOf("/")>=0) {
    
    a=Number(values[(values.indexOf("/"))-1]);
    b=Number(values[(values.indexOf("/"))+1]);
    divide(a,b);
    values.splice((values.indexOf("/"))-1,1);
    values.splice((values.indexOf("/"))+1,1);
    values[values.indexOf("/")] = result;
    
}

while (values.indexOf("-")>=0) {
    
    a=Number(values[(values.indexOf("-"))-1]);
    b=Number(values[(values.indexOf("-"))+1]);
    subtract(a,b);
    values.splice((values.indexOf("-"))-1,1);
    values.splice((values.indexOf("-"))+1,1);
    values[values.indexOf("-")] = result;
    
}

while (values.indexOf("+")>=0) {
    
    a=Number(values[(values.indexOf("+"))-1]);
    b=Number(values[(values.indexOf("+"))+1]);
    add(a,b);
    values.splice((values.indexOf("+"))-1,1);
    values.splice((values.indexOf("+"))+1,1);
    values[values.indexOf("+")] = result;
    
}
if (displayText===""){
para.textContent = Number(values[0]).toFixed(4)*10/10;
output.appendChild(para);
holder = Number(values[0]);
values.pop();
result = "end";
console.log(values);
midText = holder;
topPara.textContent=Number(midText).toFixed(4)*10/10;
char = [midText]

}}

// clear function added inline

// backspace function in progress


//function backspace() {

  //  char.pop();
  //  values.pop();
  //  para.textContent=char.join("");
  //  console.log(char);
  //  console.log(values);
  //  holder = holder -btn.value;
  //  console.log(holder)
//}




