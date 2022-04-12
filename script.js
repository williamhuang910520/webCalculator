var A;
var B;
var Op;

function num(n) {
    let inputElement = document.getElementById("input");
    inputElement.textContent+=n;
}

function op(operater) {
    let num = document.getElementById("input").textContent;
    this.A = Number(num);
    Op = operater;
    document.getElementById("input").textContent='';
    console.log(A);
    console.log(Op);
}

function calculate() {
    let inputElement = document.getElementById("input");
    this.B = Number(inputElement.textContent);
    // console.log(A);
    console.log(B);
    inputElement.textContent='';
    switch (Op) {
        case "plus":
            inputElement.textContent  = A + B;
            break;

        case "min":
            inputElement.textContent  = A - B;
            break;

        case "mul":
            inputElement.textContent  = A * B;
            break;

        case "div":
            inputElement.textContent  = A / B;
            break;
    }
    console.log(inputElement.textContent);
}

function CE(){
    document.getElementById("input").textContent = '';
    this.A=0;
    this.B=0;
    this.Op='plus';
}

function noFun(){
    alert("No function!");
}
