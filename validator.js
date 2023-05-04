
function validator(options){
    var formElement = document.querySelector(options.form)
    console.log(options.form);
}

validator.isRequired = (selector) => {
    return {
        selector,
         test: () => {
        
        }
    }
}
