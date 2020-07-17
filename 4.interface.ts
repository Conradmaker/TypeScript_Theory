//인터페이스는 interface + 키워스
interface TV{
     
}

//인터페이스는 타입을 정하는 것
const myTV: TV = {}

//인터페이스에는 행위를 정의한다 즉, 메서드를 정의
interface TV{
   turnOn();     //
   turnOff();    //     
}

//이렇게 행위가 비어있으면 에러가 나게된다.
const myTV: TV = {}

//이러면 TV가 완성되는 것이다.
const myTV: TV = {
    turnOn(){

    },
    turnOff(){

    }
}

//인터페이스에는 정해주기만 한다. 구현체가 없다.
interface TV{
    turnOn():void;     //위처럼 아무것도 정하지 않으면 void기본값 즉 없는 값을 가진다.
    turnOff():boolean;    //이렇게 불린값을 가지면 리턴할때 아래와 같이 해준다.     
 }

 //구현체는 정의할때 쓴다.
const myTV: TV = {
    turnOn(){
        return true;     // 잘켜진지 꺼진지 불린값으로 반환.
    },
    turnOff(){

    }
}

//인터페이스의 장점은 예를 들면 티비도 삼성,엘지 여러개가 있지만 그만의 가진것이 있는데
//인터페이스를 기반으로 하면 여러가지가 와도 사용할 수 있다. 
function tryTurnOn(tv:TV){
    tv.turnOn();
}
tryTurnOn(myTV);
 
//가장 많이 쓰는 인터페이스는 행위를 선언하지 않고 속성만 정의하는 것이다.
interface Cell{     //여기서 셀은 10x10 체스판으로 본다
     row:number;
     col:number;    //여기까지 좌표를 설정하고
     piece:Piece;   //말을 가지고 있어야 한다. 
}                   //여기까지 데이터 타입으로 인터페이스를 정의한 것

//piece를 인터페이스를 통해 정의해보면
interface Piece{
    move(form:Cell, to:Cell):boolean   //말이 cell에서cell로 이동하고 그걸 불린으로 알려준다는 것
}

//보드를 만드는 함수를 만들면
function createBoard(){
    const cells:Cell[]=[];    //보드가 가지고 있어야 할 셀들에 대하여 배열로 나타내고
    for (let row = 0; row < 4; row++) {       //4x3의 보드를 만들어보면
        for (let col = 0; col < 4; col++) {    //총 12번이 돌게 된다.
            cells.push({                    //셀에 구현을 해야한다.(인터페이스를 구현할 실제값)
                row: row,            //cell의 속성이 row와 col을 꼭 넣어줘야 하고
                col: col             //말(piece)는 있어도 없어도 그만이기 때문에 아래처럼 해준다.
            })                       //row,col 처럼 값이 같으면 아래처럼 단축표현 할 수 있다.(es6)
        }
    }
}
//
interface Cell{     
    row:number;        //위에 들어감
    col:number;        //위에 들어감
    piece?:Piece;       //말은 있어도 없어도이기 때문에 옵션화(?)해준다
}                       //옵션화하면 없어도 객체로 인정됨.

//
function createBoard(){
    const cells:Cell[]=[];    
    for (let row = 0; row < 4; row++) {     
        for (let col = 0; col < 4; col++) {    
            cells.push({ row, col })            //단축표현          
        }
    }
    retuen cells;                        //마지막으로 cells를 리턴해준다.
}

const board = createBoard();
board[0].piece={
    move(from: Cell, to:Cell){          //move라는 행위를 꼭 해야한다. 
        return true;
    }
}

//물론 인터페이스는 TypeScript에서만 작동하기 때문에 컴파일하면 모두 지워지고
//이는 즉, 인터페이스는 많이 사용해도 무리가 없으며 더 견고하며 신뢰성있는 코드를 작성 할 수 있다.
//예를들면 회원가입과 같이 사용할 수 있는데
interface SignUp{
    email: string;
    id: string;           //이렇게 3개의 값을 가지고 있어야 한다고 하면
    password: string;
}

function ajaxSignup(data: SignUp){ }   //ajax로 signup을 보낼때는 위의 SignUp양식이어야 한다라는 뜻.

ajaxSignup({
    email                              //자동완성을 통해 가져야할 속성들을 알려줌
})

//이렇게 가져야 할 속성들을 나열할때도 자주 사용하게 된다.