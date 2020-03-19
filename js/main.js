//show Fare_details separate

function ShowHideDiv(cal) {
  var cal2 = document.getElementById("Fare_details");
  cal2.style.display = cal.value == "Calculate" ? "block" : "none";
}

var btn = $('#button');

$(window).scroll(function() {
if ($(window).scrollTop() > 800) {
btn.addClass('show');
} else {
btn.removeClass('show');
}
});

btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});


//text copy
function copyText() { 
  var copyGfGText = document.getElementById("copyId"); 
  copyGfGText.select(); 
  document.execCommand("copy"); 
  alert("Copied the text: " + copyGfGText.value); 
}  

//table search
function myFunctionT() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


//form disable

function myFunction() {
          document.getElementById("Trip").disabled = true;
          document.getElementById("getTrip").disabled = true;  
          document.getElementById("myText").disabled = true;
           document.getElementById("myText1").disabled = true;
           document.getElementById("myText2").disabled = true;
           document.getElementById("myText3").disabled = true;
           document.getElementById("myText4").disabled = true;
           document.getElementById("myText5").disabled = true;
           document.getElementById("myText6").disabled = true;
           document.getElementById("myText7").disabled = true;
           document.getElementById("myText8").disabled = true;
           document.getElementById("myText9").disabled = true;
           document.getElementById("btnok").disabled = true;

//enable forms
         
        }
        function myFunctionr() {
          document.getElementById("Trip").disabled = false;
          document.getElementById("getTrip").disabled = false;  
          document.getElementById("myText").disabled = false;
          document.getElementById("myText1").disabled = false;
          document.getElementById("myText2").disabled = false;
          document.getElementById("myText3").disabled = false;
          document.getElementById("myText4").disabled = false;
           document.getElementById("myText5").disabled = false;
           document.getElementById("myText6").disabled = false;
           document.getElementById("myText7").disabled = false;
           document.getElementById("myText8").disabled = false;
           document.getElementById("myText9").disabled = false;
           document.getElementById("btnok").disabled = false;
           return false;
        
        }

           //table search
           $(document).ready(function(){  
            $('#search').keyup(function(){  
                 search_table($(this).val());  
            });  
            function search_table(value){  
                 $('#employee_table tr').each(function(){  
                      var found = 'false';  
                      $(this).each(function(){  
                           if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)  
                           {  
                                found = 'true';  
                           }  
                      });  
                      if(found == 'true')  
                      {  
                           $(this).show();  
                      }  
                      else  
                      {  
                           $(this).hide();  
                      }  
                 });  
            }  
       });  
             

        