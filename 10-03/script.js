let sec = 0
let min = 0
let hour = 0

const start = document.getElementById("start")
const reset = document.getElementById("reset")
const stop = document.getElementById("stop")

const createInterval = ms => fn => {
    let id = setInterval(fn, ms)
    return () => clearInterval(id)
}
let closeSeconds
let closeMinutes
let closeHours

start.addEventListener("click", () => {
    document.getElementById("time").classList.remove("pulse")
    closeSeconds = createInterval(1000)(() => {
        sec++
        if (sec >= 60) {
            sec = 0
        }
        let pre = `0${sec}`
        document.getElementById("sec").innerText = sec < 10 ? pre : sec
    })
    closeMinutes = createInterval(60000)(() => {
        min++
        let pre = `0${min}:`
        document.getElementById("min").innerText = min < 10 ? pre : min + ":"
    })

    closeHours = createInterval(3_600_000)(() => {
        hour++
        let pre = `0${hour}:`
        document.getElementById("hour").innerText = hour < 10 ? pre : hour + ":"
    })
})
stop.addEventListener("click", () => {
    closeSeconds()
    closeMinutes()
    closeHours()
})

const resetTime = () => {
    closeSeconds()
    closeMinutes()
    closeHours()
    sec = 0
    min = 0
    hour = 0
    const xs = document.querySelectorAll(".t")
    xs.forEach((time, i) => {
        if (time.dataset.time === "hour" || time.dataset.time === "min") {
            time.innerHTML = "00:"
        } else {
            time.innerHTML = "00"
        }
    })
}
reset.addEventListener("click", resetTime)
