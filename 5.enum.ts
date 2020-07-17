//열거형
//enum(열거형)은 상수들의 집합을 정의할떄 사용할수 있음
//회원의 등급과 같은 특정한 상수들의 집합에 이름을 부여한다.


//스타벅스 등급을 enum으로
enum StarbuksGrade{
    WELCOME,
    GREEN,
    GOLD
}

//회원에 따른 할인함수를 만들면
function getDicount(v: StarbuksGrade ):number{    //enum도 type이기 때문에 StarbuksGrade를 타입으로 하고 discount 반환값을 숫자로 지정한다.
    switch(v){
        case StarbuksGrade.WELCOME:            //WELCOME 등급이면
            return 0;                           //0프로
            case StarbuksGrade.GREEN:
                return 5;
                case StarbuksGrade.GOLD:
                    return 10;
    }
}

//호출해보면
console.log(getDicount(StarbuksGrade.GREEN))  //starbuks의 grade의 값을 줘야 한다.  5가 찍힌다.

//grade에 실제로 어떤 값이 들어가 있을까?
console.log(StarbuksGrade.GREEN)          //1이 찍히는데 Why?

//
enum StarbuksGrade{
    WELCOME,    //0
    GREEN,      //1              GREEN 이 1이기 때문에 1이 찍힌다.
    GOLD        //2
}

//console.log(StarbuksGrade) 를 찍어보면 아래와 같은 객체값이 나오는데
{
    '0':'WELCOME',     //문자열 0 이 WELCOME 문자열
    '1':'GREEN',
    '2':'GOLD'
    WELCOME:0,        //반대로 키가 문자열이 숫자열에 해당하는 숫자에 들어가 있다.
    GREEN:1,
    GOLD:2
}                    //즉 쌍방으로 들어가 있는 것인데

//만약
console.log(StarbuksGrade['GOLD'])        //이러면 2라는 값이 나오게 되고
console.log(StarbuksGrade['0'])           //이러면 WELCOME이라는 값이 나오게 된다.


//그럼 만약 enum 중간에 또다른 등급이 생기면?
enum StarbuksGrade{
    WELCOME,
    BLACK,       //BLACK을 추가해보면
    GREEN,             //위에 GREEN, GOLD가 사용됬던 코드들이 망가지게 된다.
    GOLD  
}               

//이런일을 방지하기 위해
enum StarbuksGrade{
    WELCOME = 0,
    BLACK = 3,      
    GREEN = 1,            
    GOLD = 2  
}                           //실제 값을 이렇게 직접 할당하는 것이 나중에 코드가 변경되어도 안전하게 사용할 수 있다.

//그리고 TypeScript2.4부터 숫자뿐만이 아닌 문자열로도 값을 할당할 수 있다.
enum StarbuksGrade{
    WELCOME = 'WELCOME',   
    GREEN = 'GREEN',             
    GOLD = 'GOLD'  
}   

//그렇다면 어떤값이 들어갔는지 확인해보자
console.log(StarbuksGrade.GREEN === 'GREEN')    //true값이 나온다.
console.log(StarbuksGrade)    //{WELCOME: ' WELCOME', GREEN: 'GREEN', GOLD:'GOLD'}

//키의 이름과 실제 값이 같기 때문에
console.log(StarbuksGrade['WELCOME'])   //이 두개는 같은 값이기 때문에 값은 값이 나온다.
console.log(StarbuksGrade.WELCOME)       

//특정 서버에서 코드값에 해당하는 enum값이 무엇이 올지 모르기때문에
console.log(getDicount(StarbuksGrade['GREEN'])) //그것에 해당하는 enum을 getdiscount에 전달을 해서 원하는 결과를 받아볼 수 있다.