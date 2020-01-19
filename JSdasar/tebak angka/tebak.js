var tanya = true;
while (tanya == true) {
    alert('tebak angka dari 1-10\n Kamu punya 3 Kesempatan ');
    var player = parseInt(prompt('tebak angka darin 1-10'));

    var comp = Math.floor(Math.random() * 10);

    if (player !== comp) {
        for (var i = 2; i > 0; i--) {
            alert('Coba lagi\n Kamu punya sisa' + i);
            var player = parseInt(prompt('tebak angka darin 1-10'));
        }
        alert('anda gagal! angka yang dicari ' + comp);
    } else if (player === comp) {
        alert('anda menemukan bilangan : ' + comp);
    }



    tanya = confirm('lagi?');
}
alert('terimakasih sudah bermain.');