!function(){"use strict";document.addEventListener("DOMContentLoaded",(function(){!function(){document.getElementById("main").offsetHeight,window.onscroll=function(){let e=document.getElementById("header");window.pageYOffset>50?e.classList.add("fixed"):e.classList.remove("fixed")},document.querySelectorAll("[data-scroll]").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("data-scroll"),c=document.querySelector(t).offsetTop;document.querySelectorAll("#nav a").forEach((function(e){e.classList.remove("active")})),this.classList.add("active"),window.scrollTo({top:c,behavior:"smooth"})}))}));const e=document.getElementById("nav-toggle"),t=document.getElementById("nav");e.addEventListener("click",(function(e){e.preventDefault(),this.classList.toggle("active"),t.classList.toggle("active")}))}(),document.querySelectorAll(".accordion").forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget,c=t.querySelector(".accordion__control"),o=t.querySelector(".accordion__content");c.classList.toggle("active"),o.classList.toggle("active")}))})),[...document.querySelectorAll("button.btnNext"),...document.querySelectorAll("button.btnPrev")].forEach((function(e){e.addEventListener("click",(function(t){let c=t.target.closest(".slider"),o=c.querySelectorAll(".slide"),n=[...o].indexOf(c.querySelector(".slide.block")),l=n<o.length-1?n+1:n,s=n>0?n-1:n;o[n].classList.remove("block"),e.classList.contains("btnNext")?o[l].classList.add("block"):o[s].classList.add("block")}))}))}))}();