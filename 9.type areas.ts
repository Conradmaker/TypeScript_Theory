//타입 별칭은 interface와 비슷하지만 
//작성한 타입에 이름을 부여할 수 있다

interface User {
    name: string;
}
interface Action{
    do():void;
}

//타입 별칭은 type키워드를 통해 작성할 수 있다.
//별칭을 정의하고 이름을 작성함
type UserAction = User & Action;
//이렇게 하면 타입의 이름을 UserAction이라고 하고
//User와 Action의 Intersection을 의미한다.

//지난시간에 봤던 createUserAction을 통해 UserAction이 반환되게 할 수 있다. 
function createUserAction():UserAction{
    return{
        do(){},
        name:''
    }
}
//이렇게 하면 User와 Action이 모두 합쳐진 Intersection타입을 반환할 수 있는 것이다.

//원시형 type에 대해서도 적용할 수 있다.
type StringOrNumber = string | number; //string과 number의 Union타입

//Generic도 사용이 가능하다.
type Arr<t> = T[]; //Arr라는 타입은 타입T parameter을 받아 배열의 타입을 가리키게 하는 것

//Promise이름을 축약시켜볼 수도 있다.
type P<T> = Promise<T>;

//단순히 이름만 부여하는 것이 아니라 interface처럼 특정 type을 정의할 수도 있다.
type User2 = {
    name: string;
}

//심지어 이렇게 만든 타입은 class에서 implement도 가능하다.
class UserImpl implements User2{
    name: string;
}

//문자 literal타입과 같이 사용하면 매우 유용하다.
 //사용자의 상태가 대기중/ 승인 / 거절 3가지의 Union타입을 만들어보겠습니다.
type UserState = 'PENDING' | "APPROVED" | "REJECT"
 //이렇게 되면 문자열 literal타입을 가지게 되는데
 //예를 들면 User를 검사하는데 User검사후 나온 User상태를 결과를 반환해야 하면
function checkUser(user: User2): Userstate{
 if(user.login()){
     return "APPROVED";
 }else{
     return"REJECT";
 }
}
 //3가지중 하나를 return되게 하게 할 수 있다.

 //즉 타입을 조합해서 타입을 만들거나 
 //이름을 바꾸거나
 //문자열 Literal 타입을 조합해 Union타입을 만들때 많이 사용된다.