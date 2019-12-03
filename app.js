
function gridPrint(id) {
    var div = document.createElement("DIV");
    document.body.appendChild(div);
    div.classList.add('field');
    div.id = id;
}

for(let i=0; i<7; i++){
    gridPrint(i);
}