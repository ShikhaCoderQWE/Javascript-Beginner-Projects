function displayDate(){
	let todaysdate = new Date(); 
    let date = todaysdate.getDate();
    let month = todaysdate.getMonth();
    let year = todaysdate.getFullYear();
	date = formatenumber(date);
    month = formatenumber(month);
	document.getElementById("todaydate").innerText = `${date}/${month}/${year}`;	
}

function formatenumber(num){
	return num < 10 ? `0${num}` : num;
}

function updateClock() {
    let now = new Date(); // Get current date & time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero if number is less than 10
    hours = formatenumber(hours);
    minutes = formatenumber(minutes);
    seconds = formatenumber(seconds);
 
	
    // Update the clock display
	let strTemplate = `${hours}:${minutes}:${seconds} PM`;
	if(hours >= 12){
		let temp = hours - 12;
		hours = formatenumber(hours);
		document.getElementById("clock").innerText = strTemplate;
	}
	else{
		document.getElementById("clock").innerText = strTemplate;
	}
	//Changing Background-color
	let colorcodes = ["#ffdae9", "#cdeffd", "#e6e6fa", "#ffd1dc", "#d4f5e9", "linear-gradient(to right, #ffdde1, #ee9ca7)", "linear-gradient(to right, #d4fc79, #96e6a1)", "linear-gradient(to right, #fbc2eb, #a6c1ee)", "linear-gradient(to right, #f6d365, #fda085)", "#fff7d6", "#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff"];
	let randomIndex = Math.floor(Math.random() * colorcodes.length);
    document.body.style.background = colorcodes[randomIndex];
}


// Update clock every second
setInterval(updateClock, 1000);

// Initialize the Date and clock immediately
displayDate();
updateClock();

	
