const circle=document.getElementById("circle");
let rez=document.querySelector(".rez");

circle.addEventListener("click",function(){
    let body=document.querySelector("body");
    let bar=document.querySelector(".bar");
    let rezScrean=document.querySelector(".rezult");
   
    let container=document.querySelector(".container");
    let calc=document.querySelector(".calc");
    let theme=document.querySelector(".theme");
    let lilnums=document.querySelector(".little-numbers");

    let buttons=document.querySelectorAll(".btn-num");
    let btnBigBlue=document.querySelectorAll(".btn-blue");
    let btnBigRed=document.querySelector(".btn-red");

    if(!circle.classList.contains("mod2") && !circle.classList.contains("mod3")){// switch to mod2
        circle.classList.toggle("mod2");//push
        circle.style.backgroundColor="#C85402";
        bar.style.backgroundColor="#D2CDCD";
        body.style.backgroundColor="#E6E6E6";
        rezScrean.style.backgroundColor="#EEEEEE";
        container.style.backgroundColor="#D2CDCD";
        calc.classList.toggle('text2');
        theme.classList.toggle('text2');
        lilnums.classList.toggle('text2');
        rez.classList.toggle('text2');

        btnBigRed.classList.toggle('mode2-big-orange-btn');
        btnBigBlue.forEach(b=>{
            b.classList.toggle('mode2-big-blue-btn');
        });
    }
    else if(circle.classList.contains("mod2")){// switch to mod3
        circle.classList.toggle("mod2");//pop
        circle.classList.toggle("mod3");//push
        circle.style.backgroundColor="#00DED0";
        bar.style.backgroundColor="#1E0936";
        body.style.backgroundColor="#17062A";
        rezScrean.style.backgroundColor="#1E0936";
        container.style.backgroundColor="#1E0936";
        calc.classList.toggle('text2');//pop
        calc.classList.toggle('text3');//push 
        theme.classList.toggle('text2');//pop
        theme.classList.toggle('text3');//push 
        lilnums.classList.toggle('text2');//pop
        lilnums.classList.toggle('text3');//push 
        rez.classList.toggle('text2');//pop
        rez.classList.toggle('text3');//push 

        btnBigRed.classList.toggle('mode2-big-orange-btn');
        btnBigRed.classList.toggle('mode3-big-blue-btn');
        btnBigBlue.forEach(b=>{
            b.classList.toggle('mode2-big-blue-btn');
            b.classList.toggle('mod3-big-putple-btn');
        });
        buttons.forEach(b=>{
            b.classList.toggle('mode2-num-btn');
            b.classList.toggle('mode3-num-btn');
        });
    }
    else{//switch to mod1
        circle.classList.toggle("mod3");//pop
        circle.style.backgroundColor="#D03F2F";
        bar.style.backgroundColor="#242D44";
        body.style.backgroundColor="hsl(222, 26%, 31%)";
        rezScrean.style.backgroundColor="hsl(224, 36%, 15%)";
        container.style.backgroundColor="#242D44";
        calc.classList.toggle('text3');//pop
        theme.classList.toggle('text3');//pop
        lilnums.classList.toggle('text3');//pop
        rez.classList.toggle('text3');//pop

        btnBigRed.classList.toggle('mode3-big-blue-btn');
        btnBigBlue.forEach(b=>{
            b.classList.toggle('mod3-big-putple-btn');
        });
        buttons.forEach(b=>{
            b.classList.toggle('mode3-num-btn');
        });
    }
})

let op1=null;
let op2=null;
let operation=null;
// let eq=false;
function btnFunction(val){
    // alert(val);
    switch(val){
        case '+':{
            if(op1 && !op2 && !operation){
                operation='+';
                break;
            }
            else if(op1 && op2){
                // alert(op1+"+" +op2);
                switch(operation){
                    case '+':op1=parseFloat(op1)+parseFloat(op2);break;
                    case '-':op1=parseFloat(op1)-parseFloat(op2);break;
                    case '/':op1=parseFloat(op1)/parseFloat(op2);break;
                    case 'x':op1=parseFloat(op1)*parseFloat(op2);break;
                }
                rez.textContent=op1.toString().includes('.',1) ? op1.toFixed(4) : op1 ;
                op2=null; operation='+';
                break;
            }else{
                break;
            }
        }
        case '-':{
            if(!op1){
                op1='0';
                operation='-';
                break;
            }
            else if(op1 && !op2 && !operation){
                operation='-';
                break;
            }
            else if(op1 && op2){

                switch(operation){
                    case '+':op1=parseFloat(op1)+parseFloat(op2);break;
                    case '-':op1=parseFloat(op1)-parseFloat(op2);break;
                    case '/':op1=parseFloat(op1)/parseFloat(op2);break;
                    case 'x':op1=parseFloat(op1)*parseFloat(op2);break;
                }
                rez.textContent=op1.toString().includes('.',1) ? op1.toFixed(4) : op1 ;
                op2=null; operation='-';
                break;
            }else{
                break;
            }
        };
        case '/':{
            if(op1 && !op2 && !operation){
                operation='/';
                break;
            }
            else if(op1 && op2){
                if(op1=='0'){rez.textContent='error';break;}
                switch(operation){
                    case '+':op1=parseFloat(op1)+parseFloat(op2);break;
                    case '-':op1=parseFloat(op1)-parseFloat(op2);break;
                    case '/':op1=parseFloat(op1)/parseFloat(op2);break;
                    case 'x':op1=parseFloat(op1)*parseFloat(op2);break;
                }
                rez.textContent=op1.toString().includes('.',1) ? op1.toFixed(4) : op1 ;
                op2=null; operation='/';
                break;
            }else{
                break;
            }
        };
        case 'x':{
            if(op1 && !op2 && !operation){
                operation='x';
                break;
            }
            else if(op1 && op2){

                switch(operation){
                    case '+':op1=parseFloat(op1)+parseFloat(op2);break;
                    case '-':op1=parseFloat(op1)-parseFloat(op2);break;
                    case '/':op1=parseFloat(op1)/parseFloat(op2);break;
                    case 'x':op1=parseFloat(op1)*parseFloat(op2);break;
                }
                rez.textContent=op1.toString().includes('.',1) ? op1.toFixed(4) : op1 ;
                op2=null; operation='x';
                break;
            }else{
                break;
            }
        };
        case '.':{
            if(!op1){
                // alert('tacka');
                op1='0'+val;
                rez.textContent=op1;
                break;
            }else if(op1 && !operation){
                if(op1.toString().includes('.',1)){
                    // alert('vec ima tacku');
                   break;
                }else{
                    // alert('posle tacke dodaj br');
                    op1=op1.toString()+val;
                    rez.textContent=op1;
                    break;
                }
            }else if(op1 && !op2 && operation){
                // alert('tacka 2');
                op2='0'+val;
                rez.textContent=op2;
                break;
            }else if(op1 && op2 && operation){
                if(op2.toString().includes('.',1)){
                    // alert('vec ima tacku 2');
                   break;
                }else{
                    op2=op2.toString()+val;
                    rez.textContent=op2;
                    break;
                }
            }
        }
        case 'del':{// if it 'del' a decimal number then all decimals after '.' are delited
            if(op1 && !op2 && !operation){
                if(op1.toString().includes('-',0) && op1.toString().length==2){
                    op1=null;
                    rez.textContent='0';
                }else{
                    let temp=op1.toString().slice(0,op1.toString().length-1);//string
                    op1=temp.toString().length==0 ? null : parseInt(temp);
                    // alert('op1='+op1);
                    rez.textContent=op1? op1: '0';
                }
                break;
            }else if(op1 && !op2 && operation){
                operation=null;
                break;
            }else if(op1 && operation && op2){
                if(op2.toString().length==2 && op2.toString().includes('-',0)){
                    op2=null;
                    rez.textContent='0';
                }else{
                    let temp=op2.toString().slice(0,op2.toString().length-1);// type string
                    op2=temp.toString().length==0 ? null : parseInt(temp);
                    rez.textContent=op2 ? op2 : '0';
                }
                break;
            }else{break;}
        }
        case '=':{
            if(op1 && op2 && operation){
                switch(operation){
                    case '+':op1=parseFloat(op1)+parseFloat(op2);break;
                    case '-':op1=parseFloat(op1)-parseFloat(op2);break;
                    case '/':op1=parseFloat(op1)/parseFloat(op2);break;
                    case 'x':op1=parseFloat(op1)*parseFloat(op2);break;
                }
                rez.textContent=op1.toString().includes('.',1) ? op1.toFixed(4) : op1 ;
                // op1=null;
                op2=null;
                operation=null;
                break;
            }
            else if(op1 && !op2 && !operation){
                // op1=null;
                break;
            }else{//error
                op1=null;
                op2=null;
                operation=null;
                rez.textContent='error';
                break;
            }
        }
        case 'reset':{
            rez.textContent='0';
            op1=null;
            op2=null;
            operation=null;
            break;
        }
        default:{//if number
            if(!op1){
                op1=val;
                rez.textContent=op1;
                break;
            }else if(op1=='0' && !op2 && operation=='-'){
                op1=-val;
                operation=null;
                rez.textContent=op1;
                break;
            }else if(op1 && !operation){
                if(!op1.toString().includes('.',1)){
                    if(op1<0){
                        op1=op1*10-val;
                    }
                    else{
                        op1=op1*10+val;
                    }
                }else{//decimal
                    op1=op1.toString().concat(val); 
                }
                rez.textContent=op1;
                break;
            }else if(op1 && !op2 && operation){
                op2=val;
                rez.textContent=op2;
                break;
            }else if(op1 && op2 && operation){
                if(!op2.toString().includes('.',1)){
                    op2=op2*10+val;
                }else{//decimal
                    op2=op2.toString().concat(val);
                }
                rez.textContent=op2;
                break;
            }
        }
    }
}
//key codes
// delete	46
// 0	48
// 1	49
// 2	50
// 3	51
// 4	52
// 5	53
// 6	54
// 7	55
// 8	56
// 9	57
// multiply	106 ->'*'
// add	107 ->'+'
// subtract	109 ->'-'
// decimal point  110  ->'.'
// divide	111 ->'/'
// equal sign	187 ->'='
// tab	9  ->'reset'

window.addEventListener("keydown", checkKeyPress,false);

function checkKeyPress(key){
    // alert(key.keyCode);
    
    if(key.keyCode=="46"){
        btnFunction('del');
    }else if(key.keyCode=="48" || key.keyCode=="96"){
        btnFunction(0);
    }else if(key.keyCode=="49" || key.keyCode=="97"){
        btnFunction(1);
    }else if(key.keyCode=="50" || key.keyCode=="98"){
        btnFunction(2);
    }else if(key.keyCode=="51" || key.keyCode=="99"){
        btnFunction(3);
    }else if(key.keyCode=="52" || key.keyCode=="100"){
        btnFunction(4);
    }else if(key.keyCode=="53" || key.keyCode=="101"){
        btnFunction(5);
    }else if(key.keyCode=="54" || key.keyCode=="102"){
        btnFunction(6);
    }else if(key.keyCode=="55" || key.keyCode=="103"){
        btnFunction(7);
    }else if(key.keyCode=="56" || key.keyCode=="104"){
        btnFunction(8);
    }else if(key.keyCode=="57" || key.keyCode=="105"){
        btnFunction(9);
    }else if(key.keyCode=="106"){
        btnFunction('*');
    }else if(key.keyCode=="107"){
        btnFunction('+');
    }else if(key.keyCode=="109"){
        btnFunction('-');
    }else if(key.keyCode=="190"){
        btnFunction('.');
    }else if(key.keyCode=="111" || key.keyCode=="191"){
        btnFunction('/');
    }else if(key.keyCode=="27"){
        btnFunction('reset');
    }else if(key.keyCode=="187"){
        btnFunction('=');
    }
}