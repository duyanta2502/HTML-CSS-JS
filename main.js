const select = (selector) => document.querySelector(selector);
const addClickEvent = (element, callback) => element.onclick = callback;

const signinText = select(".title-box .signin");
const signinForm = select("form.signin");
const signupForm = select("form.signup");
const signinBtn = select("label.signin");
const signupBtn = select("label.signup");
const signupLink = select("form .signup-link a");

addClickEvent(signupBtn, () => {
    signinForm.style.marginLeft = "-50%";
    signinText.style.marginLeft = "-50%";
    
});

addClickEvent(signinBtn, () => {
    signinForm.style.marginLeft = "0%";
    signinText.style.marginLeft = "0%";
});

addClickEvent(signupLink, () => {
    signupBtn.click(); // Kích hoạt sự kiện click của nút đăng ký
    return false;
});
