var item = prompt('masukkan nama makanan: ' + '\n cth nasi,daging,susu,hamburger,sempol,cilok');


switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('Makanan / minuman Sehat');
        break;
    case 'hamburger':
    case 'sempol':
    case 'cilok':
        alert('Makanan / minuman tidak Sehat');
        break;
    default:
        alert('Bukan termasuk makanan');
        break;
}