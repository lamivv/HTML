// 5과목 입력..
// 과목중 가장 큰 점수의 과목 ?

let rhkahr = [];
rhkahr[0] = {rhkahraud: "국어", score: prompt("국어의 점수를 입력하세요")};
rhkahr[1] = {rhkahraud: "영어", score: prompt("영어의 점수를 입력하세요")};
rhkahr[2] = {rhkahraud: "수학", score: prompt("수학의 점수를 입력하세요")};
rhkahr[3] = {rhkahraud: "사회", score: prompt("사회의 점수를 입력하세요")};
rhkahr[4] = {rhkahraud: "과학", score: prompt("과학의 점수를 입력하세요")};

console.log(rhkahr);

let max = 0;
let goodrhkahr = '';
for (let i = 0; i <rhkahr.length; i++) {
  if (max < rhkahr[i]['score']) {
    max = rhkahr[i]['score'];
    goodrhkahr = rhkahr[i]['rhkahraud'];
  }
} console.log(`시험을 가장 잘본 과목은 ${goodrhkahr}이고, ${max}점이다.`);

