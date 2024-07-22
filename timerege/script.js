function countdown() {
    const targetDate = new Date("December 31, 2025 23:59:59").getTime();
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("years").innerText = years;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
}

setInterval(countdown, 1000);
countdown();
