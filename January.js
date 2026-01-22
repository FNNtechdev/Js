function checkBirthday() {
    const today = new Date();

    const day = today.getDate();
    const month = today.getMonth(); // January = 0
    const year = today.getFullYear();

    if (day === 24 && month === 0 && year >= 2025) {
        console.log("🎉 Happy Birthday! 🎂 Wishing you joy, success, and blessings!");
    }
}

// Check once when program starts
checkBirthday();

// Check every day (24 hours)
setInterval(checkBirthday, 24 * 60 * 60 * 1000);
