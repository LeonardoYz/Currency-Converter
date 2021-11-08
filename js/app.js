function toggle() {
  let headerBlur = document.getElementById("header__blur");
  headerBlur.classList.toggle("active");

  let homeBlur = document.getElementById("home__blur");
  homeBlur.classList.toggle("active");

  let popup = document.getElementById("popup");
  popup.classList.toggle("active");

  let arrowIconPopup = document.getElementById("flashing");
  arrowIconPopup.classList.toggle("active");
}

const dollarFormBox = document.getElementById("converter__form--dollar");
const dollarSpan = document.getElementById("converter__span--dollar");
const realFormBox = document.getElementById("converter__form--real");
const realSpan = document.getElementById("converter__span--real");


// When popup arrows icon is clicked, reverts to input boxes
document.getElementById("flashing").addEventListener("click", () => {
  dollarFormBox.classList.toggle("revert");
  dollarSpan.classList.toggle("revert");
  realFormBox.classList.toggle("revert");
  realSpan.classList.toggle("revert");

  document.getElementById("dollar").value = "0";
  document.getElementById("real").value = "0";
});

function toConvert() {
  let dollarInput = parseFloat(document.getElementById("dollar").value);
  let realInput = parseFloat(document.getElementById("real").value);

  if (!dollarFormBox.classList.contains('revert')) {
    const dollarAmountConvertedToReal = (dollarInput * 5.29).toFixed(2);
    document.getElementById("real").value = `${dollarAmountConvertedToReal}`;
  } else {
    const realAmountConvertedToDollar = (realInput / 5.29).toFixed(2);
    document.getElementById("dollar").value = `${realAmountConvertedToDollar}`;
  }
}

const converterInput = document.querySelectorAll('.converter__input')
for (let i = 0; i < converterInput.length; i++) {
  converterInput[i].addEventListener('keyup', event => {
    if (event.keyCode === 13) {
      event.preventDefault()
      document.getElementById('convert__button').click()
    }
  })
}