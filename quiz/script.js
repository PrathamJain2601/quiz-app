const arr =
    [{
        ques: "sum of 1 and 2",
        opt1: "1",
        opt2: "2",
        opt3: "3",
        opt4: "4",
        ans: "3"
    },
    {
        ques: "sum of 3 and 4",
        opt1: "7",
        opt2: "6",
        opt3: "5",
        opt4: "8",
        ans: "7"
    },
    {
        ques: "sum of 5 and 6",
        opt1: "8",
        opt2: "9",
        opt3: "10",
        opt4: "11",
        ans: "11"
    },
    {
        ques: "sum of 7 and 8",
        opt1: "15",
        opt2: "16",
        opt3: "17",
        opt4: "18",
        ans: "15"
    },
    {
        ques: "sum of 9 and 10",
        opt1: "18",
        opt2: "16",
        opt3: "19",
        opt4: "17",
        ans: "19"
    }]
let count = 0;
const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const list = document.getElementById("ladder").children;
let canClick = true;


function getQuestion() {
    question.innerHTML = arr[count]["ques"];
    option1.innerHTML = arr[count]["opt1"];
    option2.innerHTML = arr[count]["opt2"];
    option3.innerHTML = arr[count]["opt3"];
    option4.innerHTML = arr[count]["opt4"];
    option1.style.backgroundColor = "black";
    option2.style.backgroundColor = "black";
    option3.style.backgroundColor = "black";
    option4.style.backgroundColor = "black";
    if (arr.length - count < 5) {
        list[0].children[arr.length - count].style.backgroundColor = "#540054";
    }
    list[0].children[arr.length - count - 1].style.backgroundColor = "purple";
    canClick = true;
}

function check() {
    console.log()
    if (option1.innerText == arr[count]["ans"]) {
        return option1;
    }
    if (option2.innerText == arr[count]["ans"]) {
        return option2;
    }
    if (option3.innerText == arr[count]["ans"]) {
        return option3;
    }
    if (option4.innerText == arr[count]["ans"]) {
        return option4;
    }
}

function lost() {
    question.innerText = "FINISHED";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    option1.style.backgroundColor = "black";
    option2.style.backgroundColor = "black";
    option3.style.backgroundColor = "black";
    option4.style.backgroundColor = "black";
    list[0].children[arr.length - count - 1].style.backgroundColor = "black";
}

function selected(option) {
    canClick = false;
    let answer = check();
    if (answer == option) {
        option.style.backgroundColor = "green";
    }
    else {
        answer.style.backgroundColor = "green";
        option.style.backgroundColor = "red";
        setTimeout(() => {
            lost();
        }, 3000);
        return;
    }
    count++;
    if (count == arr.length) {
        setTimeout(() => {
            lost();
        }, 3000);
        return;
    }
    setTimeout(() => {
        main();
    }, 3000);
}

function main() {
    getQuestion();
    if (canClick == true) {
        option1.addEventListener("click", () => {
            if (canClick == true) {
                selected(option1);
            }
        })
        option2.addEventListener("click", () => {
            if (canClick == true) {
                selected(option2);
            }
        })
        option3.addEventListener("click", () => {
            if (canClick == true) {
                selected(option3);
            }
        })
        option4.addEventListener("click", () => {
            if (canClick == true) {
                selected(option4);
            }
        })
    }
}

main();