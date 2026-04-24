// Define time zones with their UTC offsets and names
const timeZones = {
    'clock-ny': { name: 'America/New_York' },
    'clock-london': { name: 'Europe/London' },
    'clock-paris': { name: 'Europe/Paris' },
    'clock-dubai': { name: 'Asia/Dubai' },
    'clock-tokyo': { name: 'Asia/Tokyo' },
    'clock-sydney': { name: 'Australia/Sydney' },
    'clock-singapore': { name: 'Asia/Singapore' },
    'clock-la': { name: 'America/Los_Angeles' },
    'clock-toronto': { name: 'America/Toronto' },
    'clock-mexico': { name: 'America/Mexico_City' },
    'clock-hongkong': { name: 'Asia/Hong_Kong' },
    'clock-mumbai': { name: 'Asia/Kolkata' }
};

function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function updateClocks() {
    const now = new Date();

    // Update each time zone clock
    Object.entries(timeZones).forEach(([clockId, { name }]) => {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: name,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        const timeString = formatter.format(now);
        const clockElement = document.getElementById(clockId);
        if (clockElement) {
            clockElement.textContent = timeString;
        }
    });

    // Update local time
    const localClockElement = document.getElementById('clock-local');
    if (localClockElement) {
        localClockElement.textContent = formatTime(now);
    }

    // Update date display
    const dateElement = document.getElementById('date-display');
    if (dateElement) {
        dateElement.textContent = formatDate(now);
    }
}

// Update clocks immediately on load
updateClocks();

// Update clocks every second
setInterval(updateClocks, 1000);
