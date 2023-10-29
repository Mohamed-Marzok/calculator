const arrBtnValue = Array.from(document.querySelectorAll('.btn'), cur => cur.value);
const arrBtn = document.querySelectorAll('.btn');
let screenValue = document.querySelector('.cal-screen');

arrBtn.forEach(btn => btn.addEventListener('click', function () {
    if (btn.value === '') screenValue.value = '';
    if (btn.value !== '=') {
        screenValue.value += btn.value;
    }
    else {
        const check = screenValue.value.split('');
        console.log(check);
        for (let i = 0; i < check.length; i++){
            console.log(check[i],check[i+1]);
            if ((Number(check[i]) !== NaN) && (Number(check[i + 1]) !== NaN)) {
                console.log('test');
                screenValue.value = 'error';
                return 0;
            }
        }
            screenValue.value = Number(eval(screenValue.value));
            console.log(eval(screenValue.value))
            console.log(typeof (screenValue.value));
        
        
        
    }
}))