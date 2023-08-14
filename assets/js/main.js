let year = document.querySelector("span.year"),
 months = document.querySelector("span.months"),
 days = document.querySelector("span.days"),
 input_day = document.querySelector(".calculator_app .header div.day input"),
 input_month = document.querySelector(".calculator_app .header div.month input"),
 input_year  = document.querySelector(".calculator_app .header div.year input"),
 calculatorBtn  = document.querySelector("#calculator_btn"),
 day_span  = document.querySelector(".calculator_app .header .day span"),
 month_span  = document.querySelector(".calculator_app .header .month span"),
 year_span  = document.querySelector(".calculator_app .header .year span"),
 day_alert = document.querySelector("i.day_alert")
 month_alert = document.querySelector("i.month_alert")
 year_alert = document.querySelector("i.year_alert")
 let d =new Date()
 let date, 
number_of_days,
  check_day = false
  ,check_month = false
  ,check_year = false
 calculatorBtn.addEventListener("click" , _=>{
    checkedData()
    
    if(!check_day && !check_month && !check_year){
        date= collect_data()
        calculator_days()
    }
  
     
    })
window.addEventListener("keydown", e=>{
     
    if(e.key == "Enter" ){
        if(!checkedData()){
            date= collect_data()
            calculator_days()
        }
     }
   
})
    // TO CALCULATION THE DAYS  
    function calculator_days(){
        let i = 0
        number_of_days =0
        let arr =[]
        let number_of_months = d.getMonth()
            let n =12 - Number(date.months)
            number_of_months =number_of_months + n 
            for (let index = +date.year; index <= d.getFullYear(); index++) {
                arr.push(index)
                }
if(arr.length == 1){
for (let index =  +input_month.value; index <= d.getMonth(); index++) {
    if(index == 1){
        number_of_days += 31
    }if(index == 2){
        if(Number(d.getFullYear())%4 == 0 || Number(d.getFullYear())%400 == 0){

            number_of_days += 29
        }
        else{
            number_of_days += 28
        }
        }
        if(index == 3){
            number_of_days += 31
        }
        if(index == 4){
            number_of_days += 30
        }
        if(index == 5){
            number_of_days += 31
        }
        if(index == 6){
            number_of_days += 30
        }
        if(index == 7){
            number_of_days += 31
        }
        if(index == 8){
            number_of_days += 30
        }
        if(index == 9){
            number_of_days += 31
        }
        if(index ==10){
            number_of_days += 30
        }
        if(index == 11){
            number_of_days += 31
        }
        if(index == 12){
            number_of_days += 31
        } 

    
}
console.log(number_of_days);
number_of_days = number_of_days- +input_day.value
number_of_days = number_of_days+ d.getDate()
calculation_date()
return ;
}else {
    
    for (let index =  0; index < arr.length; index++) {
        if(index == 0 ){
          for (let index = +input_month.value; index < 13; index++) {
                if(index == 1){
                    number_of_days += 31
                }if(index == 2){
                    if(Number(d.getFullYear())%4 == 0 || Number(d.getFullYear())%400 == 0){
            
                        number_of_days += 29
                    }
                    else{
                        number_of_days += 28
                    }
                    }
                    if(index == 3){
                        number_of_days += 31
                    }
                    if(index == 4){
                        number_of_days += 30
                    }
                    if(index == 5){
                        number_of_days += 31
                    }
                    if(index == 6){
                        number_of_days += 30
                    }
                    if(index == 7){
                        number_of_days += 31
                    }
                    if(index == 8){
                        number_of_days += 30
                    }
                    if(index == 9){
                        number_of_days += 31
                    }
                    if(index ==10){
                        number_of_days += 30
                    }
                    if(index == 11){
                        number_of_days += 31
                    }
                    if(index == 12){
                        number_of_days += 31
                    }
    
                
                } 

                number_of_days -= Number(input_day.value)
        }
        
        else if(index ==arr.length-1){
            for (let index = 1; index <= (d.getMonth()) ; index++) {
                if(index == 1){
                    number_of_days += 31
                }if(index == 2){
                    if(Number(d.getFullYear())%4 == 0 || Number(d.getFullYear())%400 == 0){
            
                        number_of_days += 29
                    }
                    else{
                        number_of_days += 28
                    }
                    }
                    if(index == 3){
                        number_of_days += 31
                    }
                    if(index == 4){
                        number_of_days += 30
                    }
                    if(index == 5){
                        number_of_days += 31
                    }
                    if(index == 6){
                        number_of_days += 30
                    }
                    if(index == 7){
                        number_of_days += 31
                    }
                    if(index == 8){
                        number_of_days += 30
                    }
                    if(index == 9){
                        number_of_days += 31
                    }
                    if(index ==10){
                        number_of_days += 30
                    }
                    if(index == 11){
                        number_of_days += 31
                    }
                    if(index == 12){
                        number_of_days += 31
                    }
    }

    number_of_days +=d.getDate()
        }
        else{
            for (let index = 1; index < 13 ; index++) {
                console.log(index);
                if(index == 1){
                    number_of_days += 31
                }if(index == 2){
                    if(Number(d.getFullYear())%4 == 0 || Number(d.getFullYear())%400 == 0){
            
                        number_of_days += 29
                    }
                    else{
                        number_of_days += 28
                    }
                    }
                    if(index == 3){
                        number_of_days += 31
                    }
                    if(index == 4){
                        number_of_days += 30
                    }
                    if(index == 5){
                        number_of_days += 31
                    }
                    if(index == 6){
                        number_of_days += 30
                    }
                    if(index == 7){
                        number_of_days += 31
                    }
                    if(index == 8){
                        number_of_days += 30
                    }
                    if(index == 9){
                        number_of_days += 31
                    }
                    if(index ==10){
                        number_of_days += 30
                    }
                    if(index == 11){
                        number_of_days += 31
                    }
                    if(index == 12){
                        number_of_days += 31
                    }
    }
        }
        
        
    }
    calculation_date()
    console.log(number_of_days);
}
        
            
            
        
        
        
        }            


// TO CALCULATION THE DATE    
 function calculation_date(){
    year.innerText=parseInt(number_of_days /365)
    let reminder_day= number_of_days -parseInt(number_of_days /365) * 365 
    months.innerText=parseInt(reminder_day /30)
    reminder_day = reminder_day - parseInt(reminder_day /30) *30 
    days.innerText=parseInt(reminder_day)
}
//  TO COLLECT ALL DATA 
 function collect_data(){
   let date= {} 
   date.day = input_day.value
   date.months = input_month.value
   date.year = input_year.value
   return date
 }

function checkedData(){
   let current_month = input_month.value
    let true_day = false
    let correct_obj = {
"1":31,
"2":28,
"3":31,
"4":30,
"5":31,
"6":30,
"7":31,
"8":30,
"9":31,
"10":30,
"11":31,
"12":31,
    }
    if(input_day.value){
       
        if(+input_month.value == "2"){
            true_day= !isLeapYear()
        }
        else {
            if(correct_obj[current_month] >= +input_day.value){
                true_day=true
            }
        }
                  
                  if(!true_day){
                    day_alert.innerText="Must be  a valid day"
                    day_alert.classList.remove("d-none")
                    input_day.classList.add("alert_input")
                    day_span.classList.add("alert_color")
                    check_day = true
                  }
                  else{
                    day_alert.classList.add("d-none")
                    input_day.classList.remove("alert_input")
                    day_span.classList.remove("alert_color")
                    check_day = false
                  }
        
    }
    
    if(input_month.value >12){
        month_alert.innerText="Must be  a valid month"
        month_alert.classList.remove("d-none")
        input_month.classList.add("alert_input")
        month_span.classList.add("alert_color")
        check_month = true
    }
    else{
        check_month = false
        input_month.classList.remove("alert_input")
        month_alert.classList.add("d-none")
        month_span.classList.remove("alert_color")

    }
    if(input_year.value > d.getFullYear()){
        year_alert.innerText="Must be  a valid year"
        year_alert.classList.remove("d-none")
        input_year.classList.add("alert_input")
        year_span.classList.add("alert_color")
        check_year = true
    }
    else{
        year_alert.classList.add("d-none")
        input_year.classList.remove("alert_input")
        year_span.classList.remove("alert_color")
        check_year = false
    }
    if(!input_day.value){
        day_alert.innerText="The field is required"
        day_alert.classList.remove("d-none")
        input_day.classList.add("alert_input")
        day_span.classList.add("alert_color")
        check_day = true
    }
    if(!input_month.value){
        month_alert.innerText="The field is required"
        month_alert.classList.remove("d-none")
        input_month.classList.add("alert_input")
        month_span.classList.add("alert_color")
        check_month = true
    }
    if(!input_year.value){
        year_alert.innerText="The field is required"
        year_alert.classList.remove("d-none")
        input_year.classList.add("alert_input")
        year_span.classList.add("alert_color")
        check_year = true
    }
}
function isLeapYear() {
    if( +input_year.value%4 == 0 || +input_year.value%100==0){
        if(29 >= +input_day.value){
            return false
        }
        else {
            return true
        }
    }else {
        if(28 >= +input_day.value){
            return false
        }
        else {
            return true
        }
    }
}