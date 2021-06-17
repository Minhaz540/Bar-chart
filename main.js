function barChart() {
    var bars = document.querySelectorAll(".bars div");
    var inputs = document.querySelectorAll("input");
    for(var i=0; i<bars.length; i++) {
        if (inputs[i].value == "" || inputs[i].value < 0) {
            bars[i].style.height = 0;
        }
        else if (inputs[i].value >  35) {
            bars[i].style.height = "300px";
        }
        else {
            bars[i].style.height = ((inputs[i].value)*8.58) +"px";
        }
    }
}