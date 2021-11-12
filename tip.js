function tipcalc(){
    var Billamt = document.getElementById("bill_amount").value;
    var service = document.getElementById("services").value;
    var numb_person = document.getElementById("person").value;
    

    // Validate Input
    if(Billamt === "" || service == 0){
        alert("Please Enter Bill Amount Or Select Service Quality");
        return;
    }


    //Check to see if this input is empty or less than or equal to 1
    if(numb_person ==="" || numb_person <= 1)
    {
        numb_person = 1;
        document.getElementById("each").style.display = "none";
    }
    else{
        document.getElementById("each").style.display = "block";
    }

    //Calculating Tip
    var total = (Billamt * service) / numb_person;

    //Rounding Of two decimal place
     total = Math.round(total*100)/100;

    total = total.toFixed(2);
    
    
    //Displaying Tip

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

    //Hiding tip on load
    // document.getElementById("totalTip").style.display = "none";
    // document.getElementById("each").style.display = "none";

    //Click to call Function
    // document.getElementById("calculate").onclick = function(){
    //     tipcalc();
    // }
}