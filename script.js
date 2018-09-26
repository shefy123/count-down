let count = 0 ;
let whatToDo = function () {
    let div = document.querySelector("div");
    div.innerHTML = count;
    count += 1;
}

setInterval (whatToDo ,1000);


