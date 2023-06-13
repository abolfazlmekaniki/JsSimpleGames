document.addEventListener("DOMContentLoaded",()=>{
    let score =0;
    const squers = document.querySelectorAll(".squer");
    const scores= document.querySelector("#score");
    const time=document.querySelector("#time");
    const finall=document.querySelector(".finall");
    const win=document.querySelector(".win");
    const Score_p = document.querySelector(".score_");
    let time_ = 60;
    const btn=document.querySelector("#btn");
    btn.addEventListener("click",()=>{
        btn.classList.add("displayNone");
        Score_p.classList.add("displayBlock");
        time.innerHTML="60 s"
        const timer = setInterval(()=>{
            if(time_<10){
                time.innerHTML="0"+time_ + " s";
            }
            else{
                time.innerHTML=time_ + " s";
            }
            time_--;
            if(time_==0){
                clearInterval(timer);
                clearInterval(randomSet);
                finall.innerHTML=score;
                win.classList.add("win_");
                setTimeout(()=>{
                    location.reload();
                },3000);
                
            }
        },1000)

        const randomSet=setInterval(()=>{
            squers.forEach(item=>{
                item.classList.remove("bg");
            })
            squers[Math.floor(Math.random()*9)].classList.add("bg");
        },650)

        squers.forEach(item=>{
            item.addEventListener("click",()=>{
                if(item.classList.contains("bg")){
                        score++;
                        console.log(score);
                        scores.innerHTML=score;

                }
            })
        })
        })
})