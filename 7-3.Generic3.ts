//Generic은 interface에서도 사용할 수 있다.
interface DB<T>{
    add(v:T):void;
    get():T
}
//저번장의 내용
//interface를 LocalDB가 implements하면
class LocalDB<T> implements DB{    //이렇게 하면 interface와 class모두 T가 이어지면서 유지된다.
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
//다른걸 implements해보면
class D implements DB<T>{ 

}
//이렇게 하면 오류가 발생하는데 DB에 꼭 타입을 줘야 한다. 
//사실 이렇게 해도 오류가 나는데 타입을 받으려면 실제 클래스에도 타입(Generic)을 가져와야 한다.
class D<T> implements DB<T>{
    add(v: T): void {
        throw new Error("Method not implemented.");
    }
    get(): T {
        throw new Error("Method not implemented.");
    } 

}
//interface에서도 특정 값을 담고 있는 것과 같은 type을 유지한체로 정의할 수 있고
//class에서 implements할때도 type parameter을 정의하고 그대로 전달하고 유지된다.
//Parameter에 있는 타입을 특정한 범위의 하위타입으로만 고정 할 수 있다.
class D<T> implements DB<T>{
}

interface JsonSerialier{ 
    serialize():string  //시리얼라이즈라는 문자열의 구현체를 가져야 한다.
}

class LocalDB<T extends JsonSerialier> implements DB{    //T는 그냥 T 가아닌 JSONSerialier를 extend한 T인 것이다.
    constructor(private localStorageKey: string){
    }
    add(v:T){
        localStorage.setItem(this.localStorageKey,v.serialize());
    }
    get():TV{
        const v = localStorage.getItem(this.localStorageKey);
        return(v)? JSON.parse: null;
    }
}
//즉 특정한 타입의 하위 타입으로써 범위를 고정시켜 매서드나 구현되는 부분에서 고정된 타입의 특정한 기능을 구현해서 코드를 작성 할 수 있다.

//조건부 타입 (Generic에서도 활용할 수 있다)
interface Vegitable{
    v:string;
}
interface Meat{
    m:string;
}
interface Cart<T>{  //Cart라는 인터페이스는 
 getItem():T        //getItem이라는 매서드로 T를 반환한다.
}
const cart1: Cart<> = {  //<>에 야채나 고기에 대해 처리가 되고 다른 타입이면 모두 고기로 본다는 조건을 걸거나
//혹은 
const cart1: Cart<string>={//string을 하면
    getItem(){
        return''     //문자열을 반환해야 하는 것인데
    }
}

//타입의 범위를 제한하고 싶다면
interface Vegitable{
    v:string;
}
interface Meat{
    m:string;
}
interface Cart<T>{   
 getItem():T extends Vegitable ? Vegitable : Meat   //vegitable또는 Meat인것이기 때문에
}                                         //getItem을 했을 때 반환되는 타입Parameter가 vegi일 경우 vegi이고 meat이면 meat이다.

const cart1: Cart<string>={
    getItem(){
        return''     
    }
}
//하지만 string이 전달되고 string을 전달하고 vegitable을 extend하지 않았기 때문에  meat에 대한 형식이 할당되어야 한다.
cart1.getItem() //무조건 meat이 고정되게 된다.

//그래서 meat을 정의하면
interface Vegitable{
    v:string;
}
interface Meat{
    m:string;
}
interface Cart<T>{   
 getItem():T extends Vegitable ? Vegitable : Meat  
}                                         

const cart1: Cart<string>={
    getItem(){
       m:''    
    }
}
//이렇게 하면 meat으로 고정되지만
interface Vegitable{
    v:string;
}
interface Meat{
    m:string;
}
interface Cart<T>{   
 getItem():T extends Vegitable ? Vegitable : Meat  
}                                         

const cart1: Cart<Vegitable>={ //Vegitable을 넣고
    getItem(){
       V:''    
    }
}

cart1.getItem()//하면 vegitable이 반환된다

//조건부 타입을 이용해 특정한 행위나 매서드에서 반환되는 타입을 type  parameter에 전달되는 타입에 따라 다르게 작동하는 코드를 작성할 수 있다.
//조건부 타입을 활용하는 몇가지가 있는데 다음 챕터에서 알아보겠습니다.
//Generic을 사용하면 함수나 클래스나 인터페이스에서 한가지 타입이 아닌 여러 타입에 대하여 하나의 기능이 작동하게 하면서 유지되는 것을 도와줄 수 있다.
