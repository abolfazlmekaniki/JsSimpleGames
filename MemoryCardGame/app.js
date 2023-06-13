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

    // sort the cards  randomly
    cards_itmes.sort(()=> 0.5 - Math.random());

    // create cards element and appendchild to .cards

    for(let item of cards_itmes){
        const card = document.createElement("img");
        card.src = item.src;
        card.classList.add("card");
        cards.appendChild(card);
    }





})