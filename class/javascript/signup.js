const cheakValidation = function() {
    // input은 닫는 태그 없으므로 value를 사용
    let email = document.getElementById("email").value;
    let pw1 = document.getElementById("pw1").value;
    let pw2 = document.getElementById("pw2").value;

    if (email && pw1 && pw2) {
        // 모든 input에 값이 들어있을때
        document.getElementById("submit").disabled = false
    } else {
        // input이 하나라도 비어있을때
        document.getElementById("submit").disabled = true
    }
}