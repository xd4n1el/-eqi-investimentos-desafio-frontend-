function checkArrowShow(name1, name2, name3) {
    const elementPosition = document.getElementById(name1);
    const arrowElement = document.getElementById(name2);
    const paragraphElement = document.getElementById(name3);

    elementPosition.addEventListener('click', function () {
        elementPosition.classList.toggle('BGtransformation');
        arrowElement.classList.toggle('visible');
        paragraphElement.classList.toggle('colorChange');

    }())
}

function checkArrowClickV2(name) {

    const options = document.getElementById(name);
    
    options.addEventListener('click', function(e) {
        const currentElement = e.target;
        currentElement.classList.toggle('active');
        currentElement.sibling.toggle('active');
    })
   
}


function checkArrowClick(name) {
    const classes = {
        bgColor: 'BGtransformation',
        visible: 'visible',
        paint: 'colorChange'
    }

    const options = document.getElementById(name);
    const arr = [];
    let filterArr = [];
    let idConvertString;
    let secondIdConvertString;
    
    options.addEventListener('click', function(e) {
        const currentElement = e.target;
        const id = currentElement.id.toString();
        const position = document.getElementById(id)
        const arrow = position.children[0].id.toString();
        const paragraph = position.children[1].id.toString();

        arr.push(id);

        if(arr.length > 1) {
            filterArr = arr.filter((id, i) => arr.indexOf(id) === i);
            const foundElements = filterArr.find(element => element != id);
            idConvertString = foundElements.toString();

            const verifPosition = document.getElementById(idConvertString);
            const verifArrow = verifPosition.children[0];
            const verifParagraph = verifPosition.children[1];

            if(filterArr.length > 1 && filterArr.length <= 2 && 
                idConvertString != id) {

                verifPosition.classList.remove(classes.bgColor);
                verifArrow.classList.remove(classes.visible);
                verifParagraph.classList.remove(classes.paint);

                checkArrowShow(id, arrow, paragraph) 

            } else if(filterArr.length > 2 &&  idConvertString != id) {

                const foundMoreElements = filterArr.find(
                element => element != id && element != foundElements);

                secondIdConvertString = foundMoreElements.toString();
                const verifOtherPosition = document.getElementById(secondIdConvertString);
                const verifOtherArrow = verifOtherPosition.children[0];
                const verifOtherParagraph = verifOtherPosition.children[1];

                verifPosition.classList.remove(classes.bgColor);
                verifArrow.classList.remove(classes.visible);
                verifParagraph.classList.remove(classes.paint);

                verifOtherPosition .classList.remove(classes.bgColor);
                verifOtherArrow.classList.remove(classes.visible);
                verifOtherParagraph.classList.remove(classes.paint);

                checkArrowShow(id, arrow, paragraph) 
            }
            
        } else {
                checkArrowShow(id, arrow, paragraph)
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

function executeInput(name) {
    
    const calculatorPosition = document.getElementById(name)

    calculatorPosition.addEventListener('click', function(e) {
        const currentElement = e.target;
        const id = currentElement.id.toString();
        const inputPosition = document.getElementById(id);
        const titlePosition = inputPosition.previousElementSibling.id;
        const errorMessage = inputPosition.nextElementSibling.id;
        
        validateInput(id, titlePosition, errorMessage)
    })
}

executeInput('findInput')
executeInput('findInput2')
checkArrowClickV2('options')
checkArrowClick('optionsTwo')