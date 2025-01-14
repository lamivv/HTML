// 두 숫자를 입력받아서 두 수의 곱을 출력한다
let onenumber = parseInt(prompt("첫번째 값을 입력하세요 :"));
let twonumber = prompt("두번째 값을 입력하세요 :");
// let result = onenumber*twonumber;
// console.log (`두 수의 곱은 ${Number(onenumber)*Number(twonumber)} 입니다.`);
// console.log(`${onenumber}와 ${twonumber}의 곱은 ${result}입니다`);

// onenumber = ++onenumber; // parseInt(onenumber)+1
// twonumber = --twonumber; // parseInt(twonumber)-1
// console.log(onenumber,twonumber);

// result = ++onenumber/--twonumber;
// console.log(`${onenumber}에서 ${twonumber}를 나눈값은 ${result}입니다`);

// result = ++onenumber%--twonumber;
// console.log(`${onenumber}에서 ${twonumber}를 나눈 나머지는 ${result}입니다`);

// onenumber += 3;// = parseInt(onenumber)+3;
// twonumber -= 3;// = parseInt(twonumber)-3;
// let result = onenumber/twonumber;
// console.log(`${onenumber}에서 ${twonumber}를 나눈값은 ${result}입니다`);

// 첫 번째 값에 5를 더하고 두 번째 값에 3을 빼서 두 수의 차를 구하시오
onenumber+=5;
twonumber-=3;
let result = onenumber-twonumber;
console.log(`${onenumber}에서 ${twonumber}를 뺀 값은 ${result}입니다`);