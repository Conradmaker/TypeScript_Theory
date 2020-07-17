//index type은 속성의 이름이 정해져있지 않고 
//동적으로 처리해야 할 때 사용할 수 있다.
//JS의 객체정도로 생각할 수 있다.

interface Props{
    [key: string]: string;
}
//키는 문자열로 오게되고
//키에 해당하는 타입은 string이다.
//[key: string]에서 string 즉 parameter타입은 string,number만 올 수 있다.

//이러면 어떠한 이름의 속성이 들어가도 컴파일러가 이해한다.
const p:Props = {
    a: 'd',
    b: 'e',
    c: 3   //그러나 위에서 string으로 선언했으므로 숫자가 오면 오류
}
//JS에서 객체는 p[3]숫자로도 접근이 가능하기 때문에
//key가 string으로 되어있는 경우에는
const p:Props = {
    a: 'd',
    1: 'e'        //요렇게 숫자로도 접근이 가능하다.
    2: '3'
}  //p[0]의 값은 'd' 가 되겠쥬?

//하지만 이렇게 key를 number로 정의하면 숫자열만 올 수 있다.
interface Props{
    [key: number]: string;
}

//Props key를 어떠한 형태로 받을 수 있게 해놨는데
//특정 이름의 속성을 고정하고 싶다면
interface Props{
    name: string;
    [key: string]: string;
}
//이렇게 되면
const p:Props = {
    name: 'hello',  //name이 보장받아야 하지만
    a: 'd',         //그 외에는 자유롭다.
    1: 'e'      
    2: '3'
}

//즉 어떠한 키가 올지 모를때 사용할 수 있으며
//꼭 필요한 키는 정의해 줄 수 있다.

//index타입에서 ketof연산자를 이용하면 Props의 key들에 대한 타입을 가져올 수 있는데
interface Props{
    name: string;
    [key: string]: string;
}

let keys: keyof Props;
 //이러면 key는[key: string]이기 때문에 string또는 number라고 나온다.

 //index가 아닌interface에 keyof연산자를 사용하면
 interface User{
     name: string;
     age: number;
     hello(msg:string): void;
 }
 //이런 interface를 확인해보면
 let keysOfUser: keyof User;
 //결과가 'name' | 'age' | 'hello' 이런 Union형태로 보이게 된다.
 //즉 keyOfUser=""에는 위에 3개만 할당할 수 있는 것이다.

 //User type의 특정한 type들은 key이름으로 가져올 수도 있다.
 //변수 helloMethod을 위에 Usertype의 (msg:string): void; type으로 고정하고 싶다면
 let helloMethod: User['hello'] 
 //이렇게 User라는 타입을 적고 index에 접근하는 것과 같이 ['hello']라고 let 을 정의하면
 // helloMethod는 User의 hello 키에 해당하는 타입만 할당 할 수 있는 것이다.
 helloMethod = function(msg: number){ //이렇게 하면 할장할 수 없다.
 }
 //즉 hellomethod='2'이렇게 해야 할당가능한 것.

 //keyof연산자를 활용하면 특정한 key에 접근하는 것이고
 //type을 정의할 때 특정한 type의 이름이나 type을 가져오거나 할 수 있다.