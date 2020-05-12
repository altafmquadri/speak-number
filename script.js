const msgEl = document.getElementById('msg')


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

let recognition = new window.SpeechRecognition()

const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1
}

const writeMessage = (msg) => {
    msgEl.innerHTML = `<div>You said</div>
    <span class="box">${msg}</span>`
}

const checkNumber = (msg) => {
    const num = +msg

    if (Number.isNaN(num)) {
        msgEl.innerHTML += `<div>That is not a valid number</div>`
        return
    }

    if (num > 100 || num < 1) {
        msgEl.innerHTML += `<div>Number must be between 1 and 100</div>`
        return
    }

    if (num === randomNum) {
        document.body.innerHTML = `<h2> Congrats! You have guessed the number! <br> <br> <br> It was ${num}</h2>
        <button class="play-again" id="play-again">Play Again</button>`
    } else if (num > randomNum) {
        msgEl.innerHTML += `<div> Go Lower </div>`
    } else {
        msgEl.innerHTML += `<div> Go Higher </div>`

    }
}

const onSpeak = (e) => {
    const msg = e.results[0][0].transcript
    writeMessage(msg)
    checkNumber(msg)
}





recognition.addEventListener('result', onSpeak)
recognition.addEventListener('end', () => recognition.start())

document.body.addEventListener('click', (e) => {
    if (e.target.id === 'play-again') window.location.reload()
})


const randomNum = getRandomNumber()
recognition.start()
console.log(randomNum);