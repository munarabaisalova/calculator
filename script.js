
// let num1 = document.getElementById("num1")
// let num2 = document.getElementById("num2")
// let PLUS =()=>{
// let plus = parseInt(num1.value)+parseInt(num2.value)
// document.getElementById("result").innerHTML = plus
// }
let outputScreen = document.getElementById("output-screen")
 let buttons = document.getElementById("buttons")
 let buttons1 = document.getElementById("buttons1")
 let buttons2 = document.getElementById("buttons2")

function display(num){
    let plus = buttons.innerHTML += num
         document.getElementById("output-screen").value = plus
         console.log(plus);
}




function calculate(){
 try{
        outputScreen.value = eval(outputScreen.value)
 }
    catch(err){
     alert("invalid")
    }}
// function clear(){
//     outputScreen.value = "";
// }
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}





// let btn1 = document.getElementById("btn1")
// let btn2 = document.getElementById("btn2")
// let btn = document.getElementById("btn")






// let clk = ()=>{
//    let plus = buttons.
//     document.getElementById("block").innerHTML = plus
//     console.log(plus);
// }

