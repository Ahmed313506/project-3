
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

   $(".secondlist h3").on("mouseover", function() {
    $(this).css("color", "orange");
    $(this).addClass("text");
});


$(".secondlist h3").on("mouseout", function() {
    $(this).css("color", "black");
    $(this).removeClass("text");
});

$("a").on("mouseover", function() {
    $(this).css("color", "orange");
    $(this).addClass("text");
});


$("a").on("mouseout", function() {
    $(this).css("color", "black");
    $(this).removeClass("text");
});


document.querySelector(".Name").addEventListener("click", function () {
    location.href="index.html";
 
});
document.querySelector(".readmore").addEventListener("click", function () {
    location.href="indexarticle1.html";
 
});

const dropdowns= document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu2 = dropdown.querySelector('.menu2');
    const options = dropdown.querySelectorAll('.menu2 li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('mouseover', () => {
      
        select.classList.add('select-clicked');
        caret.classList.add('caret-rotate');
        menu2.classList.add('menu2-open');

    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu2.classList.remove('menu2-open');
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

