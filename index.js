
document.getElementById("decrement").onclick = function(){
    var count = document.getElementById("count")
    count.innerHTML = parseInt(count.innerHTML) - 1;
    if((parseInt(count.innerHTML)) <= 0){
        document.getElementById("error").style.display="block"
    }
}

document.getElementById("increment").onclick = function(){
    var count = document.getElementById("count")
    count.innerHTML = parseInt(count.innerHTML) + 1;
    if((parseInt(count.innerHTML)) > 0){
        document.getElementById("error").style.display="none"
    }
}

document.getElementById("reset").onclick = function(){
    var count = document.getElementById("count")
    count.innerHTML = 0;
    document.getElementById("error").style.display="block"
}

