//Generic은 class를 정의할 때에도 사용할 수 있다.

//생성자로 localstorage의 키를 통해 아이템을 집어넣거나 빼오는 기능을 만들면
class LocalDB{
    constructor(private localStorageKey: string){
    }
    add(v){
        localStorage.setItem(this.localStorageKey,JSON.stringify(v));
    }
    get(){
        const v = localStorage.getItem(this.localStorageKey);
        return(v)? JSON.parse: null;
    }
}

//작성해보면
const userDB = new LocalDB('user'); 
userDB.add({name:'jay'});         //실제 값을 하나 넣는다
const userA = userDB.get();       //UserDB를 이용해서 값을 빼온다 이때 user는 타입이 any가 되버린다.
userA.name

//user에 대하여 타입을 고정하는 interface를 쓴뒤
interface User{name: string}

//타입을 User로 바꾸면
class LocalDB{
    constructor(private localStorageKey: string){
    }
    add(v:User){
        localStorage.setItem(this.localStorageKey,JSON.stringify(v));
    }
    get():User{
        const v = localStorage.getItem(this.localStorageKey);
        return(v)? JSON.parse: null;
    }
}
//타입이 유지되서 정상적으로 name추론이 된다.

//근데LocalDB에서 User하나의 타입이 아니라 여러 타입을 사용하고 싶다면
//User타입을 Parameter화 하면 된다.
class LocalDB<T>{
    constructor(private localStorageKey: string){
    }
    add(v:T){
        localStorage.setItem(this.localStorageKey,JSON.stringify(v));
    }
    get():TV{
        const v = localStorage.getItem(this.localStorageKey);
        return(v)? JSON.parse: null;
    }
}
//그럼 하위인 UserDB를 만들때 User를 위한 LocalDB다 라고 해주면 된다.
const userDB = new LocalDB<User>('user'); 
userDB.add('{name:'jay'}');       
const userA = userDB.get();     
userA.name

//즉 여러 타입에 범용으로 사용할 수 있는 상위class를 만들 수 있는것이다.