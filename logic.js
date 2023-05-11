const months = [31,28,31,10,31,30,31,31,30,31,30,31];

function ageCalculate(){
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    let birthMonth,birthDate,birthYear;
    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();

    //check for leap year function_call
    leapChecker(currentYear);

    //check for valid input
    if(birthDetails.year > currentYear || 

        (birthDetails.month > currentMonth &&
            birthDetails.year == currentYear) ||

            (birthDetails.date > currentDate && birthDetails.
                month == currentMonth && birthDetails.year == currentYear)
      ){
          alert("Not born yet!");
          displayResult("-","-","-");
          return;
      }

      //calculate an age

      birthYear = currentYear - birthDetails.year;

      if(currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
      }else{
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
      }

      if(currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
      }
      
      else{
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        
        if(birthMonth < 0)
        {
            birthMonth = 11;
            birthYear--;
        }
      

      }
        //console.log(birthYear,birthMonth,birthDate);
        //display the output
        displayResult(birthDate,birthMonth,birthYear);
}//ageCalculate() ends.


//displaying the calculated age
function displayResult(bDate,bMonth,bYear){
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}


//check for leap year function_definition
function leapChecker(year){
    if((year % 4 == 0) || (year % 100 == 0) && (year % 400 == 0)){
        months[1] = 29;
    }else{
        months[1] = 28;
    }

   //console.log(year, months[1]);
}

//implementation of 'reset' button function
let resetButton = document.querySelector(".clear");
resetButton.addEventListener("click", () => {
  document.getElementById("years").textContent = "";
    document.getElementById("months").textContent = "";
    document.getElementById("days").textContent = "";
    document.getElementById("date-input").value = "dd-mm-yyyy";
});