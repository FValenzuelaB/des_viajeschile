const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))



$('#enviado').click(function(){
    alert("Gracias, El mensaje fue enviado correctamente!")
})

$('#cartta1').hover(function(){
    $(this).fadeOut(400)
    $(this).fadeIn(400)
})
$('#cartta2').hover(function(){
    $(this).fadeOut(400)
    $(this).fadeIn(400)
})
$('#cartta3').hover(function(){
    $(this).fadeOut(400)
    $(this).fadeIn(400)
})
$('#cartta4').hover(function(){
    $(this).fadeOut(400)
    $(this).fadeIn(400)
})


$("#github").on("click",function(){
    window.open('https://github.com/','_blank');
})

$("#linkedin").on("click",function(){
    window.open('https://www.linkedin.com/','_blank');
})

$("#twitter").on("click",function(){
    window.open('https://x.com/','_blank');
})

$("#face").on("click",function(){
    window.open('https://www.facebook.com/','_blank');
})