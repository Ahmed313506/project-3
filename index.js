// $(".news").click(function(){
// $("body").css("color","red");   
// })
// document.addEventListener("click",function () { 
//     document.querySelector(".news").classList("white");
// })
document.querySelectorAll(".news").forEach(function(element) {
    element.addEventListener("mouseover", function() {
        this.classList.add("white");
    });
});
document.querySelectorAll(".news").forEach(function(element) {
    element.addEventListener("mouseout", function() {
        this.classList.remove("white");
    });
});
// alert("hello");
document.querySelector(".readmore").addEventListener("mouseover", function() {
    this.style.backgroundColor = "whitesmoke"; 
    this.style.color = "black"; 
});
document.querySelector(".readmore").addEventListener("mouseout", function() {
    this.style.backgroundColor = "black"; 
    this.style.color = "white"; 
});

document.querySelectorAll(".thirdlist h3").forEach(function(element) {
    element.addEventListener("mouseover", function() {
        this.style.color="orange";
        this.classList.add("text");
    });
});
document.querySelectorAll(".thirdlist h3").forEach(function(element) {
    element.addEventListener("mouseout", function() {
        this.style.color="white";
        this.classList.remove("text");
    });
});



    // $("h3").mouseover(function () { 
    //     $(this).addClass("text");
    // });

    // $("h3").mouseout(function () { 
    //     $(this).removeClass("text");
    // });

    // document.querySelectorAll(".secondlist h3").forEach(function(element) {
    //     element.addEventListener("mouseover", function() {
    //         this.style.color="orange";
    //         this.classList.add("text");
    //     });
    // });
    // document.querySelectorAll(".secondlist h3").forEach(function(element) {
    //     element.addEventListener("mouseout", function() {
    //         this.style.color="black";
    //         this.classList.remove("text");
    //     });
    // });
    

    
    // $(".png6").mouseover(function () { 
    //     // var categories = ['Wirtschaft','Wissenschaft','Politik','Leben','Kultur','Geschichte']
    //     // var option ="";
    //     // for (var i=0; i<categories.length;i++){
    //     //     option+= '<option value="' +month[i] + ' " >' +month[i] +" </option>" 
    //     // }
    //     //     document.getElementById('month').innerHTML=option;
    //         alert("hey");
       
        
    // });
  
    

   $(".secondlist h3").on("mouseover", function() {
    $(this).css("color", "orange");
    $(this).addClass("text");
});


$(".secondlist h3").on("mouseout", function() {
    $(this).css("color", "black");
    $(this).removeClass("text");
});

$(".flex1").on("mouseover", function() {
    $(this).css("color", "orange");
    $(this).addClass("text");
});


$(".flex1").on("mouseout", function() {
    $(this).css("color", "black");
    $(this).removeClass("text");
});
