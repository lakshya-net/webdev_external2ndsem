function generateInputs() {
    const count = document.getElementById('subjectCount').value;
    const inputArea = document.getElementById('marksInputArea');
    inputArea.innerHTML = '<h3>Enter Marks for each subject:</h3>';

    for (let i = 1; i <= count; i++) {
        inputArea.innerHTML += `<input type="number" class="mark-input" placeholder="Subject ${i} marks" min="0" max="100"><br>`;
    }
    inputArea.innerHTML += `<button onclick="calculateResult()">Calculate Grade</button>`;
}

function calculateResult() {
    const marks = document.getElementsByClassName('mark-input');
    let total = 0;
    let count = marks.length;
    let hasFailed = false;

    for (let i = 0; i < count; i++) {
        let val = parseFloat(marks[i].value) || 0;
        total += val;
        if (val < 40) hasFailed = true; 
    }
'k'
    let average = total / count;
    let grade = "";
    let status = "";

    if (average >= 90) grade = "A+";
    else if (average >= 75) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 50) grade = "C";
    else grade = "D";

    
    status = (average >= 40 && !hasFailed) ? "PASS" : "FAIL";
    const statusClass = status === "PASS" ? "pass" : "fail";

   
    document.getElementById('resultDisplay').innerHTML = `
        <div class="result-box">
            <p><strong>Total Marks:</strong> ${total}</p>
            <p><strong>Average:</strong> ${average.toFixed(2)}</p>
            <p><strong>Grade:</strong> ${grade}</p>
            <p><strong>Result:</strong> <span class="${statusClass}">${status}</span></p>
        </div>
    `;
}