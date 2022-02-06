function checkArrowShow(name1, name2, name3) {
    let position = document.getElementById(name1);
    let element = document.getElementById(name2);
    let paragrafo = document.getElementById(name3);

    position.addEventListener('click', function () {
        position.classList.toggle('BGtransformation');
        element.classList.toggle('visible');
        paragrafo.classList.toggle('colorChange');
    }())
}

function checkArrowClick() {
    const elements = {
        name: 'item1',
        name2: 'item2',
        name3: 'item3',
        name4: 'item4',
        name5: 'item5',
        arrow: 'Arrow',
        arrow2: 'Arrow2',
        arrow3: 'Arrow3',
        arrow4: 'Arrow4',
        arrow5: 'Arrow5',
        paragraph: 'paragraph',
        paragraph2: 'paragraph2',
        paragraph3: 'paragraph3',
        paragraph4: 'paragraph4',
        paragraph5: 'paragraph5',
    };

    window.addEventListener('click', function (event) {
        const currentElement = event.target;
        const id = currentElement.id;
        const position = document.getElementById(elements.name);
        const positionTwo = document.getElementById(elements.name2);
        const positionThree = document.getElementById(elements.name3);
        const positionFour = document.getElementById(elements.name4);
        const positionFive = document.getElementById(elements.name5);

        if (id == elements.name && positionTwo.classList.contains('BGtransformation')) {
            checkArrowShow(elements.name2, elements.arrow2, elements.paragraph2)
            checkArrowShow(elements.name, elements.arrow, elements.paragraph)
        } else if (id == elements.name2 && position.classList.contains('BGtransformation')) {
            checkArrowShow(elements.name, elements.arrow, elements.paragraph)
            checkArrowShow(elements.name2, elements.arrow2, elements.paragraph2)
        } else if (id == elements.name3 && positionFour.classList.contains('BGtransformation')) {
            checkArrowShow(elements.name4, elements.arrow4, elements.paragraph4)
            checkArrowShow(elements.name3, elements.arrow3, elements.paragraph3)
        } else if (id == elements.name4 && positionThree.classList.contains('BGtransformation')) {
            checkArrowShow(elements.name3, elements.arrow3, elements.paragraph3)
            checkArrowShow(elements.name4, elements.arrow4, elements.paragraph4)
        } else if (id == elements.name4 && positionFive.classList.contains('BGtransformation')) {
            checkArrowShow(elements.name5, elements.arrow5, elements.paragraph5)
            checkArrowShow(elements.name4, elements.arrow4, elements.paragraph4)
        } else if (id == elements.name5 && positionThree.classList.contains('BGtransformation')) {
            checkArrowShow(elements.name3, elements.arrow3, elements.paragraph3)
            checkArrowShow(elements.name5, elements.arrow5, elements.paragraph5)
        } else if (id == elements.name5 && positionFour.classList.contains('BGtransformation')) {
            checkArrowShow(elements.name4, elements.arrow4, elements.paragraph4)
            checkArrowShow(elements.name5, elements.arrow5, elements.paragraph5)
        } else if (id == elements.name3 && positionFive.classList.contains('BGtransformation')) {
            checkArrowShow(elements.name5, elements.arrow5, elements.paragraph5)
            checkArrowShow(elements.name3, elements.arrow3, elements.paragraph3)
        } else if (id == elements.name) {
            checkArrowShow(elements.name, elements.arrow, elements.paragraph)
        } else if (id == elements.name2) {
            checkArrowShow(elements.name2, elements.arrow2, elements.paragraph2)
        } else if (id == elements.name3) {
            checkArrowShow(elements.name3, elements.arrow3, elements.paragraph3)
        } else if (id == elements.name4) {
            checkArrowShow(elements.name4, elements.arrow4, elements.paragraph4)
        } else if (id == elements.name5) {
            checkArrowShow(elements.name5, elements.arrow5, elements.paragraph5)
        }
    })
}

function validateInput(input, title, error) {
    let inputBox = document.getElementById(input);
    let titleChange = document.getElementById(title)
    let showErrorMessage = document.getElementById(error)

    inputBox.addEventListener('keyup', function() {
        if(inputBox.value.length < 1) {
            titleChange.classList.remove('red')
            showErrorMessage.classList.remove('visible')
        } else if(isNaN(parseFloat(inputBox.value))) {
            titleChange.classList.add('red')
            showErrorMessage.classList.add('visible')
        } 
        else {
            titleChange.classList.remove('red')
        }
    })
}

function executeInput() {
    const elements = {
        input: 'textArea',
        input2: 'textArea2',
        input3: 'textArea3',
        input4: 'textArea4',
        input5: 'textArea5',
        input6: 'textArea6',
        title: 'title',
        title2: 'title2',
        title3: 'title3',
        title4: 'title4',
        title5: 'title5',
        title6: 'title6',
        error: 'error',
        error2: 'error2',
        error3: 'error3',
        error4: 'error4',
        error5: 'error5',
        error6: 'error6',
    };

    validateInput(elements.input, elements.title, elements.error)
    validateInput(elements.input2, elements.title2, elements.error2)
    validateInput(elements.input3, elements.title3, elements.error3)
    validateInput(elements.input4, elements.title4, elements.error4)
    validateInput(elements.input5, elements.title5, elements.error5)
    validateInput(elements.input6, elements.title6, elements.error6)
}

executeInput()
checkArrowClick()