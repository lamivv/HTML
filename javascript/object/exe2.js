let numAry = [
  {name: '조카',age: 10}, 
  {name: '큰조카',age: 14}, 
  {name: '삼촌',age: 31}, 
  {name: '큰아버지',age: 45}, 
  {name: '나',age: 21}
];

let filAey = numAry.filter(function(item,idx,ary){
  return true;
});


console.log(`*20살 이상의 대상을 출력합니다*`);
numAry.forEach(function (item, idx, ary) {
  if (item.age > 20) {
    console.log(`${item.name}는 ${item.age}살 입니다`);
  }
});

