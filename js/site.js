
function getString() {
    let fNum = document.getElementById("fizzNum").value;
    let bNum = document.getElementById("buzzNum").value;

    getFizzBuzz(fNum, bNum);

    // displayFizzBuzz(dFizzBuzz);
}

function getFizzBuzz(fNum, bNum) {
    // let numbers = [];

    // for (let i = sValue; i <= eValue; i++) {
    //     numbers.push(i);
    // }
    // return numbers;

    for (let i = 1; i <= 100; i++) {
        // document.getElementById("results").innerHTML += `<p>${i}</p>`;

        let results = document.getElementById("results")

        if (i % fNum == 0 && i % bNum == 0) {
            results.innerHTML += `<tr><td>FizzBuzz</td></tr>`;
        }

        else if (i % bNum == 0) {
            results.innerHTML += `<tr><td>Buzz</td></tr>`;
        }

        else if (i % 3 == 0) {
            results.innerHTML += `<tr><td>Fizz</td></tr>`;
        }

        else {
            results.innerHTML += `<tr><td>${i}</td></tr>`;
        }
    }
}

function displayFizzBuzz(dFizzBuzz) {
    
}