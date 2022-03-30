console.log("You are now connected")
alert("Welcome to the Javascript ")
document.write("Simple Calculator<br>")

alert(" + Addition")
var add1 = prompt("Choose Any First Number")
var add2 = prompt("Choose Any Second Number")
alert(Number(add2)+Number(add1))
document.write("<br>Number: ",add1," Addition by Number: ",add2," is ",Number(add1)+Number(add2))


alert(" - Subtraction")
var sub1 = prompt("Choose Any First Number")
var sub2 = prompt("Choose Any Second Number")
alert(sub1-sub2)
document.write("<br>Number: ",sub1," Subtraction by Number: ",sub2," is ",sub1-sub2)


alert(" * Multiplication")
var mul1 = prompt("Choose Any First Number")
var mul2 = prompt("Choose Any Second Number")
alert(mul1*mul2)
document.write("<br>Number: ",mul1," Multiplied by Number: ",mul2," is ",mul1*mul2)


alert(" / Division")
var div1 = prompt("Choose Any First Number")
var div2 = prompt("Choose Any Second Number")
alert(div1/div2)
document.write("<br>Number: ",div1," Divided by Number: ",div2," is ",div1/div2)