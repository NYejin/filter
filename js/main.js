$(function(){
    // category

    var $btn = $("nav a")
    var $article = $("article")

    /* $btn.click(function(){
        $btn.removeClass("on")
        $article.hide()
        return false;
    })
    
    $("a.all").click(function(){
        $(this).addClass("on")
        $article.show()
    })
    $("a.wild").click(function(){
        $(this).addClass("on")
        $(".wild").show()
    })
    $("a.fish").click(function(){
        $(this).addClass("on")
        $(".fish").show()
    })
    $("a.mammals").click(function(){
        $(this).addClass("on")
        $(".mammals").show()
    })
    $("a.pet").click(function(){
        $(this).addClass("on")
        $(".pet").show()
    })
    $("a.bird").click(function(){
        $(this).addClass("on")
        $(".bird").show()
    }) */

    var className;
    $btn.click(function(){
        className = $(this).attr("class")
        $article.hide()
        $('.' + className).fadeIn()

        $btn.removeClass("on")
        $(this).addClass("on")
    })
})




// isotope
var elem = document.querySelector('.masonry section ul');
var iso = new Isotope( elem, {
  // options
    itemSelector: '.masonry section li',
    // layoutMode: 'fitRows'
});

// element argument can be a selector string
//   for an individual element
var iso = new Isotope( '.masonry section ul', {
  // options
});


// filtering
const btns = document.querySelectorAll('.masonry nav li a')

for(let btn of btns){
    btn.addEventListener("click", function(e){
        e.preventDefault()

        for(let btn of btns){
            btn.classList.remove("on")
        }
        this.classList.add("on")
        const filterName = this.getAttribute("href")
        
        iso.arrange({filter: filterName})
    })
}



// popup
const items = document.querySelectorAll(".masonry section li")
const pop = document.querySelector(".popup")

for(const item of items){
    item.addEventListener("click", function(){
        pop.classList.add("on")

        const imgSrc = this.querySelector("img").getAttribute("src")
        const tit = this.querySelector(".title").innerText;
        const desc = this.querySelector(".textWrap p:last-child").innerText;
        console.log(desc)

        pop.querySelector("img").setAttribute("src", imgSrc);
        pop.querySelector('.title').innerText = tit;
        // pop.querySelector(".textWrap p:last-child").innerText = desc;
    })
}

pop.addEventListener("click",function(){
    pop.classList.remove("on")
})