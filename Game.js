    let playerSelection = 0; //플레이어의 선택
    let computerSelection = 0; //컴퓨터의 선택
    let youWin=0; //플레이어의 승리 횟수
    let computerWin=0; //컴퓨터의 승리 횟수
    let round=1; //라운드 횟수
    // let cw=0;
    // let uw=0;

    //랜덤으로 컴퓨터의 선택을 만듬
    function computerPlay(){
        let randomNumber = Math.floor(Math.random()*3);
    // 0~2까지의 수를 randomNumber변수에 저장

        switch(randomNumber){
            case 0:
                return "바위";
            case 1:
                return "가위";
            case 2:
                return "보";
        } //switch를 사용해 randomNumber의 값에 따라 특정값 return
    }

    //플레이어와 컴퓨터의 선택을 최종결정
    function playRound(){
        // playerSelection = prompt("rock, scissor, paper");

        //쓰레기값 입력시
        if(playerSelection !== "바위"&&playerSelection !== "가위"&&playerSelection !== "보"){            console.log("잘못된 입력입니다 다시 입력해주세요")
            // playerSelection = prompt("rock, scissor, paper");
            console.log("잘못된 값입니다.");
        }
        else{computerSelection = computerPlay();

            console.log("Computer: "+ computerSelection);
            console.log("You: "+ playerSelection);

            round++;}
    }

    //플레이어와 컴퓨터의 두 결과값을 비교해 승리 판정
    function Winner(){
        
        if(playerSelection===computerSelection){
            console.log("비겼습니다(양쪽 선수 점수 획득)");
            youWin++;
            computerWin++;
            document.getElementById("userImg").src = "image/Q.png";
            document.getElementById("computerImg").src = "image/Q.png";
        }

        else if(playerSelection==="바위"){
            switch(computerSelection){
                case "보":
                    console.log("당신은 졌습니다");
                    computerWin++;
                    document.getElementById("computerImg").src ="image/win/paper.png";
                    document.getElementById("userImg").src = userImg_info();
                    break;
                case "가위":
                    console.log("당신은 이겼습니다");
                    youWin++;
                    document.getElementById("computerImg").src = computerImg_info();
                    document.getElementById("userImg").src = "image/win/scissor.png";
                    break;
                default:
                    break;
            }   
        }

        else if(playerSelection==="보"){
            switch(computerSelection){
                case "가위":
                    console.log("당신은 졌습니다");
                    computerWin++;
                    document.getElementById("computerImg").src ="image/win/scissor.png";
                    document.getElementById("userImg").src = userImg_info();
                    break;
                case "바위":
                    console.log("당신은 이겼습니다");
                    youWin++
                    document.getElementById("computerImg").src = computerImg_info();
                    document.getElementById("userImg").src = "image/win/rock.png";
                    break;
                default:
                    break;
            }
        }

        else if(playerSelection==="가위"){
            switch(computerSelection){
                case "바위":
                    console.log("당신은 졌습니다");
                    computerWin++;
                    document.getElementById("computerImg").src ="image/win/rock.png";
                    document.getElementById("userImg").src = userImg_info();
                    break;
                case "보":
                    console.log("당신은 이겼습니다");
                    youWin++;
                    document.getElementById("computerImg").src = computerImg_info();
                    document.getElementById("userImg").src = "image/win/scissor.png";
                    break;
                default:
                    break;
            }
        }
        console.log("당신의 점수: " + youWin);
        console.log("컴퓨터의 점수: " + computerWin);
    }

    //게임을 시작함
    function game() {
        // var f = document.getElementById("game");
        let userInput = document.getElementById("userInput").value;
        //player1 input의 value값을 읽어옴
        playerSelection = userInput;
        // document.getElementById("userImg").src = userImg_info();
        // document.getElementById("computerImg").src = computerImg_info();
        
        if(round<6){
        console.log("@@@@@ " + round + " 라운드  @@@@@");
        playRound();
        Winner();
        }
        // document.getElementById("computerImg").src = computerImg_info();
        // document.getElementById("userImg").src = userImg_info();

        //5회 실시후 최종 스코어를 통해 최종승리 판정
        if(round>5 && youWin<computerWin){
            console.log("*** 컴퓨터 "+computerWin+" : 당신 "+youWin+" 으로 컴퓨터가 이겼습니다. ***");
        }else if(round>5 && youWin>computerWin){
            console.log("*** 컴퓨터 "+computerWin+" : 당신 "+youWin+" 으로 당신이 이겼습니다. ***");
        }else if(round>5 && youWin==computerWin){
            console.log("*** 컴퓨터 "+computerWin+" : 당신 "+youWin+" 으로 비겼습니다. ***");
        }
    }


    function userImg_info(){
        let img_2;
        switch(playerSelection){
            case "가위":
                img_2 = "image/scissor.png";
                return img_2;
            case "바위":
                img_2 = "image/rock.png";
                return img_2;
            case "보":
                img_2 = "image/paper.png"
                return img_2;
            default:
                break;                 
        }
    }

    function computerImg_info(){
        let img_1;
        switch(computerSelection){
            case "가위":
                img_1 = "image/scissor.png";
                return img_1;
            case "바위":
                img_1 = "image/rock.png";
                return img_1;
            case "보":
                img_1 = "image/paper.png"
                return img_1;
            default:
                break;                 
        }
    }

    // while(true){
    //     if(cw==1){
    //         document.getElementById("computerImg").src = "image/win/";
    //     }
    // }

    // document.getElementById("userImg").src = userImg_info();


    // document.getElementById("computerImg").src=computerImg_info();

    //html와 js간 정보교류 방법에 대해 공부한 사이트
    //https://m.blog.naver.com/PostView.nhn?blogId=finekiller&logNo=70135711013&proxyReferer=https:%2F%2Fwww.google.com%2F
    //html이미지 변환
    //https://www.python2.net/questions-220776.htm
    //https://qastack.kr/programming/11722400/programmatically-change-the-src-of-an-img-tag
