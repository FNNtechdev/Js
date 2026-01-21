function showDateTime() {
    const now = new Date();

    const formatted = now.toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });

    console.log(formatted);
}

setInterval(showDateTime, 1000);
