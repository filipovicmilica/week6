var body=document.querySelector("body");
var circle=document.getElementById("circle");
var bar=document.querySelector(".bar");
var rezScrean=document.querySelector(".rezult");
var rez=document.querySelector(".rez");
var container=document.querySelector(".container");
var calc=document.querySelector(".calc");
var theme=document.querySelector(".theme");
var lilnums=document.querySelector(".little-numbers");

var buttons=document.querySelectorAll(".btn-num");
var btnBigBlue=document.querySelectorAll(".btn-blue");
var btnBigRed=document.querySelector(".btn-red");

circle.addEventListener("click",function(){

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