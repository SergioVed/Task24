let buttonSession = document.getElementById("session")
let buttonLocal = document.getElementById("local")
let buttonClear = document.getElementById("clear")

buttonSession.onclick = () => {
    if (sessionStorage.click) {
        sessionStorage.click = Number(sessionStorage.click) + 1
    } else {
        sessionStorage.click = 1
    }
    document.getElementById("resultSession").innerHTML = sessionStorage.click + "times u clicked"
}

buttonLocal.onclick = () => {
    if (localStorage.clickCount) {
        localStorage.clickCount = Number(localStorage.clickCount) + 1
    } else {
        localStorage.clickCount = 1
    }
    document.getElementById("resultLocal").innerHTML = localStorage.clickCount + "times u clicked"
}

buttonClear.onclick = () => {
    sessionStorage.clear()
    localStorage.clear()

    document.getElementById("resultSession").innerHTML = 0 + "times u clicked"
    document.getElementById("resultLocal").innerHTML = 0 + "times u clicked"

}