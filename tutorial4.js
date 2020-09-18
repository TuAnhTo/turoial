Lớp Circle (hình tròn) gồm:

Thuộc tính:
bán kính (radius) sẽ nhận vào giá trị dạng số thực

màu sắc (color) sẽ nhận vào giá trị dạng chuỗi.

Phương thức:
Circle() là phương thức khởi tạo để tạo đối tượng không tham số.

getRadius() là phương thức trả về bán kính của hình tròn

getArea() là phương thức trả về diện tích hình tròn theo công thức S = Math.PI * radius * radius

Để hoàn thành bài thực hành, học viên cần:

Đưa mã nguồn lên GitHub
Dán link của repository lên phần nộp bài trên CodeGymX
Hướng dẫn
Bước 1: Tạo lớp Circle với phương thức khởi tạo có 1 tham số truyền vào

let Circle = function(radius) {

        this.radius = radius;

};
Bước 2: Xây dựng phương thức trả về bán kính của hình tròn

this.getRadius = function() {
    return radius;
}
Bước 3: Xây dựng phương thức tính diện tích hình tròn

this.getArea = function() {
    return Math.PI * radius * radius;
}
Bước 4: Sử dụng lớp vừa tạo. Tạo đối tượng hình tròn với bán kính là 2

let circle = new Circle(2);
Bước 5: Truy cập phương thức của lớp hình tròn vừa tạo và gán cho các biến radius, area

let radius = circle.getRadius(); // 2

let area = circle.getArea(); // 12.566370614359172 
Bước 6: Hiển thị bán kính và diện tích

alert("radius: " + radius + "; area: " + area);
Bước 7: Chạy chương trình. Quan sát kết quả.

Tạo đối tượng Hình tròn khác, với bán kính có giá trị khác nhau. Thực hiện lại các bước 4, 5, 6, 7 để xem kết quả trả về.