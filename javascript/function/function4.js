// 버튼을 클릭하면 이벤트
// 이벤트(함수) 등록하고 그 이벤트가 발생하면 실행할 이벤트핸들러

// querySelector 화면상 요소를 찾아올 때 CSS선택자 방식으로 불러오는것
// 화면상 버튼이라는 요소를 찾겠습니다. 
let item = document.querySelector('button');
// console.log(item);

// 이벤트를 등록하는 메소드를 사용해야 한다
// 오브젝트 안에 있는 함수를 메소드라고 한다
// 이름없는 함수 = 익명함수
// 마우스로 대상을 클릭했을 때 이벤트 발생
item.addEventListener('click', function () {
  alert('클릭함');
});

// 자바스크립트는 css에서 사용하던 
// background-color를 사용하지않는다
// -를 빼는걸로 인식하기 때문에 
// -대신에 뒤에 오는 단어 첫글자를 대문자로 바꾸어 사용한다
// 마우스를 대상 위로 올렸을 때 이벤트 발생
item.addEventListener('mouseover', function () {
  item.style.backgroundColor = 'yellow';
});

// 마우스가 대상 밖으로 나갔을 때 이벤트 발생
// mouseover의 이벤트를 해제하는 효과/ 다른 이벤트를 발생시키는 효과
// 방법1
// item.addEventListener('mouseout', function () {
//   item.style.backgroundColor = '';
// });

// 방법2
document.querySelector('button').addEventListener('mouseout',function(){
  item.style.backgroundColor = '';
});