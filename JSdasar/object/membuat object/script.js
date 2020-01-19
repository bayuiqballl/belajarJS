// membuat  object
// object literally
var mhs = {
    nama: "Bayu Muhammad Iqbal",
    kelas: "IF-42-12",
    nim: "1301184241"
};

// function  Declaration
function CreateObjectMhs(nama, nim, kelas) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.kelas = kelas;
    return mhs;
}
var mahasiswa = CreateObjectMhs('Bayu Muhammad Iqbal', '1301184241', 'IF-42-12');

// Constructor
function Mahasiswa(nama, nim, kelas) {
    this.nama = nama;
    this.nim = nim;
    this.kelas = kelas;
}

var Mhs = new Mahasiswa('Bayu', '1301184241', 'IF4212');