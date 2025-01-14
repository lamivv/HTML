// 278 시간 => ?일 ?시간 입니다 출력
let inhour = parseInt(prompt("시간을 입력하세요"));

let hourDay = parseInt(inhour/24);
let hourHour = parseInt(inhour%24);

console.log(`${hourDay}일 ${hourHour}시간 입니다.`);

// 89345분 => ?일 ?시간 ?분입니다 출력
let inminu = parseInt(prompt("분을 입력하세요"));

let minuDay = parseInt(inminu/60/24);
let minuHour = parseInt(inminu/60%24);
let minuMinu = parseInt(inminu%60);

console.log(`${minuDay}일 ${minuHour}시간 ${minuMinu}분입니다.`);