
let count= 0;

function increaseCount(){
    
    count += 1;
    document.getElementById("yourLabel").innerHTML = count ;
}
function resetCount(){
    
    count = 0;
    document.getElementById("yourLabel").innerHTML = count ;
}
function decreaseCount(){
    
    count -= 1;
    document.getElementById("yourLabel").innerHTML = count ;
}
