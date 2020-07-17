
//
interface Person{
    name: string;
    say(): void;
}

//한국인이라는 클래스는 사람이라는 인터페이스를 구현할 수 있다.
//한국인은 이름과 말을할 수 있는 사람이라는 것을 보장한다는 예시
class Korean implements Person{
    constructor(public name: string){

    }
}
//그러나 이렇게 하면 say라는 요소가 빠져서 오류가 나오게 된다.
//이때 아래 Korean을 클릭하면 Person인터페이스 구현을 자동으로 해준다
class Korean implements Person{
    constructor(public name: string){

    }
    say(): void {
        throw new Error("Method not implemented.");//아직 구현이 안되었다 라는 내용
    }
}
//다시 구현해보면
interface Person{
    name: string;
    say(message:string): void;
}


class Korean implements Person{
    constructor(public name: string){

    }
    say(): void {
       console.log(message);
    }
}

//또다른 interface를 구현해보면
interface Programer{
    writeCode(requirement: string):string;
}
//한국인은 사람이면서 프로그래머이다를 구현해보면
class KoreanProgramer implements Person, Programer{    //다중인터페이스
    constructor(public name: string){

    }
    say(): void {
        throw new Error("Method not implemented.");//아직 구현이 안되었다 라는 내용
    }
    
    writeCode(requirement: string): string {
        console.log(requirement);
        return requirement + '....';
    }
    //이러한 특징도 넣어줄 수 있다.
    loveKimchi(){
        console.log('love kimchi')
    }
}
//KoreanProgramer를 생성하면
const jay = new KoreanProgramer('jay');
//jay.을 통해 확인 가능

//엑스트렉트 클래스는 키워드가 완성되지 않은 클래스라는 것을 의미
//다른 상속받을 클래스를 통해 인스턴스를 만들 수 있다.
//엑스트랙스 클래스를 줘서 인터페이스에는 구현을 가지지 않지만 액스트랙트 클래스만 구현을 가지게 된다.
//abstract 클래스를 구현해보면 
abstract class Korean implements Person{
    constructor(public name: string){

    }

    say(message:string){
        console.log(message);
    }
}
//여기에 주민번호를 추가할 수 있다.
abstract class Korean implements Person{

    public abstract jumin: number;

    constructor(public name: string){

    }

    say(message:string){
        console.log(message);
    }

    abstract loveKimchi():void;
}
//abstract키워드를 쓰면 korean이라는 추상클래스는 주민번호를 가져야 하고 김치를 좋아해야하는데
//어떻게 좋아하는지를 클래스에서 정의하지 않고 하위타입에서 정의하라는 것이다.
//즉 하위타입에서 꼭 가지게끔 하는 것이다.

//koreanProgramer를 다시 구현해보면
class KoreanProgramer extends Korean implements  Programer{    //Korean을 extend하고 Programmer를 implement한다.
    constructor(public name: string){

    }
    say(): void {
        throw new Error("Method not implemented.");//아직 구현이 안되었다 라는 내용
    }
    
    writeCode(requirement: string): string {
        console.log(requirement);
        return requirement + '....';
    }
    //만약 lovekimchi가 없으면 주민번호와 lovekimchi를 미구현했다고 오류가 나온다.
    loveKimchi(){
        console.log('love kimchi')
    }
}
//즉 Korean을 상속했지만 Korean에 있는 abstract로 정의한 것을 하위타입인 KoreanProgrammer에서 구현해야 하는 것이다.
//다시 구현하면
class KoreanProgramer extends Korean implements  Programer{  
    constructor(public name: string, public jumin: number){
        super(name);    //하위타입에서 부모타입을 상속했을때 constructor를 호출하면 부모의 생성자를 호출해줘여한다.
    }
    say(): void {
        throw new Error("Method not implemented.");
    }
    
    writeCode(requirement: string): string {
        console.log(requirement);
        return requirement + '....';
    }
    
    loveKimchi(){
        console.log('love kimchi')
    }
}
//Programmer도 같이 구현해줘야 하고, Korean을 상속했기 때문에 abstract에 구현된 것을 구현해줘야 한다.
//이를 구현해보면
const jay = new KoreanProgramer('jay',2222);
const jay2 = new Korean;  //이렇게 하면 Korean은 abstract추상클래스이기 때문에 호출할 수가 없고 무조건 하위타입으로 구현한뒤 호출해야 한다.