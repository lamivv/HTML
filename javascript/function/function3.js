// 매개변수가 2개

function getAverage(num1 = 0, num2 = 0) {
  let sum = 0,
    avg = 0; // ,<< 한번에 선언할때 사용
  sum = num1 + num2;
  avg = sum / 2;
  return avg; // 호출한 영역으로 svg값을 반환

} // end of function getAberage

let avg1 = getAverage(10, 30);
let avg2 = getAverage(30, 50);
// getAverage(avg1, avg2);
let result = getAverage(getAverage(10, 30), getAverage(30, 50));

console.log(`평균 : ${result}`);