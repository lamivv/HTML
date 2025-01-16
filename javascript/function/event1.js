//num1에 입력한 값과 num2에 입력한 값을
//버튼을 클릭하면 = input#result태그에 더한 값을 출력할 수 있도록 한다

let item = document.querySelector('button'); 

item.addEventListener('click', function(){
  let n1 = document.querySelector('#num1').valueAsNumber;
  let n2 = document.querySelector('#num2').valueAsNumber;
  document.querySelector('#result').value = n1+n2;
  // document.querySelector('#result')['value'] = n1+n2;
  
  // let n3 = document.querySelector('#num1');
  // console.dir(n3);
  // console.dir(n1.valueAsNumber);
}); 