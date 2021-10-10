var circle=document.getElementById("circle");
var body=document.querySelector("body");
var rezScrean=document.querySelector(".rezult");
var container=document.querySelector(".container");

circle.addEventListener("click",function(){
    // alert("klik")
    if(!circle.classList.contains("mod2") && !circle.classList.contains("mod3")){// switch to mod2
        circle.classList.toggle("mod2");//push
        body.style.backgroundColor="#E6E6E6";
        rezScrean.style.backgroundColor="#EEEEEE";
        container.style.backgroundColor="#D2CDCD";
    }
    else if(circle.classList.contains("mod2")){// switch to mod3
        circle.classList.toggle("mod2");//pop
        circle.classList.toggle("mod3");//push
        body.style.backgroundColor="#17062A";
        rezScrean.style.backgroundColor="#1E0936";
        container.style.backgroundColor="#1E0936";
    }
    else{//switch to mod1
        circle.classList.toggle("mod3");//pop
        body.style.backgroundColor="hsl(222, 26%, 31%)";
        rezScrean.style.backgroundColor="hsl(224, 36%, 15%)";
        container.style.backgroundColor="#242D44";
    }
})