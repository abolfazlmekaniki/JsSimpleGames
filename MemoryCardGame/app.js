document.addEventListener("DOMContentLoaded",()=>{

    const cards =document.querySelector(".cards");
    // grate our cards object list
    const cards_itmes = [
        {
            src:"./images/1.jpg"
        },
        {
            src:"./images/1.jpg"
        },
        {
            src:"./images/2.jpg"
        },
        {
            src:"./images/2.jpg"
        },
        {
            src:"./images/3.jpg"
        },
        {
            src:"./images/3.jpg"
        },
        {
            src:"./images/4.jpg"
        },
        {
            src:"./images/4.jpg"
        },
        {
            src:"./images/5.jpg"
        },
        {
            src:"./images/5.jpg"
        },
        {
            src:"./images/6.jpg"
        },
        {
            src:"./images/6.jpg"
        }
    ]

    // sort the cards randomely
    cards_itmes.sort(()=> 0.5 - Math.random());

    // create cards element and appendchild to .cards

    for(let item of cards_itmes){
        const card = document.createElement("img");
        card.src = './images/question.jpg';
        card.classList.add("card");
        cards.appendChild(card);
    }

    const div_card = document.querySelectorAll(".card");
    const win = document.querySelector(".win")
    console.log(div_card);
    let clicked_items =[];
    let div_card_list=[]
    let win_item=[];
    div_card.forEach((item,index)=>{
        item.addEventListener("click",()=>{
            
            
            div_card_list.push(index);
            item.src = cards_itmes[index].src;
            clicked_items.push(cards_itmes[index].src);
            item.onload=function(){
                console.log("loaded");
                if(clicked_items.length==2 && clicked_items[0]==clicked_items[1]&& div_card_list.length==2 && div_card_list[0]!=div_card_list[1]){
                    setTimeout(()=>{
                        console.log("first if loop");
                    win_item.push(item.src);
                    div_card[div_card_list[0]].src='./images/checked.jpg';
                    div_card[div_card_list[1]].src='./images/checked.jpg';
                    clicked_items=[];
                    div_card_list=[];
                    },500)
                }
                else if(clicked_items.length==2 && clicked_items[0]!=clicked_items[1]&& div_card_list.length==2 && div_card_list[0]!=div_card_list[1]){
                    setTimeout(()=>{
                        console.log("else if loop");
                    div_card[div_card_list[0]].src='./images/question.jpg';
                    div_card[div_card_list[1]].src='./images/question.jpg';
                    clicked_items=[];
                    div_card_list=[];
                    },500)
                }
                if(win_item.length==cards_itmes.length/2){
                    win.classList.add("win_");
                    setInterval(() => {
                        location.reload();
                    }, 3000);
                }
            }
        })
    })


})