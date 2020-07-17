////Generic을 활용하면 함수에서 Parameter을 정의하듯이
//타입의 Parameter을 정의할 수 있는데
//이렇게 되면 우리의 코드가 한가지 타입이 아닌 다양한 타입을 처리할 수 있다.

//x,와 timeout두 매개변수를 통해 구현 한 함수를 보면
function createPromise(x, timeout:number){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(x)
        }, timeout);
    })
}

//위 함수를 실행하려면 값을 줘야하는데
//100ms후에 코드가 실행되는 함수는
createPromise(1,100)
 .then(v=> console.log(v))
 //v는 알수가 없고 위처럼 1을 전달 할 수도 있지만 문자열을 전달할 수도 있다.
 function createPromise<T>(x: T, timeout:number){ //<T>는 Generic을 이용해 타입을 Parameter화 한것이다.
    return new Promise((resolve:(v:T)=>void,reject)=>{        //(x: T, timeout:number)은 함수의 Parameter이다.
        setTimeout(() => {                        //이렇게 되면 T는 함수코드 안에서 사용할 수 있다. 
            resolve(x)
        }, timeout);
    })
}
//구현해보면
createPromise('eh',100)//1이 오면 숫자형, 문자열이 오면 문자열
 .then(v=>console.log(v))

 //create를 할때 특정 타입문자열을 전달할 수 있는데 
 createPromise<string>('eh',100)  //T를 string으로 했으므로 매개변수는 문자열이 와야 한다.
 .then(v=>console.log(v))
 
 //이렇게 구현할때 타입을 전달하는것과 동일하게 이런식으로도 구현 가능하다.
 function createPromise(x, timeout:number){
    return new Promise<T>((resolve,reject)=>{
        setTimeout(() => {
            resolve(x)
        }, timeout);
    })
}

//함수 parameter를 정의할때 여러개를 정의할수 있듯이
//Generic으로도 여러개 정의할 수 있다.
function createrTuple2<T,U>(v:T, v2:U):[T,U]{
    return[v, v2];
}

//3개로도
function createrTuple2<T,U,D>(v:T, v2:U, v3:D):[T, U, D]{
    return[v, v2, v3];
}
//물론 T,U,D가 아닌 T1,T2,T3등 자유롭게 설정할 수 있으며 대문자로 쓰는게 관행이다.
//여러개의 타입을 parameter화 해서 타입을 유지하면서 코드를 작성할 수 있도록 도와준다.
