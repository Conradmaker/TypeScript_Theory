//자바스크립트에서는 함수를 이렇게 작성한다
function add(x,y){  //x,y두 매개변수를 받아서
    return x+y;     //매개변수의 합을 구한다.
}

//그러나 타입스크립트에서는 매개변수에 타입을 정해줘야 한다.
function add(x: number , y:number){    //이렇게 타입을 정한다.
    return x+y;   
}

add(1,"2") //타입을 정해주면 이렇게 문자열이 포함되었을때 오류가 발생함

//또한 타입스크립트는 함수의 바디를 보고 값의 타입도 추론을 한다.
function add(x: number , y:number){   
    return x+y;     //즉 변수가 숫자형이기 때문에 반환되는 타입도 숫자형이라고 추론함
}
//아니면 반환되는 타입을 직접 정의해 줄 수도 있다.
function add(x: number , y:number):number{    //이렇게 반환값의 타입을 정한다.
    return x+y;   
}

//매개변수의 optional한 처리, 기본값
function buildUserInfo(name: string, email: string){
    return(name : name, email)    //같은 값을 가지기 때문에: name은 삭제해도 무리없다.
}
buildUserInfo();         //그러나 이렇게 아무런 인자도 전달하지 않으면 에러가 발생하는데,


//만약 아무런 값도 주어지지 않아도 사용될수있는 함수를 구현할때는
function buildUserInfo(name?: string, email?: string){     //이렇게 ?로 optional한 변수를 만들 수 있다.
    return(name : name, email)  
}

//
const user = buildUserInfo(); //결과적으로 이렇게 인자를 넣지 않으면 undifined상태가 된다.

//만약 JS default처럼 기본값을 넣고 싶으면
function buildUserInfo(name?: string = '-', email?: string ='-'){   //요렇게 할 수 있고
    return(name : name, email)  
}

//위에서는 기본값이 문자열이기 때문에 자동으로
function buildUserInfo(name: = '-', email:= '-'){     //이렇게만 해줘도 자동으로 optional과 타입이 정해지게 되는 것이다.
    return(name : name, email)  
}

//es6의 화살표함수에도 타입을 정할 수 있는데
const add2 = (a: number, b: number)=> a+b; //그냥 이렇게만 해주면 된다.

//함수의 overloading은 자바처럼 정적은 함수를 선언하면 반환값과 매개변수를 정의하지만 js는 동적언어이기 때문에 ts를 동적으로 할 수 있게 해주는 것
function store(type: string):     //string으로 저장해야 할 아이템의 정보를 받아오고

//in
interface Storage{     //저장할 공간을 interface를 통해 정의하면서 정의한다.

}
function store(type: string):

//어떤 타입이 오면 어떤걸 반환하고 이런걸 정하는 시그니처를 여러개 정하는것ex. 통조림은 storage로 아이스크림은 coldstorage로
interface Storage{
         //Storage interface를 만들고
}
interface ColdStorage{
        //ColdStorage interface를 만든뒤
}

function store(type: '통조림'): Storage           //'통조림'타입은 Storage로 반환
function store(type: '아이스크림'):ColdStorage    //'아이스크림'타입은 ColdStorage로 반환
//이렇게 함수의 바디가 없고 이름, 매개변수, 반환되는 값만 정의한 것을 함수 시그니처라고 한다.
//위에서처럼 store라는 동일한 이름의 여러 시그니처를 만드는 것을 오버로드 라고 한다.

//위에는 오버로드 시그니처 밑에는 구현체이다
//일단 두타입의 구분을 위해 속성을 부여하겠음
interface Storage{
   a: string;
}
interface ColdStorage{
  b: string;
}

function store(type: '통조림' | '아이스크림'){    //Union Type 통조림 또는 아이스크림을 매개변수로 가지고
    if(type==='통조림'){
        return{a:'통조림'}                       //storage로
    }else if(type==='아이스크림'){
        return{b:'아이스크림'}                   //coldstorage로
    }else{
        throw new Error('unsupported type')
    }
}


//함수를 간단히 구현하면
const s = store('통조림')    //만약 통조림을 주면
s.a                          //s.을 치면 자동완성이 a 즉 통조림이 온다. 위를 아이스크림으로 바꾸면 b가 오겠지?

//위에서 만약에 
function store(type: '통조림' | '아이스크림'){    
    if(type==='통조림'){
        return{b:'통조림'}                       //a를 통조림이지만 b(ColdStorage)로 바꾸면?
    }else if(type==='아이스크림'){
        return{b:'아이스크림'}                   
    }else{
        throw new Error('unsupported type')
    }
}

//overload signiture   이렇게 오버로드 시그니쳐에는 통조림만 Storage에 올수 있는 값이고 Storage는 a이기 때문에 오류가 발생한다.
function store(type: '통조림'): Storage           
function store(type: '아이스크림'):ColdStorage

interface Storage{
    a: string;
 }
 interface ColdStorage{
   b: string;
 }