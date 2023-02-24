var celci = document.getElementById("cel");
var fahre = document.getElementById("fah");
var kelvi = document.getElementById("kel");
var ranki = document.getElementById("ran");
var reaum = document.getElementById("rea");

celci.addEventListener('input',function(){
    let c = this.value;
    let f = (c * 9/5) + 32;
    let k = c + 273.15;//bug     
    let r = (c * (9/5)) + 491.67;//
    let re = c*4/5;
    // if(!Number.isInteger(k)){
    //     k = k.toFixed(4);
    // }
    fahre.value = f;
    ranki.value = r;
    reaum.value = re;
    kelvi.value = k;
});
fahre.addEventListener('input',function(){
    let f = this.value;
    let c = (f - 32) * 5/9;
    let k = ((f-32)/1.8)+273.15;
    let r = (f-32) + 491.67;//
    let re = (f-32) * 0.4445;
    // if(!Number.isInteger(c)){
    //     c = c.toFixed(4);
    // }
    celci.value = c;
    kelvi.value = k;
    ranki.value = r;
    reaum.value = re;
});
kelvi.addEventListener('input',function(){
    let k = this.value;
    let c = k-273.15;;
    let f = 1.8 * (k-273.15) + 32;
    let r = k* 1.8;
    let re = (k-273) * 0.8;
    // if(!Number.isInteger(c)){
    //     c = c.toFixed(4);
    // }
    celci.value = c;
    ranki.value = r;
    reaum.value = re;
    fahre.value = f;
});
ranki.addEventListener('input',function(){
    let r = this.value;
    let c = (r -491.67) * 5/9 ;
    let f = r - 459.67;
    let k = r * 5/9;
    let re = (r - 491.67) * 0.44444;
    // if(!Number.isInteger(c)){
    //     c = c.toFixed(4);
    // }
    celci.value = c;
    kelvi.value = k;
    reaum.value = re;
    fahre.value = f;
});
reaum.addEventListener('input',function(){
    let re = this.value;
    let c = 1.25 * re;
    let f = re * 2.2500 + 32.00 //Ré x 5 / 4 + 273.15
    let k =  (re * 0.8) + 273.15
    let r = re*(9/4)+491.67;
    // if(!Number.isInteger(c)){
    //     c = c.toFixed(4);
    // }
    celci.value = c;
    kelvi.value = k;
    ranki.value = r;
    fahre.value = f;
});