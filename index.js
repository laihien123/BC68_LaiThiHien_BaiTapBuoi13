// bài 1
function tinhLuong () {
    let tienLuongHangNgay = document.getElementById('soTien').value;
    let ngayDaLamViec = document.getElementById ('days').value;
    if (ngayDaLamViec > 0) {
        let tienLuong = tienLuongHangNgay * ngayDaLamViec;
        document.getElementById('result').innerText = 'Tổng Lương: ' + tienLuong + 'VND';
    }else{
        // Nếu nhập không đúng sẽ hiện thị thông báo lỗi 
        document.getElementById ('result').innerText ='Vui lòng nhập số ngày làm việc hợp lệ';
    }
    
};

// bài 2
function tinhTrungBinh () {
    let num1 = parseFloat (document.getElementById('num1').value);
    let num2 = parseFloat (document.getElementById('num2').value);
    let num3 = parseFloat (document.getElementById('num3').value);
    let num4 = parseFloat (document.getElementById('num3').value);
    let num5 = parseFloat (document.getElementById('num5').value);
 
    let tong = num1 + num2 + num3 + num4 + num5;
    let trungBinh = tong / 5;
    document.getElementById('result1').innerText = 'Giá trị trung bình là: ' + trungBinh;
};

//  bài 3
let giaHienTai = 23500;
function chuyenDoiTienTe () {

    let soTienUSD = document.getElementById('soTienUSD').value;
    let soTienVND = soTienUSD * giaHienTai;
    const donvi = "vi-VN";
   const ketqua = new Intl.NumberFormat(donvi
       ).format(soTienVND);
    document.getElementById('result2').textContent = `${soTienUSD} USD tương đương khoảng: ${ketqua}VND`;
};

// bài 4
function tinhToan () {
    let chieuDai = document.getElementById('chieuDai').value;
    let chieuRong = document.getElementById('chieuRong').value;
    let dienTich = chieuDai * chieuRong;
    let chuVi = 2 * (parseInt(chieuDai) + parseInt(chieuRong));
    document.getElementById('result3').innerHTML = `Diện tích: ${dienTich}, Chu vi: ${chuVi}`
};

// bài 5
function tinhTong () {
    let so = document.getElementById('soNhap').value;
    if (so.length == 2){
        let chuc=so/10;
        let donvi=so%10;
        let tong = chuc + donvi;
        document.getElementById('result4').innerText = tong;
    }else if (so.length=1) {
        document.getElementById('result4').innerText = "Nhập số có hai chữ số";
    }
    else{
        document.getElementById('result4').innerText = "Nhập số có hai chữ số";
    }
};