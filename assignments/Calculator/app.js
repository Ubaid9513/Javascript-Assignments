var result = document.getElementById("input")
function getNum(num){
    result.value += num ;
}
function clearResult(){
    result.value = " ";
}
function getResult(){
    result.value = eval(result.value);
}
function del(){
    result.value = result.value.slice(0,-1);
}