function getTime() {



    let now = new Date()

    // /Clock
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    ///Clock padStart()
    let phour = hour.toString().padStart(2, '0')
    let pminute = minute.toString().padStart(2, '0')
    let psecond = second.toString().padStart(2, '0')


    ///Calender
    let day = now.getDate()
    let month = now.getMonth() + 1
    let year = now.getFullYear()

    ///Calender padStart()
    let pday = day.toString().padStart(2, '0')
    let pmonth = month.toString().padStart(2, '0')
    let pyear = year.toString().padStart(2, '0')



    document.getElementById('hour').innerText = phour
    document.getElementById('minute').innerText = pminute
    document.getElementById('second').innerText = psecond
    document.getElementById("date").innerHTML = pday + " / " + pmonth + " / " + pyear;
}

setInterval(() => {
    getTime()
}, 1000);