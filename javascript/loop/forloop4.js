// 0 <= Math.random() <1
// 0 <= Math.random()*100 <100
// 50부터 100사이의 값이 나오도록..

// 학생 n명의 임의의 점수를 배열에 저장
let student = 10;
let scores = [];
for (let i = 0; i < student; i++) {
  // Math.random()*51 --> 0<= x <= 50 --> 0~50사이의 값..
  scores[i] = parseInt(Math.random() * 51 + 50);
}
console.log(scores);

// 모든 점수의 합과 평균을 구하시오
let sum = 0;
for (let i = 0; i < student; i++) {
  sum += scores[i];
}
console.log(`학생 ${student}명의 모든 점수의 합은 ${sum}점 입니다.`);
console.log(`학생 ${student}명의 평균 점수는 ${sum/student}점 입니다.`);

// 학생들의 점수 중 가장 높은 점수를 구하시오
let max = 0;
for (let i = 0; i < student; i++) {
  if (max < scores[i]) {
    max = scores[i]; 
  } 
}
console.log(`학생 ${student}명 중 가장 높은 점수는 ${max}점 입니다.`);