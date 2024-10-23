function time(){
    const time = new Date();
    const hours = time.getHours().toString().padStart(2,0);
    const minutes = time.getMinutes().toString().padStart(2,0);
    const seconds = time.getSeconds().toString().padStart(2,0);
    const stringTime = `${hours}:${minutes}:${seconds}`;
    const displayTime = document.getElementById("clock").textContent = stringTime
 }
 
 time()
 
 setInterval(time, 1000)