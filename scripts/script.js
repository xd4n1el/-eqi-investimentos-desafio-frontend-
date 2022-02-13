function changeOptionStyle() {
  const options = document.getElementById("options");

  options.addEventListener("click", function (e) {
    const currentElement = e.target;
    const nextBrother = currentElement.nextElementSibling;
    const prevBrother = currentElement.previousElementSibling;

    if (prevBrother != null && prevBrother.classList.contains("active")) {
      prevBrother.classList.toggle("active");
      currentElement.classList.toggle("active");
    } else if (
      nextBrother != null &&
      nextBrother.classList.contains("active")
    ) {
      nextBrother.classList.toggle("active");
      currentElement.classList.toggle("active");
    } else {
      currentElement.classList.toggle("active");
    }
  });
}

function changeOtherOptionStyle() {
  const options = document.getElementById("optionsTwo");

  options.addEventListener("click", function (e) {
    const currentElement = e.target;
    let nextBrother = currentElement.nextElementSibling;
    let prevBrother = currentElement.previousElementSibling;

    currentElement.classList.toggle("active");

    while (prevBrother) {
      if (prevBrother.classList.contains("active")) {
        prevBrother.classList.toggle("active");
      }

      prevBrother = prevBrother.previousElementSibling;
    }

    while (nextBrother) {
      if (nextBrother.classList.contains("active")) {
        nextBrother.classList.toggle("active");
      }

      nextBrother = nextBrother.nextElementSibling;
    }
  });
}

function validateSubmitButton() {
  const btn = document.getElementById("submit");

  const inputs = Array.from(document.querySelectorAll("input"));
  const errorClasses = document.querySelectorAll(".red");
  const isVisible = document.querySelectorAll(".visible");
  const optionsLists = Array.from(document.querySelectorAll(".optionsList"));
  let formValidate = true;

  if (errorClasses.length > 0 && isVisible.length > 0) {
    formValidate = false;
  }

  if (inputs.find((e) => e.value == "")) {
    formValidate = false;
  }

  if (
    optionsLists.find((e) => {
      const optionsActive = e.querySelectorAll(".active");
      return optionsActive.length == 0;
    })
  ) {
    formValidate = false;
  }

  if (formValidate) {
    btn.classList.add("submit-active");
  } else {
    btn.classList.remove("submit-active");
  }
}

function executeSubmitButton() {
  const options = document.getElementById("options");
  const optionsTwo = document.getElementById("optionsTwo");

  const input = document.querySelectorAll("input");

  input.forEach((e) => e.addEventListener("blur", validateSubmitButton));
  options.addEventListener("click", validateSubmitButton);
  optionsTwo.addEventListener("click", validateSubmitButton);
}

function formatPrice(e) {
    const currentTarget = e.target;

    if(isNaN(currentTarget.value || currentTarget.value == '' )) {
        currentTarget.value = currentTarget.value
    } else {
        const format = parseFloat(currentTarget.value);
        const inputMask = format.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
        currentTarget.value = inputMask;
    }
}

function formatPercentage(e) {
    const currentTarget = e.target;

    if(isNaN(currentTarget.value) || currentTarget.value == '') {
        currentTarget.value = currentTarget.value
    } else {
    const format = parseFloat(currentTarget.value); 
    const inputMask = format.toLocaleString("pt-br", {
        style: "percent",
        useGrouping: false
    });    
    currentTarget.value = inputMask;
    }
}

function inputFormater() {
    const priceInputs = document.querySelectorAll('.price');
    priceInputs.forEach(e => e.addEventListener('blur', formatPrice));
    
    const percentageInputs = document.querySelectorAll('.percentage');
    percentageInputs.forEach(e => e.addEventListener('blur', formatPercentage));
}

function validateInput(input) {
  const actualInput = document.getElementById(input);
  const errorClasses = actualInput.previousElementSibling;
  const isVisible = actualInput.nextElementSibling;

  actualInput.addEventListener("keyup", function (e) {
  
    if (isNaN(actualInput.value) && actualInput.value.length > 0) {
        errorClasses.classList.add("red");
        isVisible.classList.add("visible");
    } else {
        errorClasses.classList.remove("red");
        isVisible.classList.remove("visible");
    }
  });
}

function checkTab() {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) =>
    input.addEventListener("keyup", function (e) {
      if (e.key == "Tab") {
        const currentElement = e.target;
        const id = currentElement.id.toString();
        validateInput(id);
      }
    })
  );
}

function executeInput(name) {
  const calculatorPosition = document.getElementById(name);

  calculatorPosition.addEventListener("click", function (e) {
    const currentElement = e.target;
    const id = currentElement.id;
    validateInput(id);

  });
}

function cleanButton() {
  const btn = document.getElementById("clear");

  btn.addEventListener("click", function () {
    const errorClasses = document.querySelectorAll(".red");
    const inputs = document.querySelectorAll("input");
    const isVisible = document.querySelectorAll(".visible");
    const isActive = document.querySelectorAll(".active");
    const submitBtn = document.getElementById("submit");

    errorClasses.forEach((redClass) => redClass.classList.remove("red"));
    inputs.forEach((input) => (input.value = ""));
    isVisible.forEach((errorMsg) => errorMsg.classList.remove("visible"));
    isActive.forEach((activeItems) => activeItems.classList.toggle("active"));
    submitBtn.classList.remove("submit-active");
  });
}

changeOptionStyle();
changeOtherOptionStyle();
executeInput("findInput");
executeInput("findInput2");
checkTab();
cleanButton();
executeSubmitButton();
inputFormater()
