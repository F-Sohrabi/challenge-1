let prev = 'price'

function check(value){
    document.getElementById(prev).checked = true;
    document.getElementById(value).checked = true;
    prev = value
}
