document.addEventListener("DOMContentLoaded",()=>{


    const winningArrays =  [
        //Horizontal wins
        [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
        [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
        [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
        [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
        [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
        [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
        [42, 43, 44, 45], [43, 44, 45, 46], [44, 45, 46, 47], [45, 46, 47, 48],
        //Vertical wins
        [0, 7, 14, 21], [1, 8, 15, 22], [2, 9, 16, 23], [3, 10, 17, 24],
        [7, 14, 21, 28], [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31],
        [14, 21, 28, 35], [15, 22, 29, 36], [16, 23, 30, 37], [17, 24, 31, 38],
        [21, 28, 35, 42], [22, 29, 36, 43], [23, 30, 37, 44], [24, 31, 38, 45],
        [28, 35, 42, 49], [29, 36, 43, 50], [30, 37, 44, 51], [31, 38, 45, 52],
        [1, 8, 15, 22], [2, 9, 16, 23], [3, 10, 17, 24], [4, 11, 18, 25],
        [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32],
        [15, 22, 29, 36], [16, 23, 30, 37], [17, 24, 31, 38], [18, 25, 32, 39],
        [22, 29, 36, 43], [23, 30, 37, 44], [24, 31, 38, 45], [25, 32, 39, 46],
        [2, 9, 16, 23], [3, 10, 17, 24], [4, 11, 18, 25], [5, 12, 19, 26],
        [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33],
        [16, 23, 30, 37], [17, 24, 31, 38], [18, 25, 32, 39], [19, 26, 33, 40],
        [23, 30, 37, 44], [24, 31, 38, 45], [25, 32, 39, 46], [26, 33, 40, 47],
        [3, 10, 17, 24], [4, 11, 18, 25], [5, 12, 19, 26], [6, 13, 20, 27],
        [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34],
        [17, 24, 31, 38], [18, 25, 32, 39], [19, 26, 33, 40], [20, 27, 34, 41],
        [4, 11, 18, 25], [5, 12, 19, 26], [6, 13, 20, 27], [7, 14, 21, 28],
        [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34], [14, 21, 28, 35],
        [18, 25, 32, 39], [19, 26, 33, 40], [20, 27, 34, 41], [21, 28, 35, 42],
        //Diagonal wins
        [0, 8, 16, 24], [1, 9, 17, 25], [2, 10, 18, 26], [3, 11, 19, 27],
        [7, 15, 23, 31], [8, 16, 24, 32], [9, 17, 25, 33], [10, 18, 26, 34],
        ];
    const squers =document.querySelectorAll(".squres div");
    const blue=document.querySelector(".blue");
    const red=document.querySelector(".red");
    console.log(squers);
    let currenct_player =1;
    blue.classList.add("display");
    function check_winner(){
        winningArrays.forEach((item,index)=>{
            // const one = 7*(Math.floor(item[0]/7)-6)+(item[0]%7);
            // const two = 7*(Math.floor(item[1]/7)-6)+(item[1]%7);
            // const three = 7*(Math.floor(item[2]/7)-6)+(item[2]%7);
            // const four = 7*(Math.floor(item[3]/7)-6)+(item[3]%7);
            const one = item[0];
            const two = item[1];
            const three = item[2];
            const four =item[3];
            if( squers[one].classList.contains("blue_player") &&
                squers[two].classList.contains("blue_player") &&
                squers[three].classList.contains("blue_player") &&
                squers[four].classList.contains("blue_player") 
            ){
                alert("player one won");
                location.reload();
            }
            else if(squers[one].classList.contains("red_player") &&
                    squers[two].classList.contains("red_player") &&
                    squers[three].classList.contains("red_player") &&
                    squers[four].classList.contains("red_player") ){
                        alert("player two won");
                        location.reload();
            }
            else{
                console.log("no one")
            }
        })
    };

    squers.forEach((squer,index)=>{
        squer.onclick=function(){
            if(index<42 && squers[index+7].classList.contains("clicked") && !squers[index].classList.contains("clicked")){
                if(currenct_player==1 ){
                    squer.classList.add("clicked");
                    squer.classList.add("blue_player");
                    blue.classList.remove("display");
                    red.classList.add("display");
                    currenct_player=2;
                }
                else{
                    squer.classList.add("clicked");
                    squer.classList.add("red_player");
                    red.classList.remove("display");
                    blue.classList.add("display");
                    currenct_player=1;
                }
            }
            else if(42<=index && index<=48 &&  !squers[index].classList.contains("clicked")){
                if(currenct_player==1){
                    squer.classList.add("clicked");
                    squer.classList.add("blue_player");
                    blue.classList.remove("display");
                    red.classList.add("display");
                    currenct_player=2;
                }
                else{
                    squer.classList.add("clicked");
                    squer.classList.add("red_player");
                    red.classList.remove("display");
                    blue.classList.add("display");
                    currenct_player=1;
                }
            }
            else alert('cant go here');
            check_winner();
            
        }
    })

    

});

