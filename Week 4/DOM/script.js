let timeout;
function debounce() {

    clearTimeout(timeout)
    timeout = setTimeout(() => {
        calculate()
    }, 200)
}



function calculate() {
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);

    if (!isNaN(a) && !isNaN(b)) {
        fetch(`https://sum-server.100xdevs.com/sum?a=${a}&b=${b}`)
            .then(function (response) {
                response.text()
                    .then(function (ans) {
                        document.getElementById("result").innerHTML = ans;
                        document.getElementById("result").style.display = "block";
                    })
            })
    } else {
        document.getElementById("result").innerHTML = "Please enter a number";
    }
}