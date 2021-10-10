var circle=document.getElementById("circle");

circle.addEventListener("click",function(){
    // alert("klik")
    if(!circle.classList.contains("mod2") && !circle.classList.contains("mod3")){// switch to mod2
        circle.classList.toggle("mod2");//push
    }
    else if(circle.classList.contains("mod2")){// switch to mod3
        circle.classList.toggle("mod2");//pop
        circle.classList.toggle("mod3");//push
    }
    else{//switch to mod1
        circle.classList.toggle("mod3");//pop
    }
})