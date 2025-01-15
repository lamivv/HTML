// 1~10까지 짝수 값을 구하는 반복
for (let i = 1; i < 11; i++) {
  if (i%2==0) {
    console.log(i);
  }
}
// 방법1
// document.write(`<table border="1">`);
// document.write(`<style>table {border-collapse: collapse}</style>`);
// document.write(`<caption><small>2단</small></caption>`);
// document.write(`<tbody>`);
// for (let i = 0; i < 10; i++) {
// document.write(`<tr><td>2 * ${i} = ${2*i}</td></tr>`);}
// document.write(`</tbody>`);

// 방법2
// let html = '';
// html += '<table border="1">';
// html += '<tbody>';
// for (let i = 1; i<= 9; i++) {
//   html += `<tr><td style='background : yellow;'>2* ${i} = ${2*i}</td></tr>`;
// }
// html+= '</body>';
// html+= '</table>';
// document.write(html);

// 방법2 - i의 값이 홀수면 배경색 노랑, 짝수면 배경색 없음
let html = '';
html += '<table border="1">';
html += '<tbody>';
for (let i = 1; i<= 9; i++) {
  if (i%2==0) {
    html += `<tr><td>2* ${i} = ${2*i}</td></tr>`;
  } else {html += `<tr><td style='background : yellow;'>2* ${i} = ${2*i}</td></tr>`;}
}
html+= '</body>';
html+= '</table>';
document.write(html);