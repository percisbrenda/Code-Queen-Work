/*let result=input;
if(result>=80&&===100){
    grade='A'
}elseif(result <=79&&>=70){
    grade='B'
}elseif (result>=69&&<=60) {
    grade="C"
} elseif (result>=55&&<60){
    grade="D"

} elseif(result<55&&>=49)  {
    grade="E"
}elseif(result>=40&&<44){
    grade="O"
}elseif(result<40&&>=0){
    grade="F"
}else{"invalid result"}*/
$(".remove").click(function(){
    $("input-score").val("");
    $(".display").text("");
});


let result = $(".inputResult").val();
let grade;
$(".input").click(function () {
    if (result >= 90 && result <= 100 ) {
        grade = "A"
        $(".display").text(`Grade ${grade}.`);
    } else if (result >= 80 && result <= 89 ) {
        grade = "B"
        $(".display").text(`Grade ${grade}.`);
    } else if (result >= 70 && result <= 79 ) {
        grade = "C"
        $(".display").text(`Grade ${grade}.`);
    } else if (result >= 60 && result <= 69 ) {
        grade = "D"
        $(".display").text(`Grade ${grade}.`);
    } else if (result >= 50 && result <= 59 ) {
        $(".display").text(`Grade E.`);
    } else if (result >= 0 && result <= 49 ) {
        $(".display").text('Grade F');
    } else {
        $(".display").text("Invalid input");
    }
});
    

    

