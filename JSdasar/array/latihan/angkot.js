var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang) {
        penumpang.push(namaPenumpang);
        return penumpang;

    } else {
        for (i = 0; i < penumpang.length; i++) {
            if (penumpang[i] === 0) {
                penumpang.push(namaPenumpang);
                return penumpang;
            } else if (penumpang[i] == namaPenumpang) {
                console.log('nama sudah ada');
                return penumpang;
            } else if (i = penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }

    }
}

function hapusPenumpang(namaPenumpang, penumpang) {
    if (penumpang.length === 0) {
        console.log('angkot kosong')
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                namaPenumpang = undefined;
                return penumpang;
                a
            } else if (penumpang[i] !== namaPenumpang) {
                console.log('nama tidak sesuai');
                return penumpang;
            }
        }
    }
}