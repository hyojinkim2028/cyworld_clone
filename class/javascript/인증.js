// 타이머 작동중인지 여부
let isStarted = false;
 
const randomNum = () => { 

    if (isStarted == false ) {
        //타이머가 작동중이 아닐때
        isStarted = true;
        document.getElementById("btn").disabled = false;
        //let color = "#"+(parseInt(Math.random()*0xffffff)).toString(16);
        const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0");
        // console.log(number)
        document.getElementById("num").innerHTML= token;
        //document.getElementById("num").style.color= "#"+token;

        let time = 10;
        let timer; // 기존 타이머 함수를 변수에 담아 제어함.
        timer = setInterval(function(){
            if (time >= 0) {
                let min = Math.floor(time/60)
                let sec = String(time % 60).padStart(2,"0")
                document.getElementById("timer").innerText= min + ":"+ sec
                time = time - 1
            } else {
                document.getElementById("btn").disabled = true;
                isStarted = false; // 타이머 작동 종료
                clearInterval(timer) // 초기화
            }
        },1000)
    } else {
        //타이머가 작동중일때, 별도로 명령 작성할 필요 X , 타이머가 작동되는 동안 인증번호 생성되지 않고 타이머 중복실행 안되게
    }
    

}

// 내장함수 timer
// let time = 10;
// setInterval(function(){
//     if(time >= 0) {
//       console.log(time)
//       time = time - 1
//       }
//     },1000)
    
// setInterval(function(){
//     if (time >= 0) {
//         let min = Math.floor(time/60)
//         let sec = String(time % 60).padStart(2,"0")
//         console.log(min + ":"+ sec)
//         time = time - 1
//     }
// },1000)

