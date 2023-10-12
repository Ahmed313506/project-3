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

// const returnHomeButton = document.querySelector(".Name2");

document.querySelector(".Name").addEventListener("click", function () {
    location.reload();
 
});


// document.querySelector(".Name").addEventListener("mouseover", function () {
//     // location.reload();
//     this.style.backgroundColor="whitesmoke";
// });

// document.querySelector(".Name").addEventListener("mouseout", function () {
//     this.style.backgroundColor="white";
// });

const dropdowns= document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu2 = dropdown.querySelector('.menu2');
    const options = dropdown.querySelectorAll('.menu2 li');
    const selected = dropdown.querySelector('.selected');

    // Add event listeners or perform actions with the selected elements
    select.addEventListener('mouseover', () => {
        // Perform an action when the se lect element is clicked.
        select.classList.add('select-clicked');
        caret.classList.add('caret-rotate');
        menu2.classList.add('menu2-open');

    });

   




    // Add event listeners or perform actions with other elements if needed.
    options.forEach(option => {
        option.addEventListener('click', () => {
            // selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu2.classList.remove('menu2-open');
            
            // Inside this block, you want to remove the 'active' class from other options, so it should be here
            options.forEach(option => {
                option.classList.remove('active');
            });
         
        });
        option.classList.add('active');
        $(document).click(function () { 
            $('.select').removeClass('select-clicked');
            $('.caret').removeClass('caret-rotate');
            $('.menu2').removeClass('menu2-open');
        });
    });
});

