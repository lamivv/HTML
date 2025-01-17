// forEach() 반복문 메소드
let numAry = [20, 13, 45, 62, 19];
let sum = 0;
let Even = 0; 
let Oddidx = 0;
let Max = 0; 
numAry.forEach(function(item,idx,ary){ // 배열 안에 들어있는 갯수만큼 반복하면서 정의한 함수를 실행한다
  // console.log(item,idx,ary); // (배열안에있는요소의 값/ 인덱스번호 / 배열 전체)
  console.log(`item : ${item}`); // (배열안에있는요소의 값)
    sum += item; 
  if(item%2==0){
    Even += item;
  }
  if(idx%2!=0){
    Oddidx += item;
  }
  if(Max < item){
    Max = item; 
  }
}); 
console.log(`합계 ${sum}`); 
console.log(`짝수 합계 ${Even}`); 
console.log(`인덱스 홀수번째 값들의 합계 ${Oddidx}`);
console.log(`가장 큰 값 ${Max}`);

// filter(function(item,idx,ary){}) 조건을 만족하는 요소를 새로운 배열에 담아주는 것
let filterAry = numAry.filter(function(item,idx,ary){
  if(item%2==1){
    return true;
  } else {
    return false;
  }
});
console.log(filterAry);