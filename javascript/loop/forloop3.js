// 배열

// let numAry = []; // 배열 생성
let numAry = [10, 20, 30, 40]; // 배열 생성- 직접 값을 담아도 된다
// 배열의 순번은 0부터 시작한다. 
// [0]10, [1]20, [2]30, [3]40
numAry[4] = 50; // 4번째 배열에 50의 값을 넣는다는 의미
numAry[5] = 60;
numAry[6] = 70;
numAry[7] = 80;

// 배열[5]의 값을 배열[6]으로 이동하고 배열[6]의 값을 배열[5]으로 이동
// 방법1
// let origin6 = numAry[6];
// numAry[6] = numAry[5];
// numAry[5] = origin6;

// 방법2
let pos = 5;
let temp = numAry[pos+1];
numAry[pos+1] = numAry[pos];
numAry[pos] = temp;

console.log(numAry); // 배열속 들어있는 값들을 출력
console.log(numAry[0]); // 배열의 순번 0의 값 출력
console.log(numAry.length); // 배열속 들어있는 값들의 갯수를 출력


// 배열 속의 값들의 전체 합을 구하는 for문
let sum = 0;
for (let i = 0; i < numAry.length; i++) {
  console.log(`배열 ${i}번 째의 값 = ${numAry[i]}`);
  sum += numAry[i];
}
console.log(sum);
