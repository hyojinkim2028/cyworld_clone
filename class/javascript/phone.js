const changeFocus1 = () =>  {
    let phone1 = document.getElementById("p1").value
    if (phone1.length === 3) {
        document.getElementById("p2").focus() // p2로 커서가 옮겨짐
    }
}

const changeFocus2 = () =>  {
    let phone2 = document.getElementById("p2").value
    if (phone2.length === 4) {
        document.getElementById("p3").focus() // p2로 커서가 옮겨짐
    }
}