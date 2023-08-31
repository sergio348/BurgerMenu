
    let viewport = document.getElementById("slider__viewport").offsetWidth;
    let btnNext = document.getElementById("slider__control-next");
    let btnPrev = document.getElementById("slider__control-prev");
    let slider = document.querySelector("div.slider");
    let viewSliders = document.querySelectorAll(".viewSlide");
    let viewSlide = 0;
     
    viewSliders[0].style.backgroundColor = "red";

    btnNext.addEventListener("click", function () {
        viewSliders[viewSlide].style.backgroundColor = "orange";
        if (viewSlide < 4) { 
            viewSlide++;
        } else {
            viewSlide = 0;
        }
        viewSliders[viewSlide].style.backgroundColor = "red";
        slider.style.left = -viewSlide * viewport + "px";
    });
     
    btnPrev.addEventListener("click", function () {
        viewSliders[viewSlide].style.backgroundColor = "orange";
        if (viewSlide > 0) {
            viewSlide--; 
        } else {
            viewSlide = 4; 
        }
        viewSliders[viewSlide].style.backgroundColor = "red";
        slider.style.left = -viewSlide * viewport + "px";
    });
