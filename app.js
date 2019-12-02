console.log("app.js is running!");
$(".alert").hide();

$(".port-item").click(function() {
    $(".collapse").collapse("hide");
});

$("#contact-form").submit((e)=>{
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var msg = $("#message").val();

    var message = {
        name,
        email,
        msg
    }

    $.ajax({
        url: "message.json",
        type: "JSON",
        method: "GET",
        data: message,
        success: ()=>{
            alert("Success")
        }
    })
    
    console.log(message);
    $("input, textarea").val("");
    $(".alert").fadeIn(3000);
    

})