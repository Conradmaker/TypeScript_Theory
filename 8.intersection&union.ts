//intersection 
//여러타입이 하나로 합쳐진 타입

interface User{
    name: string;
}
interface Action{
    do(): void;
}
//두 interface를 합쳐 intersection타입을 만들면
function createUserAction(u:User, a:Action){
    return{...u, ...a};  //JS의 스프레드 
}

//그뒤
function createUserAction(u:User, a:Action): User & Action{   //User & Action 을 통해 intersection을 표현해준다
    return{...u, ...a};  //JS의 스프레드 
}

//사용해보면
const u = createUserAction({name:'jay'}, {do({})});  //객체전달
//u.를 통해 do와 name이 모두 나타나는 것을 확인할 수 있다.
//특한 두 타입을 모두 사용해야 하는 경우에 사용하는데
//새로운 타입을 만들지 않고 기존 타입을 활용해 만들 수 있다는 장점이 있다.

//Union

//두 값을 비교하는 함수
function compare(x: string | number, y:string | number){  //숫자와 문자열 모두를 비교하고 싶은 함수
}

//만약 문자는 문자끼리 넘버는 넘버끼리 비교하고 싶다면 typeGuard를 해줘야 한다.
function compare(x: string | number, y:string | number){
    if(typeof x === 'number' && typeof y === 'number'){   //x와 y 모두 넘버일경우
        return x===y ? 0 : x > y ? 1 : -1;                //x와 y가 같으면 0 , x가 y보다 크면 1, x가y보다 작으면 -1
    } 
    if(typeof x ==='string' && typeof y === 'string'){
        return x.localeCompare(y);                     //localeCompare는 위와 같은 결과를 나타낸다.
    }
    throw Error('not supported type')                  //에러
}

//구현해보자
const v = compare('a',1) //이런경우에는 런타임 에러가 발생한다.

//함수overload를 사용해 해결할 수 있다.
function compare(x: string, y: string)
function compare(x: snumber, y: number)
function compare(x: string | number, y:string | number){
    if(typeof x === 'number' && typeof y === 'number'){   
        return x===y ? 0 : x > y ? 1 : -1;               
    } 
    if(typeof x ==='string' && typeof y === 'string'){
        return x.localeCompare(y);                    
    }
    throw Error('not supported type')                
}
//이렇게 되면 overloading에 의해 문자열과 숫자열을 동시에 사용할 수 없게 된다.
const v = compare(1,2);

//compare란 함수는 sort를 할때 매개변수를 콜백으로 전달할 수 있다.
console.log([3,2,1].sort(compare))
//sorting을 할때 compare을 전달할수있고 compare함수가 안이 모두 숫자이기 때문에 위의 코드가 동작하게 된다.
//문자열의 경우
console.log(['a','b','c'].sort(compare))


//primitive타입이 아닌 interface를 Union했을경우 어떻게 될까?
function process(v:User | Action ){  //v는 유저나 액션 하나의 타입 
    //v가 액션인경우 V를 호출하고 싶은데 V가 액션인지 유저인지 어떻게 알까
    //예전에는
    if(typeof v === '')
    //요런식으로 하면 typeof는 JS문법이고 interface는 TS문법이기 때문에 안된다. 그렇다면 v라는 값에 어떤 값이 있는지 확인하면 되는데
    if((<Action>v).do){   //v는 do의 공통된 멤버만 접근할 수 있는데 do는없는 속성이라고 나온다. 그래서 type 어쓰렉션을 이용해 v가 action이라고 지정해야함. 
    (<Action>v).do()    //타입가드를 만들어 준 것이 아니기 때문에 이렇게 작성해야 한다.                      
    }
    //^^^^^부분만 직접 TypeGuard를 만들어보면

    function isAction(v:User | Action): v is Action{   //앞v는 parameter가 되고 뒤v는 is를 통해 v가 Action이라고 정의함 그뒤 Boolean으로 반환해야 한다.
        return(<Action>v).do !==undefined;     //type을 체크하는 코드 v라는 parameter에 값이 do 라는 속성이 있으면 v는 action이다 라고 보는것
    }
    //이제 위에 코드도 간단히 작성 가능하다
    if((<Action>v).do){   //타입가드
        v.do()            //상위블락이 타입가드이기 때문에  안에서는 Action으로 컴파일러가 인지함 
        }else{
            v.name       //Union이기 때문에 Action이 아닌것은 User라는 것을 컴파일러가 알 수 있다.
        }
       
}  //사용자 정의 타입가드였다.
//Union타입을 사용할때는 typeguard를 사용해 type에 대한 내용을 TypeScript에게 내가 사용하는 것은 number야 라고 원하는 타입을 컴파일러에게 말해주면
//Block안에서 원하는 타입을 보장받고 사용할 수 있게되는 것이다.
//어떨때는 typeGuard를 사용하지 않고 컴파일러에게 타입어쓰랙션을 이용해 바로 원하는 타입을 고정할 수도 있다.