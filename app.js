result_p = document.createElement('p');

calculate_b = ( number, number_copy, base ) => {

    for ( number; number >= base; number /= base ){ 

        division_arr = new Array();

        div_number = number; // num after division
        division_arr.push(div_number); // div_number is pushed to the division array

     }



     result_arr = new Array(); // new array which should store the reminders

     for ( number_copy; number_copy >= base; number_copy /= base ) {

        reminder = parseInt(number_copy % base); 
        result_arr.push(reminder); // each reminder should be added to the array

     }

     last_div_num = parseInt(division_arr.slice(-1).pop()); // getting the last element of the division array -- it'll be the first element of the result array
     result_arr.push(last_div_num);


     final_result_arr = new Array();
     final_result_arr = result_arr.reverse(); // primul cat + resturile in ordine inversa

     console.log(final_result_arr.join('')); 


}

$( "#submit-btn" ).click( function ( event ) {
    event.preventDefault();

    number = parseInt($("#number").val());
    number_copy = number;
    base = parseInt($("#base").val());

    if ( isNaN( number ) || isNaN( base ) ) {

        result_p.textContent = "Te rog introdu un numar.";

    } else if ( base >= 10 ) {

        result_p.textContent = "Te rog introdu o baza mai mica decat 10.";

    } else {

        result = calculate_b ( number, number_copy, base );
        result_p.textContent = "b = " + final_result_arr.join(''); // cifrele fara altceva intre ele
          
    }


    $( "#result" ).html( result_p );

    $("#number").val('');
    $("#base").val('');
});