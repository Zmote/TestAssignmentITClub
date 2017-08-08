/**
 * Created by Zmote on 08.08.2017.
 */
var flagContainer = document.getElementById("flagContainer");

flagContainer.addEventListener("click", function(){
    if(flagContainer.classList.contains("ch_flag")){
        flagContainer.classList.remove("ch_flag");
        flagContainer.classList.add("tr_flag");
    }else{
        flagContainer.classList.remove("tr_flag");
        flagContainer.classList.add("ch_flag");
    }
});