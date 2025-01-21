document.addEventListener('DOMContentLoaded', init);

function init() {
  console.dir(document);
  document.forms.myForm.addEventListener('submit', function (e) {
    e.preventDefault(); // 기본 기능 차단
    let mid = document.querySelector('input[name="member_id"]').value;
    let mname = document.querySelector('input[name="member_name"]').value;
    let mpoint = document.querySelector('input[name="point"]').value;
    if (mid == null || mid.length < 5 || mid.length > 20) {
      alert("id를 5자 이상 20자 이하로 생성해주세요.")
      return; //함수 종료
    }
    console.log(mid.length);
    // <tr><td>admin</td>.....</tr> 필요한 함수 : createElement, appendChild
    let tr = document.createElement('tr'); // td를 자식요소로 가진 부모요소

    let td1 = document.createElement('td'); // 회원id
    td1.innerHTML = mid;
    tr.appendChild(td1);

    let td2 = document.createElement('td'); // 회원이름
    td2.innerHTML = mname;
    tr.appendChild(td2);

    let td3 = document.createElement('td'); // 회원점수
    td3.innerHTML = mpoint;
    tr.appendChild(td3);

    let list = document.querySelector('#list'); // tr을 자식요소로 가진 부모요소(목록)
    list.appendChild(tr);
    // document.querySelector('#list').appendChild(tr);
  })
}