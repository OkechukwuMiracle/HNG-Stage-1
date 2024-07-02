const currentTime = new Date().toUTCString();

document.getElementById('time-utc').textContent=`Current time (UTC): ${currentTime}`;