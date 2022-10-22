'use strict'

var shooter = document.getElementById("shooter");
var grid = document.getElementById("grid");

let modifier = 20;
let score = 0;

window.addEventListener("keydown",(event) =>{
    var left = parseInt(window.getComputedStyle(shooter).getPropertyValue("left"));
    if(event.key == 'ArrowLeft' && left > 0){
        shooter.style.left = left - modifier +"px";
    }
    if(event.key == 'ArrowRight' && left < 560){
        shooter.style.left = left + modifier +"px";
    }
    if(event.key == 'ArrowUp'){
        var strzala = document.createElement("div");
        strzala.classList.add("strzaly");
        grid.appendChild(strzala);

        var ruszstrzale = setInterval(()=>{
            var balony = document.getElementsByClassName("object");

            for( var i=0;i<balony.length;i++){
                var balon = balony[i];
                var rect1 = balon.getBoundingClientRect();
                var rect2 = strzala.getBoundingClientRect();

                if(
                    (rect1.x < rect2.x + rect2.width &&
                        rect1.x + rect1.width > rect2.x &&
                        rect1.y < rect2.y + rect2.height &&
                        rect1.height + rect1.y > rect2.y))
            {
                   balon.parentElement.removeChild(balon);
                   score++;
                   document.getElementById("wynik").innerHTML = score;
                }
                
            }
            var sbottom = parseInt(window.getComputedStyle(strzala).getPropertyValue("bottom"));
            strzala.style.bottom = sbottom + 2 + "px";
            strzala.style.left = left + 10 + "px";




        },20);
    }
});


let stworzbalony = setInterval(()=>{
    var balon = document.createElement("div");
    balon.classList.add("object");
    var balony = parseInt(window.getComputedStyle(balon).getPropertyValue("left"));
    balon.style.left = Math.floor(Math.random() * 560) + "px";

    grid.appendChild(balon);

},2000);


const u = undefined;
let ruszbalony = setInterval(()=>{
    var balony = document.getElementsByClassName("object");
    let n = 0;
    if(balony!=u){
        for(var i=0;i<balony.length;i++){
            var balon = balony[i];
            var top = parseInt(window.getComputedStyle(balon).getPropertyValue("top"));
            balon.style.top = top + 15 + "px";
            n++;
        if(top>650){
            alert("KONIEC GRY, Kliknij OK żeby rozpocząć ponownie");
            document.location.reload();
            clearInterval(ruszbalony);
        }
        
        }
    }


}, 300);

