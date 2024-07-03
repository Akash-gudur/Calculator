document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("input[type='button']");
    const displayInput = document.getElementById("displayInput");
    const operation = document.getElementById("operation");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.value == "=") {
                operation.innerHTML = displayInput.value;
                try {
                    const result = eval(displayInput.value.replace(/X/g, '*').replace(/%/g, '/100*'));
                    operation.classList.add("operation-move-up");
                    displayInput.classList.add("result-appear");
                    setTimeout(() => {
                        displayInput.value = result;
                        operation.classList.remove("operation-move-up");
                        displayInput.classList.remove("result-appear");
                    }, 500);
                } catch {
                    displayInput.value = "Error";
                }
            } else if (btn.value == "C") {
                operation.innerHTML = "";
                displayInput.value = "";
            } else if (btn.value == "Del") {
                displayInput.value = displayInput.value.slice(0, -1);
                operation.innerHTML = operation.innerHTML.slice(0, -1);
            } else {
                displayInput.value += btn.value;
                operation.innerHTML += btn.value;
            }
        });
    });
});
