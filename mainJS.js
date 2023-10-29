const arrBtnValue = Array.from(document.querySelectorAll('.btn'), cur => cur.value);
const arrBtn = document.querySelectorAll('.btn');
let screenValue = document.querySelector('.cal-screen');

arrBtn.forEach(btn => btn.addEventListener('click', function () {
    if (btn.value === '') screenValue.value = '';
    if (btn.value !== '=') {
        screenValue.value += btn.value;
    }
    else {
       try {
            screenValue.value = Number(eval(screenValue.value));
            console.log(eval(screenValue.value))
            console.log(typeof (screenValue.value));
        }
        catch {
            screenValue.value = "error";
        }
    }
}))
