document.addEventListener('DOMContentLoaded', init);

function init() {
  // console.dir(document);
  document.forms.myForm.addEventListener('submit', function (e) {
    e.preventDefault(); // 기본 기능 차단
    let mid = document.querySelector('input[name="member_id"]').value;
    let mname = document.querySelector('input[name="member_name"]').value;
    let mpoint = document.querySelector('input[name="point"]').value;
    if (mid == null || mid.length < 5 || mid.length > 20) {
      alert("id를 5자 이상 20자 이하로 생성해주세요.")
      return; //함수 종료
    }
    let member = {
      memberId: mid,
      memberName: mname,
      point: mpoint
    }
    let tr = makeTr(member); // 값

    let list = document.querySelector('#list'); // tr을 자식요소로 가진 부모요소(목록)
    list.appendChild(tr);
    // document.querySelector('#list').appendChild(tr);
  }) // end of submit

  // input 값에 change 이벤트 등록
  document.querySelector('thead input').addEventListener("change", function () {
    // tbody의 input 값을 변경
    document.querySelectorAll('tbody input').forEach(function (item, idx, ary) {
      item.checked = document.querySelector('thead input').checked;
    });
  });



  document.querySelectorAll('tbody input').forEach(function (item) {
    item.checkded = false;
  });
} // end of init()

function makeTr(mbr = {}) {
  let tr = document.createElement('tr'); // td를 자식요소로 가진 부모요소
  // <td><input type="checkbox"></td>
  let td0 = document.createElement('td');
  let input = document.createElement('input');
  input.type = 'checkbox';
  console.log(input);
  td0.appendChild(input);
  tr.appendChild(td0);
  for (let prop in mbr) {
    mbr[prop];
    let td = document.createElement('td');
    td.innerText = mbr[prop];
    tr.appendChild(td);
  }
  // <td><button>삭제</button></td>
  let td = document.createElement('td');
  let btn = document.createElement('button');
  // btn.style.backgroundColor='yellow';
  btn.innerHTML = '삭제';
  td.appendChild(btn);
  tr.appendChild(td);
  btn.addEventListener('click', function () {
    btn.parentElement.parentElement.remove();
    // tr.remove();
  });


  return tr; // return;
} // end of makeTr