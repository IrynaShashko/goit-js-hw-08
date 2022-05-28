import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector("input"),
    message: document.querySelector("textarea"),
};
refs.form.addEventListener("input", throttle(formInput, 500));
refs.form.addEventListener("submit", formSubmit);

function formInput() {
    const value = {
        email: refs.email.value,
        message: refs.message.value,
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

function formSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    console.log(localStorage.getItem(STORAGE_KEY));
    localStorage.removeItem(STORAGE_KEY);
    
}

formOutput();

function formOutput() {
    const savedOutput = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedOutput) {
        refs.email.textContent = savedOutput.email;
        refs.message.textContent = savedOutput.message;
    }
}

