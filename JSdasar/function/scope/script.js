// variable global / scope window

var a = 1;

function tes(a) {
    // name conflict 
    // variable local
    var a = 2;

    // tambahkan window.a jika memanggil variable global
    console.log(a);
}
tes();