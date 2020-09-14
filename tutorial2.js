Bước 1: Thêm mã HTML tạo form

<p>
  <label>Fahrenheit</label>
  <input id="inputFahrenheit" type="number" placeholder="Fahrenheit"
  oninput="temperatureConverter(this.value)"
  onchange="temperatureConverter(this.value)">
</p>
<p>Celsius: <span id="outputCelsius"></span></p>
Bước 2: Xây dựng hàm temperatureConverter

Hàm sẽ nhận tham số đầu vào là giá trị cần chuyển đổi. Thực hiện chuyển đổi từ độ F sang C theo công thức C = (F– 32) /1.8

function temperatureConverter(valNum) {
        valNum = parseFloat(valNum);
        document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
    }
Mã nguồn hoàn chỉnh như sau:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<form>
    <p>
        <label>Fahrenheit</label>
        <input id="inputFahrenheit" type="number" placeholder="Fahrenheit"
               oninput="temperatureConverter(this.value)"
               onchange="temperatureConverter(this.value)">
    </p>
    <p>Celsius: <span id="outputCelsius"></span></p>
</form>

<script>

    function temperatureConverter(valNum) {
        valNum = parseFloat(valNum);
        document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
    }

</script>
</body>
</html>
Bước 3: Chạy chương trình và quan sát kết quả