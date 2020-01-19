// Manipulasi Array 

// // 0. menulis  array
// var arr = ["a", 1, true];
// console.log(arr);

// // 01. Menanambah  Array
// var arr = [];
// arr[0] = "Babi";
// arr[1] = "Sapi";
// arr[2] = "Ayam"
// console.log(arr);

//02. menghapus Array
// var arr = [];
// arr[0] = "Babi";
// arr[1] = "Sapi";
// arr[2] = "Ayam";
// arr[1] = undefined;
// console.log(arr);

// // 03. menampilkan Array
// var arr = ["a", "1", "B"];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Penggunaan method pada array
// 1. join (menampilkan dengan rapi)
var arr = ["a", " b", "c", "d"];
// console.log(arr.join(' '));
// 2. push (menambah isi index array)
arr.push('e');
// arr.pop(); menghapus
console.log(arr.join());
// 3. unshift & shift (menggeser keluar & dalam)
// arr.unshift('0'); 
// arr.shift();
//  4. splice //mengganti index tengah
// splice(indexAwal, IndexMauDihapus, elementBaru1..)
// arr.splice(1, 2, '3')
// 5. Slice //menampilkan index tertentu
// arr2 = arr.slice(1, 3);
// console.log(arr2.join());
// console.log(arr.join());
// 6. forEach
// nama = ['adi', 'ali', 'husein', 'sayaf'];
// nama.forEach(function (e, i) {
//     console.log('nama ke ' + i + ' adalah ' + e);
// })
// 7. Map // mengembalikan array
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// var angka2 = angka.map(function (e) {
//     return e * 2;
// });
// console.log(angka2);
// 8.sort
// var angka = [1, 5, 2, 7, 6, 9, 11, 12, 10];
// var angkaSorting = angka.sort(function (a, b) {
//     return (a - b);
// });

// console.log(angkaSorting);
// // Filter  
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// var filter = angka.filter(function (x) {
//     return x < 10;
// });
// console.log(filter);
// Find
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// var find = angka.find(function (x) {
//     return x == 5;
// });
// console.log(find);