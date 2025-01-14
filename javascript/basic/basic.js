let myName = "user01"; // string 변수 선언
let myAge = 20; // number 변수 20 값을 대입
let myObj = {name: "user02", age : 25}; 
// object 변수. name속성에는 이름을 age속성에는 나이를 담았다
// 하나의 변수에 여러 속성을 담을 때 사용한다
console.log(myName =="user01");
console.log(myAge == myName);
console.log(myObj);
console.log(myObj.name); // "user02"
console.log(myObj.age); // 25  
console.log(myObj.age+3); // 28  
console.log("내 이름은 "+myObj.name+" 입니다"); // "내 이름은 user02 입니다"