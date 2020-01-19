// // document.querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// // document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'cyan';
// }
const sectionA = document.getElementById('a');
const p1 = sectionA.querySelector('p');
p1.style.backgroundColor = 'blue';





const sectionB = document.querySelector('section#b');
const p = sectionB.getElementsByTagName('p')[0];
p.style.backgroundColor = 'green';