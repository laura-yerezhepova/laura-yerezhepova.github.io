function main() {
  let name = prompt("What is your name?");
  greet(name);
  function greet(name) {
    console.log("Hello" + " " + name);
  }

  product()

  function product(){
    num1 = parseInt(prompt("Enter first number:"))
    num2 = parseInt(prompt("Enter second number:"))
    num3 = parseInt(prompt("Enter third number:"))

    answer = num1 * num2 * num3

    console.log('The product of given three numbers is: ' + answer);
    alert('The product of given three numbers is: ' + answer)
  }

  greatest()

  function greatest(){
    num1 = parseInt(prompt("Enter first number:"))
    num2 = parseInt(prompt("Enter second number:"))
    num3 = parseInt(prompt("Enter third number:"))

    greatest = Math.max(num1, num2, num3)

    console.log('The greatest number out of given three numbers is: ' + greatest);
    alert('The greatest number out of given three numbers is: ' + greatest)
  }
}
