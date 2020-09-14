Bước 1: Tạo hàm processConfirm
function processConfirm(answer) {
    let result = "";
    if (answer) {
        result = "Excellent. We'll play a nice game of chess.";
    } else {
        result = "Maybe later then.";
    }
    return result;
}
Hàm này đánh giá giá trị có trong đối số answer. Nếu giá trị của biến answer là true đồng nghĩa với việc người dùng chọn OK, hàm sẽ tạo biến result và gán giá trị cho biến result là chuỗi "Excellent.  We'll play a nice game of chess."". Nếu giá trị của biến answer là false, đồng nghĩa với việc người dùng chọn Cancel, hàm sẽ vẫn tạo biến result nhưng gán giá trị cho biến result là chuỗi "Maybe later then."". Bất kể biến answer lưu giá trị gì, hàm processConfirm trả về biến result cho hàm gọi bằng câu lệnh return bên trong hàm. 

Bước 2: Tạo hộp thoại xác nhận, gọi hàm processConfirm() và hiển thị kết quả
let confirmAnswer = confirm("Shall we play a game?");
let theAnswer = processConfirm(confirmAnswer);
alert(theAnswer);
Hàm confirm() nhận vào một đối số duy nhất, đó là nội dung thông báo để hiện thị trong hộp thoại. Chỉ có một lưu ý với hàm confirm() bạn nên đặt nội dung thông báo theo dạng câu hỏi hoặc thông điệp cho phép người dùng lựa chọn. Nếu người dùng không đưa vào lựa chọn nào hãy thay thế bằng hàm alert().

Mã nguồn hoàn chỉnh như sau:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>

    function processConfirm(answer) {
        let result = "";
        if (answer) {
            result = "Excellent. We'll play a nice game of chess.";
        } else {
            result = "Maybe later then.";
        }
        return result;
    }
    
    let confirmAnswer = confirm("Shall we play a game?");
    let theAnswer = processConfirm(confirmAnswer);
    alert(theAnswer);
    
</script>
</body>
</html>
Bước 3: Chạy chương trình, quan sát kết quả