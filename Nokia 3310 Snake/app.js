document.addEventListener("DOMContentLoaded",()=>{

    const btn_ = document.querySelector("#btn");
    
    btn_.addEventListener("click",function(){
        btn_.classList.add("show_no");
        const cells = document.querySelectorAll(".SnakeBored div");

    let direction = 1 // to the left 

    let current_snake = [0,1,2];

    let snake_length = 3;

    let last_moves=[0,1,2];

    let score_ = 0;

    const score = document.querySelector("#score");
    const score2 = document.querySelector("#score2");
    const div_score = document.querySelector(".score");

    
    current_snake.forEach(element => {

        cells[element].classList.add("snake");
        
    });

    const move = setInterval(()=>{

        check_apple(last_moves);
        check_geme_over(direction , last_moves);

        if(direction == 1 ){
                const length_ = last_moves.length;
                current_snake.forEach((element,index) =>{
                    
                        cells[element].classList.remove("snake");
                        
                        
                      
                });
                // check_apple(last_moves);

                let last = last_moves[last_moves.length -1];

                
                last_moves.push(last+1);
                // check_geme_over(direction,last_moves);
                


                for(let i = last_moves.length -1 ; i> (last_moves.length -1) - snake_length ;i--){
                    current_snake=last_moves.slice(-snake_length);
                    
                    cells[last_moves[i]].classList.add("snake");
                }
                

        }

        else if(direction == 2 ){
            const length_ = last_moves.length;
            current_snake.forEach((element,index) =>{
                
                    cells[element].classList.remove("snake");
                    
                    
                  
            });
            
            let last = last_moves[last_moves.length -1];
            // console.log("last item of  moves is :" + last);

            last_moves.push(last+10);
            
            // check_geme_over(direction , last_moves);

            // console.log(" moves  :" + last_moves);
            for(let i = last_moves.length -1 ; i> (last_moves.length -1) - current_snake.length ;i--){
                current_snake=last_moves.slice(-current_snake.length);
                cells[last_moves[i]].classList.add("snake");
            }
            // console.log("current_snake[current_snake.length-1] = "+current_snake[current_snake.length-1])

            
            

        }

        else if(direction == -1 ){
        const length_ = last_moves.length;
        current_snake.forEach((element,index) =>{
            
                cells[element].classList.remove("snake");
                
                
              
        });

        let last = last_moves[last_moves.length -1];
        // console.log("last item of  moves is :" + last);



        last_moves.push(last-1);
        
        // check_geme_over(direction , last_moves);
        

        // console.log(" moves  :" + last_moves);
        for(let i = last_moves.length -1 ; i> (last_moves.length -1) - current_snake.length ;i--){
            current_snake=last_moves.slice(-current_snake.length);
            cells[last_moves[i]].classList.add("snake");
        }
        // console.log("current_snake[current_snake.length-1] = "+current_snake[current_snake.length-1])
        
        

        }
        else if(direction == -2 ){
        const length_ = last_moves.length;
        current_snake.forEach((element,index) =>{
            
                cells[element].classList.remove("snake");
                
                
              
        });

        let last = last_moves[last_moves.length -1];
        // console.log("last item of  moves is :" + last);

        last_moves.push(last-10);
        
        // check_geme_over(direction , last_moves);
        // console.log(" moves  :" + last_moves);
        for(let i = last_moves.length -1 ; i> (last_moves.length -1) - current_snake.length ;i--){
            current_snake=last_moves.slice(-current_snake.length);
            cells[last_moves[i]].classList.add("snake");
        }
        // console.log("current_snake[current_snake.length-1] = "+current_snake[current_snake.length-1])


        };


    },500);



    function check_geme_over(direction , lastMove){
        // console.log("direction is : "+direction +"and last cell is : "+lastMove[lastMove.length -1]);
        if(direction ==1 && lastMove[lastMove.length -1] %10==9 && lastMove[lastMove.length -1] !=0){
            clearInterval(move);
            console.log("game over");
            btn_.classList.remove("show_no");
            div_score.classList.add("show_");
            setTimeout(()=>{
                window.location.reload();
            },3000)
        }

        else if(direction == -1 && lastMove[lastMove.length -1] %10==0  ){
        
            clearInterval(move);
            console.log("game over");
            btn_.classList.remove("show_no");
            div_score.classList.add("show_");
            setTimeout(()=>{
                window.location.reload();
            },3000)
        }
        else if(direction == 2 && lastMove[lastMove.length -1] >=100 ){
      
            clearInterval(move);
            console.log("game over");
            btn_.classList.remove("show_no");
            div_score.classList.add("show_");
            setTimeout(()=>{
                window.location.reload();
            },3000)
        }
        else if(direction == -2 && lastMove[lastMove.length -1] <0 ){
            
            clearInterval(move);
            console.log("game over");
            btn_.classList.remove("show_no");
            div_score.classList.add("show_");
            setTimeout(()=>{
                window.location.reload();
            },3000)
        };

        if(lastMove.slice(-snake_length,-1).indexOf(lastMove[lastMove.length -1]) != -1){

            // clearInterval(move);
            console.log("game over");
            snake_length-=lastMove.slice(-snake_length,-1).indexOf(lastMove[lastMove.length -1]);



        }


    };



    function check_apple(lastMove){
        // console.log(cells[lastMove[lastMove.length -1]].classList);
        if(lastMove[lastMove.length -1]<100 && 0<=lastMove[lastMove.length -1]  &&  cells[lastMove[lastMove.length -1]].classList.contains("apple")){
            cells[lastMove[lastMove.length -1]].classList.remove("apple");
            snake_length ++ ;
            score_++
            score.innerHTML = score_;
            score2.innerHTML = score_;
            // cells[lastMove[lastMove.length - snake_length]].classList.add("snake");
            randome_apple();
        }
        // else if(cells[lastMove[lastMove.length -1]].classList.contains("snake")){
        //     cells[lastMove[lastMove.length -1]].classList.remove("apple");
        //     snake_length ++ ;
        //     // cells[lastMove[lastMove.length - snake_length]].classList.add("snake");
        //     randome_apple();
        // }
    }

    function randome_apple(){
        let position = Math.floor(Math.random()*100 -1);
        console.log("apple is in snake : "+last_moves.indexOf(position));
        while(last_moves.slice(-snake_length).indexOf(position)!=-1){
             position = Math.floor(Math.random()*100 -1);
            
        }
        cells[position].classList.add("apple");
        
    }

    function control(e) {
        
        // console.log(e.keyCode);

        if(e.keyCode === 39) {
          direction = 1 //if we press the right arrow on our keyboard, the snake will go right one
        }
        
        else if (e.keyCode === 40) {
          direction = 2 // if we press the up arrow, the snake will go back ten divs, appearing to go up

        }

        else if (e.keyCode === 37) {
            direction = -1 // if we press the up arrow, the snake will go back ten divs, appearing to go up

        }

        else if (e.keyCode === 38) {
            direction = -2 // if we press the up arrow, the snake will go back ten divs, appearing to go up

        }
    }
    
    document.addEventListener('keyup', control)

    })
    
})