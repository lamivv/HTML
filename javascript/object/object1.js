let obj = {}; // 객체 (인스턴스) 
obj = new Object(); // 객체를 만드는 것 = 생성자 // new 객체의 참조값을 obj에 반환
obj.title = "혼자 공부하는 자바"; // title이라는 속성을 선언하고 값을 추가
obj['price'] = 30000; // price이라는 속성에다가 값을 넣겠습니다

console.log(obj);

// 내장 객체
let today = new Date(); // 날짜나 시간을 쉽게 처리할 수 있는 내장 객체
console.log(today.getFullYear()+'년도');

let numAry = [10, 20, 30]; // new Array();
numAry.push(40); // 배열의 가장 마지막 위치에 추가
numAry.unshift(5); // 배열의 가장 처음 위치에 추가
numAry.splice(1, 1, 8); // 5, 10, 20, 30, 40인데 원하는 위치에 인덱스값을 넣는 것 (위치, 몇개의 값을, 해당 값으로 대체하겠습니다)
numAry.splice(1, 1); // 대체할 값을 넣어주지 않으면 삭제된다
numAry.splice(1, 0, 12); // 대체하려는 갯수를 0개로 하면 추가가 된다
console.log(numAry);
