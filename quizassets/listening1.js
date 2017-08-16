$(document).ready(function() 
{    $("#results").click(function() {                

if (!$("#q1a")[0].checked &&            
!$("#q1b")[0].checked &&            
!$("#q1c")[0].checked &&            
!$("#q1d")[0].checked ||            
!$("#q2a")[0].checked &&            
!$("#q2b")[0].checked &&            
!$("#q2c")[0].checked &&            
!$("#q2d")[0].checked ||            
!$("#q3a")[0].checked &&            
!$("#q3b")[0].checked && 
!$("#q3c")[0].checked &&
!$("#q3d")[0].checked ||
!$("#q4a")[0].checked &&
!$("#q4b")[0].checked &&
!$("#q4c")[0].checked &&
!$("#q4d")[0].checked ||
!$("#q5a")[0].checked &&
!$("#q5b")[0].checked &&
!$("#q5c")[0].checked && 
!$("#q5d")[0].checked       
) {            
alert("You're not done yet!");        
}        

else {            
var cat1name = "1";            
var cat2name = "2";            
var cat3name = "3";            
var cat4name = "4";            
var cat5name = "5";                       
var cat11name = "None";            
            

var cat1 = ($("#q1").val() != "a"); 
           
var cat2 = ($("#q2").val() != "b");  

var cat3 = ($("#q3").val() != "c");  

var cat4 = ($("#q4").val() != "d");  

var cat5 = ($("#q5").val() != "a"); 

var cat11 = (!cat1 && !cat2 && !cat3 && !cat4 && !cat5); var categories = [];                        

if (cat1) { categories.push(cat1name) };            
if (cat2) { categories.push(cat2name) };            
if (cat3) { categories.push(cat3name) };            
if (cat4) { categories.push(cat4name) };            
if (cat5) { categories.push(cat5name) };                
if (cat11) { categories.push(cat11name) };                        

var catStr = 'You answered the following questions incorrectly: ' + categories.join(', ') + '';                     
$("#categorylist").text(catStr);                        
$("#categorylist").show("slow");            

if (cat1) { $("#category1").show("slow"); };            
if (cat2) { $("#category2").show("slow"); };            
if (cat3) { $("#category3").show("slow"); };            
if (cat4) { $("#category4").show("slow"); };            
if (cat5) { $("#category5").show("slow"); };                       
if (cat11) { $("#category11").show("slow"); };
{ $("#closing").show("slow"); };
}
    });});