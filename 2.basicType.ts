//7개의 타입이 존재한다.

//기존 자바스크립트의 원시형 타입 5가지
let numValue: number;
let stringValue : string;
let booleanValue : boolean;
let undefinedValue : undefined; 
let nullValue : null;

//es6에서 새로나온 원시형 타입 2가지
let objValue: object;
let symbolValue: symbol;

//any
let anyValue : any;    //모든 타입의 상위타입


//num
numValue=3;   //숫자형을 할당할 수 있다.
numValue='3'; //문자열을 할당하면 에러가 발생한다.
numValue= '3.3';  //소수점 사용가능.


//string
stringValue = "hello";   //문자열만 할당할 수 있다.
stringValue = 3.3;       //숫자를 할당하면 에러발생
stringValue = ``         //'' , "" , ``  따움표, 쌍따움표, 템플릿스트링 사용가능
stringValue=`            //템플릿 스트링은 여러줄 사용이 가능하다.
hello
${1+1}                   //표현식이다.    안에서 계산된뒤 문자로 변환된뒤 삽입
hi
`

//booleanValue

booleanValue = true;     //true,false 만 할당가능


//undifined,null          
undefinedValue= null;    //언디파인드와 널값은 서로를 사용할 수 있다.
nullValue = undefined;

numValue = null || undefined ;      // undifined와 null는 상위타입이라 사실 모든 변수에 할당 할 수 있다.
 


//any는 모두 할당 가능
anyValue = null;
anyValue = undefined;
anyValue = 1;
anyValue = '3';


//object
objValue = 1;    //이러한 원시형 타입은 할당할 수 없다.
objValue = {name:'yoo'};   //어떠한 객체도 할당할 수 있다.
objValue = new String('hello');    //문자열이 아닌 객체가 변환된다. 즉, String()에 대한 값이 변환되는 것이다.
objValue = String(3)      //3을 문자형으로 바꾸는 것이다

//symbol
symbolValue = symbol();    //심볼이라는 함수를 통해서만 생성할 수 있는데, 심볼은 하나의 유니크한 값이다.
{                                  //보통 이렇게 객체 안에서
    symbolValue : 'hello';         //객체의 키를 나타낸다.
}





//배열을 어떻게 타입으로 정의할까
let nameList: string[];               //   배열앞에서 타입을 정해줘야 하는데   여기서nameList는 문자열로 이루어진 배열이다.
nameList = [1,3];                    //위에서 문자열을 선언했기 떄문에 숫가형은 올 수 없다.
nameList = ['1','3']               //문자열로 선언
nameList.push('hello');            // 푸시를 넣어 배열을 추가할 때도 문자열만 넣을 수 있다.
let nameList: any[];               //물론 any를 넣을 수도 있다.


//인라인 타입 : 객체가 어떤 속성들로 구성되는지를 타입을 정하지 않고 변수선언과 동시에 인라인으로 정의할 수 있다.
let user1: { name:string, score: number };   //이름은 문자열 , 점수는 숫자형
user1= {
    name:'yoo',
    score:30              //단순한 객체도 안되며 name과 score를 키로 가지는 객체만 올 수 있다.
}    

let user2: { name:string, score: number };  //이렇게 객체마다 복붙을 할 수는 없으니 타입얼라이언스, 인터페이스, 클래스를 통해 타입을 정의할 수 있다.

//tuple
let tuple2: [number,string];    //배열과 유사하지만 안에 들어가야 하는 항목의 개수와 항목을 정의한다. 여기서 tuple2는 2개가 들어가야하는데 number,string이다
tuple2 = [1,2];          // 이렇게 되면 두번째에 문자열이 와야해서 에러가 난다.
tuple2 = [1,'hello']      //이러면 가능!

tuple3 = [number, number. number];     /3개의 숫자형이 들어가야 한다.
tuple3 = [1,2,3]