// concat(배열 요소 합)

let numAry1 = [10, 20];
let numAry2 = [30, 40];
let resultAry = numAry1.concat(numAry2); // 메소드라서 () 괄호 사용... 합치려는 배열을 괄호 사이에 삽입
console.log(resultAry.join()); // join 메소드는 문자열로 출력시켜줌 // 기본 출력형태 10,20,30,40
console.log(resultAry.join('-')); // join 메소드의 괄호에 '-'를 입력하면 출력형태를 -로 반환해준다 10-20-30-40
console.log(resultAry.join('-').split('-')); // 문자열에서 제공해주는 메소드 split는 문자열을 괄호안에 있는 문자를 기준으로 잘라서새로운 배열로 만들어준다
// join : 배열 -> 문자열 
// split : 문자열 -> 배열

let result = resultAry.join('-').split('-');
result.push('60'); // 배열의 마지막에 추가 // 배열의 맨앞에 추가하는건 unshift
console.log(result);
result.pop(); // 배열의 마지막을 제거 // 배열의 맨앞을 삭제하는건 shift
console.log(result);
console.log(result.pop()); // 제거하고, 제거한 배열의 값을 반환
console.log(result);

console.log(result.indexOf('20')); // 값을 찾는데 찾으면 인덱스값(요소의 위치값)을 반환해준다
console.log(result, result.indexOf('200')); // 값을 찾는데 찾는 값이 배열에 없으면 -1을 반환해준다

console.clear(); // 콘솔의 내역을 지움

result = ["뽀뽀", "루루", "뚜뚜", "라라"];
if (result.indexOf('루룽') != -1) { // 찾는 배열이 없는 것이 아니면 == 찾는 값이 존재하면
  console.log("찾는 이름이 존재합니다");
} else {
  console.log("찾는 이름이 존재하지 않습니다");
}

console.log(result.at(1)); // 인덱스값에 있는 값을 출력
// console.log(result[1]); // 이것과 동일

result.sort(); // 가나다 순서로 정렬
result.sort().reverse(); // 역순으로 정렬
// 메소드를 연결해서 쓰는걸 메소드 체인이라고 한다
// result.sort().reverse().join().pop(); 
// join의 처리결과가 문자열이라 거기에 pop을 사용하려고 하면 오류가 발생하기 때문에 사용할 수 없다

console.log(result);