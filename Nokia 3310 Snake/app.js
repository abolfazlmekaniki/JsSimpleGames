document.addEventListener("DOMContentLoaded",()=>{


    const cells = document.querySelectorAll(".SnakeBored div");

    let direction = 1 // to the left 

    current_snake = [0,1,2];

    last_moves=[0,1,2];
    
    current_snake.forEach(element => {

        cells[element].classList.add("snake");
        
    });

    const move = setInterval(()=>{

        if(direction == 1 ){
                const length_ = last_moves.length;
                current_snake.forEach((element,index) =>{
                    
                        cells[element].classList.remove("snake");
                        
                        
                      
                });

                let last = last_moves[last_moves.length -1];

                check_geme_over(direction,last_moves);
                last_moves.push(last+1);


                for(let i = last_moves.length -1 ; i> (last_moves.length -1) - current_snake.length ;i--){
                    current_snake=last_moves.slice(-current_snake.length);
                    
                    cells[last_moves[i]].classList.add("snake");
                }
                

        }

        else if(direction == 2 ){
            const length_ = last_moves.length;
            current_snake.forEach((element,index) =>{
                
                    cells[element].classList.remove("snake");
                    
                    
                  
            });

            let last = last_moves[last_moves.length -1];
            console.log("last item of  moves is :" + last);

            last_moves.push(last+10);
            check_geme_over(direction , last_moves);

            console.log(" moves  :" + last_moves);
            for(let i = last_moves.length -1 ; i> (last_moves.length -1) - current_snake.length ;i--){
                current_snake=last_moves.slice(-current_snake.length);
                cells[last_moves[i]].classList.add("snake");
            }
            console.log("current_snake[current_snake.length-1] = "+current_snake[current_snake.length-1])

            
            

        }

        else if(direction == -1 ){
        const length_ = last_moves.length;
        current_snake.forEach((element,index) =>{
            
                cells[element].classList.remove("snake");
                
                
              
        });

        let last = last_moves[last_moves.length -1];
        console.log("last item of  moves is :" + last);



        last_moves.push(last-1);

        check_geme_over(direction , last_moves);

        console.log(" moves  :" + last_moves);
        for(let i = last_moves.length -1 ; i> (last_moves.length -1) - current_snake.length ;i--){
            current_snake=last_moves.slice(-current_snake.length);
            cells[last_moves[i]].classList.add("snake");
        }
        console.log("current_snake[current_snake.length-1] = "+current_snake[current_snake.length-1])
        
        

        }
        else if(direction == -2 ){
        const length_ = last_moves.length;
        current_snake.forEach((element,index) =>{
            
                cells[element].classList.remove("snake");
                
                
              
        });

        let last = last_moves[last_moves.length -1];
        console.log("last item of  moves is :" + last);

        last_moves.push(last-10);
        check_geme_over(direction , last_moves);
        console.log(" moves  :" + last_moves);
        for(let i = last_moves.length -1 ; i> (last_moves.length -1) - current_snake.length ;i--){
            current_snake=last_moves.slice(-current_snake.length);
            cells[last_moves[i]].classList.add("snake");
        }
        console.log("current_snake[current_snake.length-1] = "+current_snake[current_snake.length-1])
        if(current_snake[current_snake.length-1] %10 ==0){
            clearInterval(move);
        }
        
        

        };

        // check_geme_over(direction , lastMove)

    },1000);



    function check_geme_over(direction , lastMove){
        console.log("direction is : "+direction +"and last cell is : "+lastMove[lastMove.length -1]);
        if(direction ==1 && lastMove[lastMove.length -1] %10==9 && lastMove[lastMove.length -1] !=0){
            clearInterval(move);
            console.log("game over")
        }

        else if(direction == -1 && lastMove[lastMove.length -1] %10==9 ){
        
            clearInterval(move);
            console.log("game over");
        }
        else if(direction == 2 && lastMove[lastMove.length -1] >=100 ){
      
            clearInterval(move);
            console.log("game over");
        }
        else if(direction == -2 && lastMove[lastMove.length -1] <0 ){
            
            clearInterval(move);
            console.log("game over");
        }
    };


    function control(e) {
        // squares[currentIndex].classList.remove('snake')
        console.log(e.keyCode);
        if(e.keyCode === 39) {
          direction = 1 //if we press the right arrow on our keyboard, the snake will go right one
        } else if (e.keyCode === 40) {
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