function tambah(a, b) {
    return a + b;
}

function kali(a, b) {
    return a * b;
}

var a = parseInt(prompt('Masukkan nilai A :'));
var b = parseInt(prompt('Masukkan nilai B :'));
var hasil = tambah(a, b);
var hasilK = kali(a, b);
alert('Maka hasil dari ' + a + ' dan ' + b + ' adalah  ' + hasil + ' dan  ' + hasilK);