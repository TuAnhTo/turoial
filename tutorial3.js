Lớp MyDate gồm:

Thuộc tính:

day (ngày) sẽ nhận vào giá trị dạng số nguyên
month (tháng) sẽ nhận vào giá trị dạng số nguyên
year (năm) sẽ nhận vào giá trị dạng số nguyên
Phương thức:

Date(day, month, year) là phương thức khởi tạo để tạo đối tượng với 3 tham số.

getDay(), getMonth(), getYear() là phương thức trả về ngày, tháng, năm 

setDay(), setMonth(), setYear() là phương thức thiết đặt lại giá trị mới cho ngày tháng năm

Để hoàn thành bài thực hành, học viên cần:

Đưa mã nguồn lên GitHub
Dán link của repository lên phần nộp bài trên CodeGymX
Hướng dẫn
Bước 1: Xây dựng lớp MyDate với phương thức khởi tạo có 3 tham số truyền vào

let MyDate = function(day, month, year) {

        this.day = day;

        this.month = month;

        this.year = year;

 };
Bước 2: Xây dựng phương thức trả về ngày, tháng, năm

this.getDay = function() {
    return this.day;
}
this.getMonth = function() {
    return this.month;
}
this.getYear = function() {
    return this.year;
}
Bước 3: Xây dựng phương thức thiết đặt lại giá trị các thuộc tính day, month, year

this.setDay = function(day) {
    this.day  = day;
}
this.setMonth = function(month) {
    this.month  = month;
}
this.setYear = function(year) {
    this.year  = year;
}
Bước 4: Sử dụng lớp vừa tạo. Tạo đối tượng date với ngày:2, tháng:2, năm: 2007:

let date = new MyDate(2, 2, 2007);
Bước 5: Truy cập phương thức của lớp date như sau:

let day = date.getDay(); // 2

let month = date.getMonth(); // 2

let year = date.getYear(); // 2007
Bước 6: Hiển thị ngày, tháng, năm:

alert(day + "/" + month + "/" + year);
Bước 7: Chạy chương trình. Quan sát kết quả.

Bước 8: Gọi phương thức để thay đổi ngày, tháng, năm của đối tượng date vừa tạo ra thành ngày mùng 10/10/2019 sau đó hiển thị lại:

date.setDay(10);
date.setMonth(10);
date.setYear(2019);

alert(day + "/" + month + "/" + year);
Bước 9: Cài đặt thêm phương thức setDate() để thiết đặt lại ngày, tháng, năm cho đối tượng MyDate và phương thức toString() để trả về chuỗi ngày tháng năm theo định dạng dd/mm/yyyy.

Bước 10: Gọi 2 phương thức vừa xây dựng.