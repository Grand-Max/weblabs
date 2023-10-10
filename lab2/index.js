
const form = document.querySelector("form");
const pib = document.getElementById("pib");
const birth = document.getElementById("birth");
const adress = document.getElementById("adress");
const email = document.getElementById("mail");
const tlg = document.getElementById("tlg");

const ppib = document.getElementById("ppib");
const pbirth = document.getElementById("pbirth");
const padress = document.getElementById("padress");
const pemail = document.getElementById("pemail");
const ptlg = document.getElementById("ptlg");

// As per the HTML Specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const pibRegExp =
  /^[А-Я][а-я]{1,20}\s[А-Я]\.[А-Я]\.$/;
const birthRegExp =
  /^\d{1,2}\.\d{1,2}\.\d{2,4}$/;
const adressRegExp =
  /^м.\s[А-Я][а-яі]{1,20}$/;
const tlgRegExp =
  /^@[A-Za-z]_[A-Za-z]{1,20}$/;


// This defines what happens when the user types in the field

pib.addEventListener("input", () => {
    validate(pibRegExp, pib);
});

  birth.addEventListener("input", () => {
    validate(birthRegExp, birth);
});

  adress.addEventListener("input", () => {
    validate(adressRegExp, adress);
});

  email.addEventListener("input", () => {
    validate(emailRegExp, email);
});

  tlg.addEventListener("input", () => {
    validate(tlgRegExp, tlg);
});

  /**
 * @param {RegExp} _regEx The Regex
 * @param {HTMLElement} _input The input element
 * @returns {boolean} is input valid or not
 */
function validate(_regEx , _input ){
    console.log("validating");
    const isValid = _input.value.length !== 0 && _regEx.test(_input.value);
    if (isValid) {
        _input.className = "valid";
    } else {
        _input.className = "invalid";
    }
    return isValid;
}

function show_info(){
    console.log("showing info")
    
    ptlg.textContent = tlg.value;
    ppib.textContent = pib.value;
    pbirth.textContent = birth.value;
    pemail.textContent = email.value;
    padress.textContent = adress.value;
}

// This defines what happens when the user tries to submit the data
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validate(tlgRegExp, tlg) & validate(emailRegExp, email) & validate(adressRegExp, adress) & validate(birthRegExp, birth) & validate(pibRegExp, pib)){
    show_info()
  }
});
