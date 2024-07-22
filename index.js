var buttons = document.querySelectorAll("button");
// console.log(buttons);
var buttons_array=Array.from(buttons);
// console.log(buttons_array);
var str=""
var inputbox=document.querySelector(".input");

buttons_array.forEach((value)=>{
   value.addEventListener("click",function(){

    if(value.innerHTML==="="){
        if(hasConsecutiveOperators(str)){
                inputbox.value="invalid"
                str="";
        }
       
        inputbox.value=eval(str);
    }

    else if(value.innerHTML==="AC"){
        str="";
        inputbox.value=str;
    }


    else {
    str=str+value.innerHTML;
    console.log(str);
    inputbox.value=str;
   
}
})
})



/*consecutiveOperatorsRegex is a regular expression that matches any sequence of two or more consecutive operators (+, -, *, /). 
The {2,} quantifier specifies that the pattern should match 
if there are at least two consecutive occurrences of the characters within the square brackets.
test(str) is called on this regular expression object (consecutiveOperatorsRegex) with the input string str. 
It returns true if the input string contains consecutive operators as described by the regular expression, and false otherwise. */


function hasConsecutiveOperators(str) {
    // Regular expression to match consecutive operators
    var consecutiveOperatorsRegex = /[+\-*/.]{2,}/;
    return consecutiveOperatorsRegex.test(str);
}
