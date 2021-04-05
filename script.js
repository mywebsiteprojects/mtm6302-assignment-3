start();
function start() {
    const localday = localStorage.getItem("day");
    if (localday != null) {
        time();
    }
    else {
        const element2 = document.getElementById("ctimer");
        element2.classList.add("d-none");
    }

}

function time() {
    const element = document.getElementById("countdown");
    element.classList.add("d-none");
    const ttitle = localStorage.getItem("title");
    const tyear = localStorage.getItem("year");
    const tmonth = localStorage.getItem("month");
    const tday = localStorage.getItem("day");
    const countDownDate = new Date(tyear, tmonth, tday).getTime();
    const timer_date = tyear + "/" + tmonth + "/" + tday;
    const end = new Date(timer_date);
    const now = new Date();
    const second = 1000; // Total Millisecond In One Sec
    const minute = second * 60; // Total Sec In One Min
    const hour = minute * 60; // Total Min In One Hour
    const day = hour * 24; // Total Hour In One Day

    const myfunc = setInterval(function () {
        const now = new Date();
        const remain = end - now; // Get The Difference Between Current and entered date time
        if (remain < 0) {

            document.getElementById("counttitle").innerHTML = 'Expired';
        }
        else {

            const days = Math.floor(remain / day); // Get Remaining Days
            const hours = Math.floor((remain % day) / hour); // Get Remaining Hours
            const minutes = Math.floor((remain % hour) / minute); // Get Remaining Min
            const seconds = Math.floor((remain % minute) / second); // Get Remaining Sec
            document.getElementById("counttitle").innerHTML = ttitle;
            document.getElementById("timer").innerHTML = days + ' D : ' + hours + ' H : ' + minutes + ' M : ' + seconds + ' S';
        }
    }, 1000)
}

document.getElementById("save").addEventListener("click", myFunction);
function myFunction() {
    const element = document.getElementById("countdown");
    element.classList.add("d-none");
    const element2 = document.getElementById("ctimer");
    element2.classList.remove("d-none");
    const titles = document.getElementById("title").value;
    const years = document.getElementById("year").value;
    const months = document.getElementById("month").value;
    const days = document.getElementById("day").value;
    localStorage.setItem("title", titles);
    localStorage.setItem("year", years);
    localStorage.setItem("month", months);
    localStorage.setItem("day", days);
    time();
}

document.getElementById("newtime").addEventListener("click", myFunction2);
function myFunction2() {
    localStorage.clear();

    const element = document.getElementById("countdown");
    element.classList.remove("d-none");
    const element2 = document.getElementById("ctimer");
    element2.classList.add("d-none");
    window.location.reload();
}


