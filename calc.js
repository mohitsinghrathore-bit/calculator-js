var button=document.getElementsByClassName('button');
var display=document.getElementById('display');
var operand1=0;
var operand2=null;
var operator=null;
for(var i=0; i<button.length; i++){
    button[i].addEventListener('click', function(){
    var value=this.getAttribute('data-value');
     if( value =='+'){
         operand1=display.textContent;
         display.innerText='';
         operator='+';
     }
     else if( value =='*'){
        operand1=parseFloat(display.textContent);
        display.innerText='';
        operator='*';
    }else if( value =='%'){
        operand1=parseFloat(display.textContent);
        display.innerText='';
        operator='%';
    }else if(value == '='){
          operand2=parseFloat(display.textContent);
          display.innerText=eval(operand1 + operator + 'operand2');
     }else{
       display.innerText += value;
     }
    });
    
}
var h=document.addEventListener('keypress', function(event){
    if(event.keyCode==43){
        operand1=display.textContent;
         display.innerText='';
         operator='+';
    }else if(event.keyCode==45){
        operand1=display.textContent;
         display.innerText='';
         operator='-';
    }else if(event.keyCode==61){
        operand2=parseFloat(display.textContent);
        display.innerText=eval('operand1' + operator + 'operand2');
}else{
     var n=event.keyCode-48;
     n.toString();
     display.innerText +=n;

}
});