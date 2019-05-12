function regexChecker() {
    let regex = /[A-Z][a-z]+ [A-Z][a-z]+/
    var fullName = document.getElementById('firstName').value + " " + document.getElementById('lastName').value;
    let append = document.createElement('h1');
    append.innerHTML = fullName;
    if (fullName.match(regex)) {
        alert("Yay! Your inputs were all correct!");
        console.log(true);
        document.getElementById('valid').appendChild(append);
    } else {
        alert("Oh no! Thats an invalid format!");
        console.log(false);
        document.getElementById('invalid').appendChild(append);
    }
}