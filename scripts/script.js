function changeOptionStyle() {

    const options = document.getElementById('options');
    
    options.addEventListener('click', function(e) {
        const currentElement = e.target;
        const nextBrother = currentElement.nextElementSibling;
        const prevBrother = currentElement.previousElementSibling;

        if (prevBrother != null && prevBrother.classList.contains('active')) {
            prevBrother.classList.toggle('active')
            currentElement.classList.toggle('active');
        } else if(nextBrother != null && nextBrother.classList.contains('active')) {
            nextBrother.classList.toggle('active')
            currentElement.classList.toggle('active');
        } else {
            currentElement.classList.toggle('active');
        }
    }) 
}

function changeOtherOptionStyle() {

    const options = document.getElementById('optionsTwo');
    
    options.addEventListener('click', function(e) {
        const currentElement = e.target;
        let nextBrother = currentElement.nextElementSibling;
        let prevBrother = currentElement.previousElementSibling;
        
        currentElement.classList.toggle('active');

        while(prevBrother) {
            if(prevBrother.classList.contains('active')) {
                prevBrother.classList.toggle('active');
            }

            prevBrother = prevBrother.previousElementSibling;
        }

        while(nextBrother) {
            if(nextBrother.classList.contains('active')) {
                nextBrother.classList.toggle('active');
            }

            nextBrother = nextBrother.nextElementSibling;
        }
            
    }) 
}

function validateSubmitButton() {
    const btn = document.getElementById('submit');

    const input = document.querySelectorAll('input');
    const redClasses = document.querySelectorAll('.red');
    const isVisible = document.querySelectorAll('.visible');
    const isActive = document.querySelectorAll('.active')

    for(let j = 0; j < isActive.length; j++) {
        if(isActive.length > 1) {
            for (let i = 0; i < input.length; i++) {
                if(input[i].value != '' && redClasses.length < 1 && isVisible.length < 1) {
                    btn.classList.add('submit-active')
                } else {
                    btn.classList.remove('submit-active')
                }
            }
        }
    }
}

function executeSubmitButton() {
    const options = document.getElementById('options');
    const optionsTwo = document.getElementById('optionsTwo');

    const input = document.querySelectorAll('input');

    input.forEach(e => e.addEventListener('keypress', validateSubmitButton))
    options.addEventListener('click', validateSubmitButton)
    optionsTwo.addEventListener('click', validateSubmitButton)
}


function validateInput(input) {
    const inputBox = document.getElementById(input);
    const titleChange = inputBox.previousElementSibling;
    const showErrorMessage = inputBox.nextElementSibling;
    const submitBtn = document.getElementById('submit')

    inputBox.addEventListener('keyup', function() {

        if(inputBox.value.length < 1) {
            titleChange.classList.remove('red')
            showErrorMessage.classList.remove('visible')
        } else if(isNaN(inputBox.value) && inputBox.value.length >= 1) {
            titleChange.classList.add('red')
            showErrorMessage.classList.add('visible')
        }  else {
            titleChange.classList.remove('red')
        }
    })

}

function checkTab() {
    const inputs =  document.querySelectorAll('input');
    
    inputs.forEach(input => input.addEventListener('keyup', function(e) {

        if(e.key == 'Tab') {
            const currentElement = e.target
            const id = currentElement.id.toString();
            validateInput(id)
        }
    }))
}

function executeInput(name) {
    const calculatorPosition = document.getElementById(name);

    calculatorPosition.addEventListener('click', function(e) {
        const currentElement = e.target;
        const id = currentElement.id;
        validateInput(id)
    })

}

function cleanButton() {
    const btn = document.getElementById('clear')

    btn.addEventListener('click', function() {
        const redClasses = document.querySelectorAll('.red');
        const inputs = document.querySelectorAll('.textStyle');
        const isVisible = document.querySelectorAll('.visible');
        const isActive = document.querySelectorAll('.active');
        const submitBtn = document.getElementById('submit');

        redClasses.forEach(redClass => redClass.classList.remove('red'));
        inputs.forEach(input => input.value = '');
        isVisible.forEach(errorMsg => errorMsg.classList.remove('visible'));
        isActive.forEach(activeItems => activeItems.classList.toggle('active'));
        submitBtn.classList.remove('submit-active')
    })
}

changeOptionStyle()
changeOtherOptionStyle()
executeInput('findInput')
executeInput('findInput2')
checkTab()
cleanButton()
executeSubmitButton()
