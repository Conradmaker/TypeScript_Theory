//클래스라는 키워드는 es6에 등장했는데 이전에는 함수로 새로운 타입을 만들었다면
//이제는 클래스를 이용해 특정 type의 객체를 생성할 수 있다.
//함수 new 키워드를 쓰는 방법도 있지만 class에 new키워드를 쓰는 방식으로도 생성할 수 있게 된것입니다.

//TypeScript는?

//일단 JS코드 입니다. 클래스 키워드를 새용해 CART라는 클래스를 정의한것입니다.
class Cart{
    constructor(user){
        this.user = user;
        this.store{};
    }
    put(id,project){
        this.store[id] = product;
    }
    get(id){
        return this.store[id];
    }
}
//cart라는 클래스의 타입이 만들어진것이고 클래스의 타입에서 객체가 만들어지면
//cart라는 타입의 instance다 라고 한다.

//예를들면
const cartJhon = new Cart({ name: 'jhon'})   //이런식의로 유저 정보를 줄 수 있다.
const cartJay = new Cart({ name: 'jay'})      //즉 new 를 통해 Cart클래스를 호출하면 cartJay라는 인스턴스카 만들어지고 cartJay는 Cart타입의 인스턴스다.


//TS로 보자면
interface User{
    name:string;                   //2.User의 타입을 정의한다.
}
interface product{                 //5.product의 타입을 정의한다.
    id: string;
    price: number
}

class Cart{
    user: User;                   //3.타입스크립트에서는 this.user에서 user의 속성을 정의해줘야 한다.
    store: object;                //3. store도 마찬가지
    constructor(user:User){        //1. User라는 타입을 정해주고 interface를 만들어 타입을 정의해준다.
        this.user = user;
        this.store{};
    }
    put(id: string, product:Product){              //4. 각각의 Parameter에도 타입을 부텨해준다. Product도 interface로 타입을 정의하자.
        this.store[id] = product;
    }
    get(id: string){                         //6.id의 타입도 정의해주자
        return this.store[id];
    }
}                 //이렇게 하면 cart라는 클래스에 두개의 속성과 생성자 함수 두개의 매서드를 가지는 카드라는 type을 정의한 것이다.

//이렇게 하면 Cart라는 Class에서 만들어진 instance들은 Cart클래스에서 정의한 속성을 접근할 수 있게된다.

cartJhon.               //이렇게 하면 store,user두개의 property get,put두개의 method가 나온다.
//즉 모든 Cart 클래스의 instance들은 동일하게 속성과 행위를 가지게 되는 것이다.

//ts에서는 접근제한자라는 것을 가질 수 있다.
class Cart{
    user: User;  
    //public user: User;       //그냥 아무것도 안쓰는게 public이다.
    //protected user: User;    //Protected 역시 Private처럼 instance에서 접근을 막아주는데, Private와 다르게 Cart라는 클래스를 상속했을 때 사용가능하다.                        
    store: object;          //여기서 store라는 속성을 Cart클래스 내부에서만 사용할 수 있게 제한할 수 있다.(접근제한자{Private,public,protected})
    //private store: object;    //클래스 내부에서만 접근   즉  instance에서는 접근할 수 없다.    
    constructor(user:User){        
        this.user = user;
        this.store{};
    }
    put(id: string, product:Product){           
        this.store[id] = product;
    }
    get(id: string){                       
        return this.store[id];
    }
}  

//이렇게 상속을 하였을때
class PromotionCart extends Cart{
        addPromotion(){
            this.user     //만약 위에서 Protected를 썻다면 가능/ Private썻다면 불가.
        }
}
//접근제한자는 ES6에 TS에만 추가된 기능이다.

//기존 클래스를 다른 클래스로 상속을 하게되면
class PromotionCart extends Cart{
    addPromotion(){
        this.user     
    }
}

const cart2 = new PromotionCart({name:'jhon'})
cart2.   //get,put,addPromotion을 사용할 수 있는데 이는 상속된 상위클래스 즉 Cart클래스의 기능과 속성을 가져올 수 있다는 것이다.

//타입스크립트 class에 추가된 기능
class Cart{
    user: User;  
    store: object;        

    constructor(user:User){        //1.매개변수를 정의를 할때 생성자의 매개변수에 접근제한자를 같이 사용하면
        this.user = user;          //위에서 속성을 정의를 하고 동시에 
        this.store{};              //전달받은 인자를 해당속성에 할당하는 코드를 한번에 처리할 수 있다.
    }
    put(id: string, product:Product){           
        this.store[id] = product;
    }
    get(id: string){                       
        return this.store[id];
    }
}  

//어떻게?
class Cart{
    //protected user: User;  
    store: object;        

    constructor(protected user:User){      //이렇게 하면 된다. 그렇다면 Public을 쓰면 코드를 간소화 할 수 있지 않을까?    
        //this.user = user;                //물론 이렇게 해도 하위 클래스에도 사용할 수 있다.
        this.store{};             
    }              //즉  클래스를 정의할때 생성자에서 매개변수와 함께 접근 제한자를 사용하면 속성이 정의됨과 동시에 
                   //new 키워드를 호출할때 전달받은 인자값이 하위에도 할당된다.

//store도 적용해보면
constructor (protected user:User, private store: object = {})
       //this.store                    //기본값으로 빈 객체를 할당할 수도 있다. 생성자 호출할 때 값을 주면 값이 속성으로 호출되고
                                        // 아무값도 주지 않으면 빈객체가 할당된다.