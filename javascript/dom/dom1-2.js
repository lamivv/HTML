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
    let member = [mid, mname, mpoint];
    let tr = makeTrAry(member);

    let list = document.querySelector('#list'); // tr을 자식요소로 가진 부모요소(목록)
    list.appendChild(tr);
    // document.querySelector('#list').appendChild(tr);
  }) // end of submit
} // end of init()

function makeTrAry(mbr = []) {
  let tr = document.createElement('tr'); // td를 자식요소로 가진 부모요소

  mbr.forEach(function (item) {
    let td = document.createElement('td');
    td.innerText = item;
    tr.appendChild(td);
    // console.log(item)
  });
  return tr;
}