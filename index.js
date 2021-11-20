
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



    getbolde();

    
    
    
    }



}


function getbolde(){
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
        var wakeu = document.getElementById("waket").innerText;
        var luchhh = document.getElementById("luncht").innerText;
        var nappp = document.getElementById("napt").innerText;
        
    


        var myna1 = wakeu.slice(18,23)
        var myna2 = luchhh.slice(19,24)
        var myna3 = nappp.slice(17,22)


        var lastmyna1 = wakeu.slice(-5,)
        var lastmyna2 = luchhh.slice(-5,)
        var lastmyna3 = nappp.slice(-5,)

    
        let secdam = " "+hour+d;
        
    
        if(secdam.length==4){
            secdam = " "+hour+d+" ";
        }
        else{
            secdam = " "+hour+d;
        }


        
    

        if(secdam==myna1 || secdam==lastmyna1 ){
            imag.style.backgroundImage = "url(./img/wakeup_image.png)"; 
            document.getElementById("imgtxt").innerText = "wake up !!";
    
        }
        else if(secdam==myna2 || secdam==lastmyna2 ){
            imag.style.backgroundImage = "url(./img/lunch_image.png)"; 
            document.getElementById("imgtxt").innerText = "Let's have some lunch !!";
    
    
        }
        else if(secdam==myna3 || secdam==lastmyna3){
            imag.style.backgroundImage = "url(./img/goodnight_image.png)"; 
            document.getElementById("imgtxt").innerText = "good night !!";
    
    
        }
        else{
            
            imag.style.backgroundImage = "url(./img/default-ima.jpg)"; 
            document.getElementById("imgtxt").innerText = "";
    
    
        }
    
    
    
    }, 1000);
}

















