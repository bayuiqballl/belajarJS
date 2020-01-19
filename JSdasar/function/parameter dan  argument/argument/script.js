function tambah() {
    hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }

    return hasil;
}