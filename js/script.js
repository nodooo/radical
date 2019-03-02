




document.getElementById("header12").style.width=window.innerWidth;




document.getElementById("submit").addEventListener('click',function(){
    document.getElementById("error-appear").innerHTML='<div class="error-content">One or more fields have an error. Please check and try again.</div>';
    document.getElementById("appear-name").innerHTML='<span class="field-submit">The field is required.</span>';
    document.getElementById("appear-email").innerHTML='<span class="field-submit">The field is required.</span>';
    document.getElementById("appear-number").innerHTML='<span class="field-submit">The field is required.</span>';
    document.getElementById("appear-about").innerHTML='<span class="field-submitt">The field is required.</span>';
    document.getElementById("name").style.borderBottom="1px solid #e33a3a";
    document.getElementById("email-address").style.borderBottom="1px solid #e33a3a";
    document.getElementById("phone-number").style.borderBottom="1px solid #e33a3a";
    document.getElementById("about").style.borderBottom="1px solid #e33a3a";
    
})


document.getElementById("questionLink").addEventListener('click',function(e){
    e.preventDefault();
document.getElementById("questionButton").remove();
document.getElementById("submit").remove();
document.getElementById("appear").innerHTML='<div class="more-info"><div class="input-one"><h4>Timeframe<span>(approximate)</span></h4><div class="form-timeframe"><form action="action.php"><label for="time-frame"> </label><input type="text" name="timeframe" class="timeframe" id="time-frame" value="" size="40"><i class="far fa-calendar wow pulse"></i></form></div></div><div class="input-second"><h4>Budget<span>(approximate)</span></h4><div class="form-timeframe"><form action="action.php"><label for="udget"></label><input type="text" class="budget" name="budget" id="Budget" value="" size="40"><i class="fas fa-pound-sign wow pulse"></i></form></div></div></div><div class="input-three"><h4>How did you find out about us?</h4><form action="action.php"><div class="form-timefree"><div class="timefree"><div class="field"><input type="checkbox" name="Google" id="google" value="" size="40"><label for="google"><span class="space-label">Google</span></label></div><div class="field"><input type="checkbox" name="LinkedIn" id="linkedIn" value="" size="40"><label for="linkedIn"><span class="space-label">LinkedIn</span></label></div><div class="field"><input type="checkbox" name="Recommendation" id="recommendation" value="" size="40"><label for="recommendation"><span class="space-label">Recommendation</span></label></div></div><div class="timefree"><div class="field"><input type="checkbox" name="Bing" id="bing" value="" size="40"><label for="bing"><span class="space-label">Bing</span></label></div><div class="field"><input type="checkbox" name="Magazine" id="magazine" value="" size="40"><label for="magazine"><span class="space-label">Magazine</span></label></div><div class="field"><input type="checkbox" name="Other" class="check" id="other" value="" size="40"><label for="other"><span class="space-label">Other</span></label></div></div><div class="timefree-last"><div class="field"><input type="checkbox" name="Facebook" id="facebook" value="" size="40"><label for="facebook"><span class="space-label">Facebook</span></label></div><div class="field"><input type="checkbox" name="Radio" id="radio" value="" size="40"><label for="radio"><span class="space-label">Radio</span></label></div></div></div></form></div><div class="submit" id="submit2"><button>Submit<i class="fas fa-arrow-right"></i></button></div>';

document.getElementById("submit2").addEventListener('click',function(){
    document.getElementById("error-appear").innerHTML='<div class="error-content">One or more fields have an error. Please check and try again.</div>';
    document.getElementById("appear-name").innerHTML='<span class="field-submit">The field is required.</span>';
    document.getElementById("appear-email").innerHTML='<span class="field-submit">The field is required.</span>';
    document.getElementById("appear-number").innerHTML='<span class="field-submit">The field is required.</span>';
    document.getElementById("appear-about").innerHTML='<span class="field-submitt">The field is required.</span>';
    document.getElementById("name").style.borderBottom="1px solid #e33a3a";
    document.getElementById("email-address").style.borderBottom="1px solid #e33a3a";
    document.getElementById("phone-number").style.borderBottom="1px solid #e33a3a";
    document.getElementById("about").style.borderBottom="1px solid #e33a3a";
    
})
})















