alert("Welcome! Enter two numbers");
const tal1 = prompt("Enter 1st number:");
const tal2 = prompt("Enter 2nd number:");
const operation = prompt("Choose an operation (+ - * /):");
let answer;
const divide = (tal1, tal2) => {
    if (tal1 || tal2 === NaN) {
        handleError()
    }
	answer = +tal1 / +tal2;
	alert(answer);
};
const multiply = (tal1, tal2) => {
    if (tal1 || tal2 === NaN) {
        handleError()
    }
	answer = +tal1 * +tal2;
	alert(answer);
};
const add = (tal1, tal2) => {
    if (tal1 || tal2 === NaN) {
        handleError()
    }
	answer = +tal1 + +tal2;
	alert(answer);
};
const sub = (tal1, tal2) => {
    if (tal1 || tal2 === NaN) {
        handleError()
    }
	answer = +tal1 - +tal2;
	alert(answer);
};

const handleError = () => {
	alert("something went wrong");
};

switch (operation) {
	case "/":
		divide(tal1, tal2);
		break;
	case "*":
		multiply(tal1, tal2);
		break;
	case "+":
		add(tal1, tal2);
		break;
	case "-":
		sub(tal1, tal2);
		break;
	default:
		handleError();
		break;
}
