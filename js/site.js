
function getString() {
    
    let fNum = document.getElementById("fizzNum").value;
    let bNum = document.getElementById("buzzNum").value;

    fNum = parseInt(fNum);
    bNum = parseInt(bNum);

    if (Number.isInteger(fNum) && Number.isInteger(bNum)) {
        let dFizzBuzz = getFizzBuzz(fNum, bNum);
        displayFizzBuzz(dFizzBuzz);
    } else {
        alert("You must enter integer values");
    }
}

function getFizzBuzz(fNum, bNum) {
    let results = [];

    for (let i = 1; i <= 100; i++) {

        if (i % fNum == 0 && i % bNum == 0) {
            results.push('FizzBuzz');
        }

        else if (i % bNum == 0) {
            results.push('Buzz');
        }

        else if (i % fNum == 0) {
            results.push('Fizz');
        }

        else {
            results.push(i);
        }
    }

    return results;
}

function displayFizzBuzz(dFizzBuzz) {

    let tableBody = document.getElementById("results");

    let templateRow = document.getElementById("fbTemplate");

    //clear the table
    tableBody.innerHTML = "";

    for (let i = 0; i < dFizzBuzz.length; i += 5) {

        let tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = dFizzBuzz[i];
        rowCols[0].classList = dFizzBuzz[i];

        rowCols[1].textContent = dFizzBuzz[i+1];
        rowCols[1].classList = dFizzBuzz[i+1];

        rowCols[2].textContent = dFizzBuzz[i+2];
        rowCols[2].classList = dFizzBuzz[i+2];

        rowCols[3].textContent = dFizzBuzz[i+3];
        rowCols[3].classList = dFizzBuzz[i+3];

        rowCols[4].textContent = dFizzBuzz[i+4];
        rowCols[4].classList = dFizzBuzz[i+4];

        tableBody.appendChild(tableRow);
    }
}