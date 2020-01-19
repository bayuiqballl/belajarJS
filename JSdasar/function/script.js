function Kubus1() {
    var sisi = 8;
    total = sisi * sisi * sisi;
    return total;
}

function Kubus2() {
    var sisi = 3;
    total = sisi * sisi * sisi;
    return total;
}

// var total = parseInt(Kubus1()) + parseInt(Kubus2());
var total = Kubus1() + Kubus2();

// console.log(' jumlah penjumlahan kubus : ' + total);

function jumlahKubus(a, b) {
    return Total = a * a * a + b * b * b;
}

console.log(jumlahKubus(8, 3));