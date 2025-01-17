// 연습

let myFriends = [];
myFriends.push({name:"또또", escore: 70, kscore: 78, gender: 'Female'});
myFriends.push({name:"루루", escore: 80, kscore: 88, gender: 'Female'});
myFriends.push({name:"땅콩", escore: 90, kscore: 70, gender: 'male'});
myFriends.push({name:"치즈", escore: 95, kscore: 55, gender: 'Female'});

// forEach 출력
myFriends.forEach(function(item,idx,ary){
  console.log(item.name);
});

// 영어가 90점 이상인 친구 이름 출력
console.log('영어 점수 90점 이상인 친구');
myFriends.forEach(function(item,idx,ary){
  if(item.escore>=90) {
    console.log(item.name);
  }
});

// 평균 점수가 80점 이상인 친구 이름 출력
console.log('평균 점수 80점 이상인 친구');
myFriends.forEach(function(item,idx,ary){
  let ave = (item.escore+item.kscore)/2;
  if(ave>=80) {
    console.log(item.name);
  }
});

// 성별이 Female인 친구의 영어 평균
console.log('여학생 영어 평균 점수');
let girl= 0;
let sum= 0;
myFriends.forEach(function (item, idx, ary) {
  if (item.gender=='Female') {
    girl += 1;
    sum += item.escore;
  } 
});
console.log(sum/girl);

// filter : 여학생의 영어평균 미만 => underAvgAry에 저장
let girlAve = sum / girl;
let underAvgAry = myFriends.filter(function (item, idx, ary) {
  if (item.gender == 'Female') {
    if (item.escore < girlAve) {
      return true;
    } else {
      return false;
    }
  }
});
console.log(underAvgAry);