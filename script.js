// ==UserScript==
// @name         Hide Promoted job posts Linkedin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.linkedin.com/jobs/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=linkedin.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function hidePromotedJobs() {
        var job_card = document.querySelectorAll(".job-card-container");
        let i = 0;
        console.log(job_card.length);
        while (i < job_card.length) {
            var first_footer_item = job_card[i].querySelector(".job-card-container__footer-item")
            if (first_footer_item.textContent.trim() == "Promoted"){
                job_card[i].style.opacity = 0.2;
            }
            i++;
        }
        console.log(job_card);
        console.log(job_card.length);
    }

    var intervalId = window.setInterval(function(){
        hidePromotedJobs();
    }, 5000);


})();