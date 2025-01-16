// 메소드
// 함수와 같지만 객체안에 소속되어있다는 특징

//this : object에서 this는 자기 자신(object)을 가리킨다
//this : 함수에서 this는 전역객체를 가리킨다
//this : 이벤트에서는 이벤트가 가리키는 대상을 말한다
let obj = {
  name: "뽀뽀",
  birth: "1999-12-19",
  bloodtype: "B",
  showInfo: function () {
    console.log(`이름은 ${this.name}, 생일은 ${this.birth} 입니다.`)
  },
  addNumber: function (num1 = 0, num2 = 0) {
    return num1 + num2;
  },
  calculatefnc: function (num1 = 0, num2 = 0, calfnc) {
    // 기능을 매개값으로 받겠습니다.
    return calfnc(num1, num2);
  }
}
obj.showInfo();
// alert(obj.addNumber(10, 12));
let result = obj.calculatefnc(10, 5, function (a, b) {
  // return a - b;
  return a + b;
})
console.log(`결과값: ${result}`);