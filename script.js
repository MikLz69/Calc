"use strict";
const result = document.getElementById("result")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const parenthese = document.getElementById("parenthese")
const modulo = document.getElementById("modulo")
const clear = document.getElementById("clear")
const divide = document.getElementById("divide")
const multiply = document.getElementById("multiply")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const dot = document.getElementById("dot")
const equal = document.getElementById("equal")


one.addEventListener("click", () => addToResult(one.textContent))
two.addEventListener("click", () => addToResult(two.textContent))
three.addEventListener("click", () => addToResult(three.textContent))
four.addEventListener("click", () => addToResult(four.textContent))
five.addEventListener("click", () => addToResult(five.textContent))
six.addEventListener("click", () => addToResult(six.textContent))
seven.addEventListener("click", () => addToResult(seven.textContent))
eight.addEventListener("click", () => addToResult(eight.textContent))
nine.addEventListener("click", () => addToResult(nine.textContent))
modulo.addEventListener("click", () => addToResult(modulo.textContent))
divide.addEventListener("click", () => addToResult(divide.textContent))
multiply.addEventListener("click", () => addToResult(multiply.textContent))
plus.addEventListener("click", () => addToResult(plus.textContent))
minus.addEventListener("click", () => addToResult(minus.textContent))
dot.addEventListener("click", () => addToResult(dot.textContent))


function addToResult(number) {
    if (result.textContent == "0") {
        result.textContent = number;
    }
    else {
        result.textContent += number;
        
    }
}



