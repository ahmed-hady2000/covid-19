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
        aaa.style.background="#ebebeb"; 


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





