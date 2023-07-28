var celci = document.getElementById("cel");
var fahre = document.getElementById("fah");
var kelvi = document.getElementById("kel");
var ranki = document.getElementById("ran");
var reaum = document.getElementById("rea");

celci.addEventListener('input',function(){
    let c = parseFloat(this.value);
    let f = (c * 9/5) + 32;
    let k = c + 273.15;
    let r = (c * (9/5)) + 491.67;
    let re = c * 4/5;

    fahre.value = f;
    ranki.value = r;
    reaum.value = re;
    kelvi.value = k;
});

fahre.addEventListener('input',function(){
    let f = parseFloat(this.value);
    let c = (f - 32) * 5/9;
    let k = (f + 459.67) * 5/9;
    let r = f + 459.67;
    let re = (f - 32) * 0.4445;

    celci.value = c;
    kelvi.value = k;
    ranki.value = r;
    reaum.value = re;
});

kelvi.addEventListener('input',function(){
    let k = parseFloat(this.value);
    let c = k - 273.15;
    let f = (k * 9/5) - 459.67;
    let r = k * 1.8;
    let re = (k - 273.15) * 0.8;

    celci.value = c;
    ranki.value = r;
    reaum.value = re;
    fahre.value = f;
});

ranki.addEventListener('input',function(){
    let r = parseFloat(this.value);
    let c = (r - 491.67) * 5/9;
    let f = r - 459.67;
    let k = (r + 459.67) * 5/9;
    let re = (r - 491.67) * 0.44444;

    celci.value = c;
    kelvi.value = k;
    reaum.value = re;
    fahre.value = f;
});

reaum.addEventListener('input',function(){
    let re = parseFloat(this.value);
    let c = re * 1.25;
    let f = re * 2.25 + 32;
    let k = (re * 1.25) + 273.15;
    let r = re * 2.25 + 491.67;

    celci.value = c;
    kelvi.value = k;
    ranki.value = r;
    fahre.value = f;
});
