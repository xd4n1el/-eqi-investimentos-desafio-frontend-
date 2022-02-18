const options = document.getElementById("options");
const optionsTwo = document.getElementById("optionsTwo");
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");

function tradingSibblingElements(e) {
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
}

function changeOptionStyle() {
  options.addEventListener("click", tradingSibblingElements)
  optionsTwo.addEventListener("click", tradingSibblingElements)
}

function validateSubmitButton() {
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
    submitButton.classList.add("submit-active");
  } else {
    submitButton.classList.remove("submit-active");
  }
}

function executeSubmitButton() {
  const input = document.querySelectorAll("input");

  input.forEach((e) => e.addEventListener("blur", validateSubmitButton));
  options.addEventListener("click", validateSubmitButton);
  optionsTwo.addEventListener("click", validateSubmitButton);
}

function formatPrice(e) {
  const currentTarget = e.target;

  if (!isNaN(currentTarget.value) && currentTarget.value != '') {
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

  if (!isNaN(currentTarget.value) && currentTarget.value != '') {
    const format = parseFloat(currentTarget.value);
    const inputMask = format.toLocaleString("pt-br", {
      style: "percent",
      useGrouping: false,
    });
    currentTarget.value = inputMask;
  }
}

function inputFormater() {
  const priceInputs = document.querySelectorAll(".price");
  priceInputs.forEach((e) => e.addEventListener("blur", formatPrice));

  const percentageInputs = document.querySelectorAll(".percentage");
  percentageInputs.forEach((e) => e.addEventListener("blur", formatPercentage));
}

function validateInput(input) {
  const actualInput = document.getElementById(input);
  const errorClasses = actualInput.previousElementSibling;
  const isVisible = actualInput.nextElementSibling;

  actualInput.addEventListener("keyup", function (e) {
    if (isNaN(actualInput.value) && actualInput.value.length > 0) {
      errorClasses.classList.add("red");
      isVisible.classList.add("visible");
    } else
      errorClasses.classList.remove("red");
      isVisible.classList.remove("visible");
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

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function getFormatedName(text) {
    switch (text) {
      case 'tipoIndexacao':
        return 'Tipo Indexacao';
      case 'tipoRendimento':
        return 'Tipo Rendimento';
      case 'valorFinalBruto':
        return 'Valor Final Bruto';
      case 'aliquotaIR':
        return 'Aliquota IR';
      case 'valorPagoIR':
        return 'Valor Pago IR';
      case 'valorTotalInvestido':
        return 'Valor Total Investido'
      case 'valorFinalLiquido':
        return 'Valor Final Liquido'
      case 'ganhoLiquido':
        return 'Ganho Liquido';
    }
}

function checkingResources(dataValues) {
  const ul = document.getElementById("apiList");

  dataValues.map(function (dataValues) {
    for (let data in dataValues) {
      let values = dataValues[data]

      if(!isNaN(values)) {
        let li = createNode("li");
        let p = createNode("p");
        let p2 = createNode("p");

        let formatedName = getFormatedName(data)
        p.innerHTML = formatedName;

        if(data == 'aliquotaIR') {
          values = values.toLocaleString("pt-br", {
          style: "percent",
          });
          p2.innerHTML = values;
        } else {
          values = values.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })
          p2.innerHTML = values;
        } 

        append(li, p);
        append(li, p2);
        append(ul, li);
      }
    }
  })
}

function callApi(indexacao, rendimento) {
  options.addEventListener('click', function(e) {
    let currentTarget = e.target;
    rendimento = currentTarget.id
  })

  optionsTwo.addEventListener('click', function(e) {
    let currentTarget = e.target
    indexacao = currentTarget.id
  })
  
  const apiShow = document.querySelector('.api')
  
  submitButton.addEventListener("click", function () {
    apiShow.classList.add('api-show')

    // como os indicadores não afetam a pesquisa na API, decidi nao os inserir, mas seria a mesma prática

    fetch(`http://localhost:3000/simulacoes?tipoIndexacao=${indexacao}&tipoRendimento=${rendimento}`)
    .then((resp) => resp.json())
    .then(function (data) {
            checkingResources(data)
          })
          .catch(function (error) {
      console.log(error);
    });
  });
}

function removeNode() {
  let list = document.getElementById('apiList');
  let apiShow = document.querySelector('.api')
  list.innerHTML = ''
  apiShow.classList.remove('api-show');
}

function cleanButton() {
    const errorClasses = document.querySelectorAll(".red");
    const inputs = document.querySelectorAll("input");
    const isVisible = document.querySelectorAll(".visible");
    const isActive = document.querySelectorAll(".active");
    const ipca = document.getElementById('ipca')
    const cdi = document.getElementById('cdi')

    errorClasses.forEach((errorClass) => errorClass.classList.remove("red"));
    inputs.forEach((input) => (input.value = ""));
    isVisible.forEach((errorMsg) => errorMsg.classList.remove("visible"));
    isActive.forEach((activeItems) => activeItems.classList.toggle("active"));
    submitButton.classList.remove("submit-active");
    cdi.value = 9.18 + '%'
    ipca.value = 10.06 + '%'
    removeNode()
}

function cleanButtons() {
  let newSimulation = document.getElementById('newSimulation')

  clearButton.addEventListener('click', cleanButton)
  newSimulation.addEventListener('click', cleanButton)
}


changeOptionStyle();
executeInput("findInput");
executeInput("findInput2");
checkTab();
executeSubmitButton();
inputFormater();
callApi();
cleanButtons();
