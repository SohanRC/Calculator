var input = document.querySelector('#inp');
var string = "";
var buttons = document.querySelectorAll(".btn");
var arr = Array.from(buttons);

for(var i = 0; i < 20 ; i++) {
    buttons[i].addEventListener('click',function (){
        if(this.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if(this.innerHTML == 'AC') {
            string = "";
            input.value = string; 
        }
        else if(this.innerHTML == 'DEL') {
            string = string.substring(0,string.length - 1);
            input.value = string;
        }
        else{
            string = string + this.innerHTML;
            input.value = string;
        } 
    })
}