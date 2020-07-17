 //변수, 상수


//1
var score1 = 0;                     //함수단위의 스코프 function(){  여기서만 유효  }
let score2 = 200;                   //블럭단위의 스코프 {    안에서 유호    }
const defaultScore = 0;

//2
function outer( ){
    function inner(){
        var score = 0;
    }
    console.log(score);              //변수는 함수 밖에서 실행되는 함수는 실행되지 않는다.
}
outer();

//3
function outer( ){
    var score = 0;
   
    function inner(){
        console.log(score);  
    }
    inner();
    console.log(score);              //하지만 상위인 경우에는 어디서든 가능함
}
outer();

//4
function outer( ){
    var score = 0;
   
    if(true){
        var score = 0;               //그러나 var키워드는  함수단위의 스코프이기 때문에 if나 for문 안에서 사용되도 사용할 수 있음.
    }
    inner();
    console.log(score);             
}
outer();

//4
function outer( ){
    var score = 0;
   
    if(true){
        var score = 0;               
    }
    
    for (var i = 0; i < 3; i++) {   //그러나 var키워드는  함수단위의 스코프이기 때문에 이런경우에는 100ms후에 실행되면 이미 숫자는 증가한뒤 출력됨
        setTimeout(() => {            //0,3,3,3
            console.log(i);
        }, 100);
    }
    console.log(score);             
}
outer();


//let 1
function outer( ){
   
    if(true){
        let score = 0;        // 이렇게 처음에 숫자형을 선언하면 숫자밖에 못들어온다
        score = 30;          // 같은 숫자형을 할당하면 문제 없다
        score = '30';         // 이렇게 문자열을 넣어버리면 
       //let score;            //이렇게 초기값을 안넣으면 any타입을 넣어 타입이 아무거나 들어올 수 있음
       //let score: number     // 타입을 지정할 수도 있다.

       for (let i = 0; i < 3; i++) {
           setTimeout(() => {    //var 과는 다르게 let은 제대로 출력이 가능하다. 
               console.log(i)     //0,1,2
           }, 100);
       }
    }         
}
outer();


//const 1
function outer( ){
   
    if(true){
        const score = 0;           //상수는 한번 정해지면 변하지 않는 값이기 때문에 선언시 초기값을 무조건 채워줘야한다.
        score = 30;                //같은 타입의 값을 할당하려고 해도 상수이기 때문에 재할당이 안된다.
       //let score;              //초기값을 무조건 설정해야 한다.
       //let score: number       //const는 초기값이 정해지기 때문에 타입을 설정할 필요가 없다
    }              //여기 까지 블록 안에서만 사용할 수 있다. 
       for (let i = 0; i < 3; i++) {
           setTimeout(() => {    //var 과는 다르게 let은 제대로 출력이 가능하다. 
               console.log(i)     //0,1,2
           }, 100);
       }
             
}
outer();