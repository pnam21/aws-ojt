var gia = document.getElementsByClassName('gia');
function giaban() {
    var chongia = document.getElementById('chongia').value;
    for (var i = 0; i < gia.length; i++) {
        gia[i].parentElement.style.display = '';
    }
    if (chongia == 0) {
        console.log('0')
        for (var i = 0; i < gia.length; i++) {
            gia[i].parentElement.style.display = '';
        }
      
    } else if (chongia == 1) {
        console.log('1')
        for (var i = 0; i < gia.length; i++) {
            if (gia[i].textContent < 100) {
            } else {
                gia[i].parentElement.style.display = 'none';
                soluong[i].value ='0';
            }
        }
    } else if (chongia == 2) {
        console.log('2')
        for (var i = 0; i < gia.length; i++) {
            if (gia[i].textContent >= 100 && gia[i].textContent <= 500) {
            } else {
                gia[i].parentElement.style.display = 'none';
                soluong[i].value ='0';
            }
        }
    }
    else if (chongia == 3) {
        console.log('3')
        for (var i = 0; i < gia.length; i++) {
            if (gia[i].textContent > 500) {
            } else {
                gia[i].parentElement.style.display = 'none';
            }
        }
    }
    tinhtong()
}
var hang =document.getElementsByName('hang');
var soluong =document.getElementsByClassName('soluong');
function allone(el) {
    var one = document.getElementById('tatca');
    if (el.checked) {
        for (var i=0; i<hang.length; i++) {
            hang[i].checked = true;
        }
    } else {
        for (var i=0; i<hang.length; i++) {
            hang[i].checked = false;
        }
    }
    if (one.checked) {
        for (var i = 0; i < soluong.length; i++) {
            soluong[i].removeAttribute('disabled');
        }
    } else {
        for (var i = 0; i < soluong.length; i++) {
            soluong[i].value ='0';
            soluong[i].setAttribute('disabled','');
        }
    }
    tinhtong()
}
function kiemtranut(i) {
    if (hang[i].checked) {
        soluong[i].removeAttribute('disabled')
    } else {
        soluong[i].value ='0';
        soluong[i].setAttribute('disabled','')
    }
    tinhtong()
}
function tinhtong() {
    var sum=0;
    var thanhtien =document.getElementsByClassName('thanhtien');
    for(var i=0;i<soluong.length;i++) {
        thanhtien[i].innerHTML =soluong[i].value*gia[i].textContent;
        sum =sum + soluong[i].value*gia[i].textContent;
    }
    var tongtien =document.getElementById('tongtien').innerHTML =sum;
}
