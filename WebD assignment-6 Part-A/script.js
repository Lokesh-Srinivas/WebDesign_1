$(document).ready(() => {
    // Get username from URL and display it
    const params = new URLSearchParams(window.location.search);
    const username = params.get("username");
    $("#usernameDisplay").text(username ? username : "User");

    // Arrow function for validation and calculations
    const calculate = (operation) => {
        let num1 = $("#num1").val().trim();
        let num2 = $("#num2").val().trim();
        let num1Error = $("#num1Error");
        let num2Error = $("#num2Error");
        let resultField = $("#result");

        // Reset errors
        num1Error.text("");
        num2Error.text("");
        resultField.val("");

        // Validation: Check if fields are empty
        if (!num1) return num1Error.text("Please enter the first number.");
        if (!num2) return num2Error.text("Please enter the second number.");

        // Validation: Check if input contains only numbers
        const numberRegex = /^-?\d+(\.\d+)?$/;
        if (!numberRegex.test(num1)) return num1Error.text("Please enter a valid number.");
        if (!numberRegex.test(num2)) return num2Error.text("Please enter a valid number.");

        // Convert to numbers
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        // Single arrow function for calculations
        const compute = (a, b, op) =>
            op === "+" ? a + b :
                op === "-" ? a - b :
                    op === "*" ? a * b :
                        op === "/" ? (b === 0 ? "Cannot divide by zero" : a / b) :
                            "Invalid Operation";

        let result = compute(num1, num2, operation);

        // Infinite check
        resultField.val(!isFinite(result) ? "Invalid calculation" : result);
    };

    // Attach click event to buttons using jQuery
    $(".calc-btn").on("click", function () {
        const operation = $(this).data("op");
        calculate(operation);
    });
});
