document.getElementById("btn").onclick = function () {
    var randomNumber = Math.floor(Math.random() * 6);
    if (document.getElementById("guess").value == randomNumber) {
        alert("You guess correctly !!!");
        document.getElementById("guess").value=0;
    }
    else {
        alert("Nope, correct number was " + randomNumber);
    }
}