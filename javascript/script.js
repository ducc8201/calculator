function printOutput(num) {
    return document.getElementById('output-value').innerText = num;
}

function printHistory(num) {
    return document.getElementById('history-value').innerText = num;
}

let button = document.getElementsByTagName('button');
let i;
let strHis = "";
let  strOut= "";

for (i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        if (this.id === 'clear') {
            strHis = "";
            strOut = "";
            printHistory(strHis);
            printOutput(strOut);
        }
        else if (this.id === '=') {
            strOut = String(eval(strHis));
            strHis = strHis + String(this.id) + String(strOut);
            printOutput(strOut);
            printHistory(strHis);
            strHis = strOut;
        }
        else {
            strHis += String(this.id);
            strOut += String(this.id);
            printOutput(strOut);
            printHistory(strHis);
        }
    });
}