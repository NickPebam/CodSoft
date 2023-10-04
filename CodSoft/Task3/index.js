function clrScreen(){
    document.getElementById("ans").value = "";
}

function display(value){
    document.getElementById("ans").value += value;
}
function del(){
    var c = document.getElementById("ans").value;
    c = c.slice(0,-1);
    document.getElementById("ans").value = c; 
}

function calculate(){
    var a = document.getElementById("ans").value;
    var b = eval(a);
    document.getElementById("ans").value = b; 
}
