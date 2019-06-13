// Setup
let calendar = document.getElementById("life-calendar");
const year = 71.5;
const numWeeks = (year * 52);
let age = 0;
let delta;

buildCalendar();


// Event trigger.
document.getElementById("birthday-submit").addEventListener("click", function(){
    
    clearCalendar();
    
    let birthdayBar = document.getElementById("birthday-bar");
    
    
    let birthdayRaw = birthdayBar.value;
    
    let month = parseInt(birthdayRaw.substring(0,2)) - 1;
    let day = parseInt(birthdayRaw.substring(3,5));
    let year = parseInt(birthdayRaw.substring(6,10));
    
    
    let birthday = new Date(year, month, day);
    let now = new Date();
    
    delta = now - birthday;
    delta = Math.floor(delta / 604800000) - 1;
    
    console.log({birthday, now, delta});
    
    for(let k = 0; k < delta; k++){
        document.getElementById(k).setAttribute("class", "calendar-day red");
    }
    
    console.log(delta);
    
})

// Clear Calendar of red class.
function clearCalendar(){
    
      for(let i = 0; i < delta; i++){
        document.getElementById(i).setAttribute("class", "calendar-day");
    }
    
    console.log("yee yee yee");
    
}

// Building the calendar.
function buildCalendar(){
    
    for(let i = 0; i < (numWeeks / 22); i++){

        let week = document.createElement("tr");
        week.setAttribute("class", "calendar-set");


        for(let j = 0; j < 22; j++){

            let day = document.createElement("td");

            if( ( (i * 22) + j ) % 52 === 0){
                let test = document.createTextNode(age);
                day.appendChild(test);
                age++;
            }

            day.setAttribute("class", "calendar-day");
            day.setAttribute("id", (i * 22) + j);
            week.appendChild(day);  
        }

        calendar.appendChild(week);

    }

}