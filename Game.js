    /*
    1. 무승부일 경우 코드 수정@
    2. 잘못된 입력일 경우@
    3. 대소문자 입력
    4. 코드 정리/주석의 구체화@
    5. 자바코드의 분리@
    6. 무승부시 한쪽스코어만 오르는 현상 수정@
    7. HTML추가(image등 삽입)@
    8. 스코어 표시 버그 수정@
    9. game()함수 반복문을 이용해 코드수 줄임@
    ㄴtextbox botton을 이용한 입력으로 오류가 생겨 반복문에서 조건문으로 변경 @
    10. 최종스코어 코드 수정@
    11. 라운드와 결과 구분@

    ========================================

    1. playRound() 의 쓰레기값입력 이벤트 구상@
    2. 최종동점시 플레이어 승리 판정 수정@
    3. 최종 무승부@

    ==========================================

    * 컴퓨터의 선택을 웹페이지에 그림으로 표시
    * 사용자의 선택을 웹페이지에 그림으로 표시
    * 웹페이지에 console화면 출력 or 게임의 진행을 웹페이지에 표시
    */

    let playerSelection = 0; //플레이어의 선택
    let computerSelection = 0; //컴퓨터의 선택
    let youWin=0; //플레이어의 승리 횟수
    let computerWin=0; //컴퓨터의 승리 횟수
    let round=1; //라운드 횟수
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
        
        // computerSelection = computerPlay();

        // console.log("Computer: "+ computerSelection);
        // console.log("You: "+ playerSelection);
        // round++;
    }

    //플레이어와 컴퓨터의 두 결과값을 비교해 승리 판정
    function Winner(){
        
        if(playerSelection===computerSelection){
            console.log("비겼습니다(양쪽 선수 점수 획득)");
            youWin++;
            computerWin++;
        }

        else if(playerSelection==="바위"){
            switch(computerSelection){
                case "보":
                    console.log("당신은 졌습니다");
                    computerWin++;
                    break;
                case "가위":
                    console.log("당신은 이겼습니다");
                    youWin++;
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
                    break;
                case "바위":
                    console.log("당신은 이겼습니다");
                    youWin++;
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
                    break;
                case "바위":
                    console.log("당신은 이겼습니다");
                    youWin++;
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
        var f = document.getElementById("game");
        var userInput = document.getElementById("userInput").value;
        //player1 input의 value값을 읽어옴
        playerSelection = userInput;

        if(round<6){
        console.log("@@@@@ " + round + " 라운드  @@@@@");
        playRound();
        Winner();
        // round++
        console.log(round);
    }

        //5회 실시후 최종 스코어를 통해 최종승리 판정
        if(round>5 && youWin<computerWin){
            console.log("*** 컴퓨터 "+computerWin+" : 당신 "+youWin+" 으로 컴퓨터가 이겼습니다. ***");
        }else if(round>5 && youWin>computerWin){
            console.log("*** 컴퓨터 "+computerWin+" : 당신 "+youWin+" 으로 당신이 이겼습니다. ***");
        }else if(round>5 && youWin==computerWin){
            console.log("*** 컴퓨터 "+computerWin+" : 당신 "+youWin+" 으로 비겼습니다. ***");
        }
    }
    //html와 js간 정보교류 방법에 대해 공부한 사이트
    //https://m.blog.naver.com/PostView.nhn?blogId=finekiller&logNo=70135711013&proxyReferer=https:%2F%2Fwww.google.com%2F
