var uname = prompt('введие имя');
var year = +prompt('введите ваш год рождения');
var thyear = +prompt('введите текущий год');
function primer(uname, year, thyear){
    let heryear = thyear - year;
    let text = uname + ', ' + 'Ваш возраст ' + heryear + '.';
    return text;
}


alert(primer(uname, year, thyear));
