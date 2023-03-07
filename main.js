window.addEventListener("load", function () {
	let outputAdd = document.querySelector("#add > output");
	let outputMul = document.querySelector("#mul > output");

	document.querySelectorAll("#add > input").forEach((number) => {
		number.addEventListener("change", () => {
			let firstNumber = document.getElementById("firstNum").value;
			let secondNumber = document.getElementById("secondNum").value;
			outputAdd.value = Number(firstNumber) + Number(secondNumber);
		});
	});
	document.querySelectorAll("#mul > input").forEach((number) => {
		number.addEventListener("change", () => {
			let firstNumber = document.getElementById("thirdNum").value;
			let secondNumber = document.getElementById("forthNum").value;
			outputMul.value = Number(firstNumber) * Number(secondNumber);
		});
	});
});