function reset() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let a = document.getElementById('a')
    let b = document.getElementById('b')
    let points = document.getElementById('points')
    let all = document.getElementsByClassName('choice')
    let msg = document.getElementById('msg')
    let arr = []

    a.textContent = getRandomInt(100)
    b.textContent = getRandomInt(100)

    answer = a.textContent * b.textContent

    for (let i = 0; i < all.length; i++) {
        arr.push(distractors(i))
    }
    for (let i = 0; i < all.length; i++) {
        all[i].textContent = arr[i]
    }

    function distractors(i) {
        if (i < 3) {
            return Math.floor(answer + random());
        } else {
            return Math.floor(answer - random());
        }
    }

    function random() {
        var randomNumber = Math.floor(Math.random() * 100) + 2;
        return randomNumber;
    }

    function right_answer() {
        answer_ = Math.floor(Math.random() * 6)
        all[answer_].textContent = answer
    }

    right_answer()

    setupSquares()

    function setupSquares() {
        for (var i = 0; i < all.length; i++) {
            all[i].style.background = "#FFEBBE";
            again.innerHTML = "Выберите ответ";
            msg.innerHTML = "<span class='correct'>Верно</span>";

            all[i].addEventListener("click", function () {
                var clickedSquare = this.textContent;
                console.log("Player clicked on " + clickedSquare);

                if (clickedSquare == answer) {
                    again.innerHTML = "<span class='again'>Хотите сыграть снова?</span>";
                    this.style.background = "#4254bc";
                    number = points.textContent
                    number = Number(number) + 5
                    points.textContent = number

                    reset()
                }

            });
        }

    }
}
reset()