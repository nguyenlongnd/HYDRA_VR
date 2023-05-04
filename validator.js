
function validator(options) {
    //function validate
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(".form-message")
        var errorMessage = rule.test(inputElement.value)
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add("invalid")
        } else {
            errorElement.innerText = "";
            inputElement.parentElement.classList.remove("invalid")
        }
    }

    var formElement = document.querySelector(options.form)
    if (formElement) {

        var submitElement = formElement.querySelector(options.submit)
        submitElement.onclick = () => {
            options.rules.forEach((rule) => {
                var inputElement = formElement.querySelector(rule.selector)
                validate(inputElement, rule)
            })
        }


        options.rules.forEach((rule) => {
            var inputElement = formElement.querySelector(rule.selector)
            inputElement.onblur = () => {
                validate(inputElement, rule)
            }
        })
    }

}

validator.isRequired = (selector) => {
    return {
        selector,
        test: (value) => {
            return value ? "" : "vui lòng nhập trường này"
        }
    }
}

validator.isEmail = (selector) => {
    return {
        selector,
        test: (value) => {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? "" : "vui lòng nhập đúng trường này";
        }
    }
}
validator.isPhoneNumber = (selector) => {
    return {
        selector,
        test: (value) => {
            console.log(typeof (value));
            return /((024|0282|09|03|07|08|05)+([0-9]{8})\b)/g.test(value) ? "" : "vui lòng nhập đúng trường này"
        }
    }
}
validator.submitForm = (selector) => {
    return {
        selector,
        test: () => {
        }
    }
}
