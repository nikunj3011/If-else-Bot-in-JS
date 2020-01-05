var input = document.getElementById('input');
var output = document.getElementById('output');

function processForm(e) {
    if (e.preventDefault) e.preventDefault();

	start(input.value,out);

     return false;
}

var form = document.getElementById('my-form');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}


var out = function(outtext) {

var newParagraph = document.createElement('p');

var paraText= document.createTextNode(outtext);

newParagraph.appendChild(paraText);

newParagraph.appendChild(paraText);

output.appendChild(newParagraph);

}

start("",out);
