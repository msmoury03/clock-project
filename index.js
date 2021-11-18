
let date= new Date(),
hour = date.getHours(),
min = date.getMinutes(),
sec = date.getSeconds();

setInterval(()=>{

    
    let date= new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();
   

    let d;
    d = hour <12 ?"AM" : "PM";
    hour = hour >12 ? hour - 12 : hour;
    hour = hour == 0 ? hour = 12 : hour;


 

    let hh =document.querySelector("#hours").innerText = hour;
    document.querySelector("#minute").innerText = min;
    document.querySelector("#second").innerText = sec;
    document.querySelector("#ampm").innerText = d;


   

    

    
   
    

}, 1000)  



function settfun(){
    
    let waketime = document.getElementById("wake").value;
    let lunchtime = document.getElementById("lunch").value;
    let naptime = document.getElementById("nap").value;
    

    if(waketime=="" || lunchtime=="" || naptime=="" ){

    }
    else{
    var wwtim = document.getElementById("waket").innerText = "wake up time is -- "+waketime;
    var lltim = document.getElementById("luncht").innerText = "lunch up time is -- "+lunchtime;
    var natim = document.getElementById("napt").innerText = "nap up time is -- "+naptime;

    document.getElementById("divibox2").style.display = "block";

    
    
    }

    setInterval(() => {
    
        let date= new Date(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    
        let d;
        d = hour <12 ?"AM" : "PM";
        hour = hour >12 ? hour - 12 : hour;
        hour = hour == 0 ? hour = 12 : hour;
    
        var imag = document.getElementsByClassName("divimg")[0];
        var wakeu = document.getElementById("waket");
        var luchhh = document.getElementById("luncht");
        var nappp = document.getElementById("napt");
        
        let waketime = document.getElementById("wake").value;
        let lunchtime = document.getElementById("lunch").value;
        let naptime = document.getElementById("nap").value;
    
        var anty = waketime.slice(0,5);
        var vant = lunchtime.slice(0,5);
        var manty = naptime.slice(0,5);
    
        var lastanty = waketime.slice(-5,);
        var lastvant = lunchtime.slice(-5,);
        var lastmanty = naptime.slice(-5,);
    
        let secdam = " "+hour+d;
    
        // var aaaa= document.getElementById("wake").value.length;
        
    
        if(secdam.length==4){
            secdam = " "+hour+d+" ";
        }
        else{
            secdam = " "+hour+d;
        }
    

        if(secdam==anty || secdam==lastanty ){
            imag.style.backgroundImage = "url(./img/wakeup_image.png)"; 
            document.getElementById("imgtxt").innerText = "wake up !!";
    
        }
        else if(secdam==vant || secdam==lastvant ){
            imag.style.backgroundImage = "url(./img/lunch_image.png)"; 
            document.getElementById("imgtxt").innerText = "Let's have some lunch !!";
    
    
        }
        else if(secdam==manty || secdam==lastmanty){
            imag.style.backgroundImage = "url(./img/goodnight_image.png)"; 
            document.getElementById("imgtxt").innerText = "good night !!";
    
    
        }
        else{
            
            imag.style.backgroundImage = "url(./img/default-ima.jpg)"; 
            document.getElementById("imgtxt").innerText = "";
    
    
        }
    
    
    
    }, 1000);
    



    


}



















// if(hhr.innerText==){

// }


