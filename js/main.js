let btn = document.getElementById('dark');
let div = document.getElementById('bt');
let nav = document.getElementById('aa');
let lists = document.getElementById('list');
let faqs = document.getElementById('faq');
let aaa = document.getElementById('aa');

let them = () => {
    if(btn.textContent == "light"){
        div.style.background = "#eee";
        div.style.color ="black";
        btn.textContent ="dark";
        btn.classList="btn btn-dark";
        nav.style.background ="balck";
        lists.style.color="#00000080";
        faqs.style.color="#262930";
        aaa.style.background="#ebebebc2"; 


    } else {
        div.style.background = "#111";
        div.style.color ="white";
        btn.textContent ="light";
        btn.classList="btn btn-light";
        nav.style.background ="whiht";
        lists.style.color="white";
        faqs.style.color="white";
        aaa.style.background="black"

    }

}
btn.addEventListener('click',them);

$('.color-faq').click(function() {
    $('.color-faq').removeClass('active');
    $(this).addClass('active');
});
$('.faq-text .item').first().show();
$('.color-faq').click(function(){
    let indexofColorfaq = $(this).index();
    $('.faq-text .item').hide();
    $('.faq-text .item').eq(indexofColorfaq).show();
});




$('.color-faq').click(function() {
    $('.color-faq').removeClass('active');
    $(this).addClass('active');
});
$('.faq-text .item').first().show();
$('.color-faq').click(function(){
    let indexofColorfaq = $(this).index();
    $('.faq-text .item').hide();
    $('.faq-text .item').eq(indexofColorfaq).show();
});




// faq test-1

$('.click1').click(function(){
    $('.faq-text ul li.click1').toggleClass('style-li');
    $('.faq-text ul li.click1 .icon-minus').toggle();
    $('.faq-text ul li.click1 .icon-plus').toggle();
    $('.faq-text ul li.click1 + .ul-text').slideToggle();
});
$('.click2').click(function(){
    $('.faq-text ul li.click2').toggleClass('style-li');
    $('.faq-text ul li.click2 .icon-minus').toggle();
    $('.faq-text ul li.click2 .icon-plus').toggle();
    $('.faq-text ul li.click2 + .ul-text').slideToggle();
});    
$('.click3').click(function(){
    $('.faq-text ul li.click3').toggleClass('style-li');
    $('.faq-text ul li.click3 .icon-minus').toggle();
    $('.faq-text ul li.click3 .icon-plus').toggle();
    $('.faq-text ul li.click3 + .ul-text').slideToggle();
});
$('.click4').click(function(){
    $('.faq-text ul li.click4').toggleClass('style-li');
    $('.faq-text ul li.click4 .icon-minus').toggle();
    $('.faq-text ul li.click4 .icon-plus').toggle();
    $('.faq-text ul li.click4 + .ul-text').slideToggle();
});
$('.click5').click(function(){
    $('.faq-text ul li.click5').toggleClass('style-li');
    $('.faq-text ul li.click5 .icon-minus').toggle();
    $('.faq-text ul li.click5 .icon-plus').toggle();
    $('.faq-text ul li.click5 + .ul-text').slideToggle();
});
$('.click6').click(function(){
    $('.faq-text ul li.click6').toggleClass('style-li');
    $('.faq-text ul li.click6 .icon-minus').toggle();
    $('.faq-text ul li.click6 .icon-plus').toggle();
    $('.faq-text ul li.click6 + .ul-text').slideToggle();
});




