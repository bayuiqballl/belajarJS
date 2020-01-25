// // event Handler
const p3 = document.querySelector('.p3');

function ubahWarna() {
    p3.style.backgroundColor = 'orange';
}

// menggunakan method
function ubahWarnaP2() {
    p2.style.backgroundColor = 'red';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;

// menggunakan addEventListener pada  list

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});


// event Listener
const p1 = document.querySelector('.p1');
p1.addEventListener('mouseenter', function () {
    p1.style.backgroundColor = 'black';
});
p1.addEventListener('mouseleave', function () {
    p1.style.backgroundColor = 'grey';
    p1.style.color = 'white';
});