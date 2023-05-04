
function validator(options){
    var formElement = document.querySelector(options.form)
    var inputElement = formElement.querySelector(options.rules.selector)
    console.log(inputElement);

}

validator.isRequired = (selector) => {
    return {
        selector,
         test: () => {
        
        }
    }
}

validator.isEmail = (selector) => {
    return {
        selector,
        test: () => {

        }
    }
}
