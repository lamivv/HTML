let month = 2;
let date = 0; // 1일보다 앞날이라서 전월 말일이 됨.
let year = 2024;
let today = new Date();
today.setFullYear(year);
today.setMonth(month); // 월을 임의로 설정
today.setDate(date); // 날짜를 임의로 설정
//getDay 일요일 = 0, 월요일 = 1, 화요일 =2...
//getMonth 1월 = 0, 2월 = 1, 3월 = 2...
//getDate 1일 = 1, 2일 = 2...

today = new Date(2024, 4, 3, 15 , 30, 22); // 년 월 일 시 분 초
console.log(today, today.getDay(), today.getMonth(), today.getDate());

// 2022년 5월
today = new Date(); // 현재 시스템을 기준으로 날짜를 생성
// 설정하지 않은 옵션은 현재 시스템의 날짜 시간 등을 불러온다
today.setFullYear(2022);
today.setMonth(4); 
console.log(today);


console.log(today.getTime()); // 1970년 1월 1일 부터 얼마나 지났는지... (밀리세컨드)마지막 3개의 숫자는 더작은 초단위..
console.log(today.getTime());

today = new Date();
let now = new Date();
console.clear();
console.log(today==now); 
// today와 now가 가져오는 값은 같지만 today변수는 date라는 값을 담는게 아니라
// 값이 담겨 있는 객체의 메모리의 주석값을 저장한다.
// today와 now의 주석값이 달라서 같은지를 비교하면 false로 나온다...
console.log(today.getTime()==now.getTime()); 
// 객체에 담겨져있는 실제 값을 불러오기 때문에 true

console.log(new Date(2000)); // 뒤에 세자리는 밀리세컨드. 뒤에서 네번째 자리부터 초단위
console.log(today.valueOf()); // 실제 값
console.log(today.valueOf() == now.valueOf()); // 값끼리 비교하기 때문에 true