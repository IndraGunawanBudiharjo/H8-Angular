// 'use strict';

// // ambil "Page title" dengan menggunakna getElementById
// // document.getElementById
// let pageTitleElement = document.getElementById('title');
// console.log(pageTitleElement.innerHTML);

// // document.getElementsByClassName
// let pageBoxElements = document.getElementsByClassName('page-box');

// for(let i = 0; i < pageBoxElements.length; i++) {
//     const pageBox = pageBoxElements[i];
//     console.log(pageBox.innerHTML);
// }

$(document).ready(function () {

    // console.log('#title');
    // console.log('.page-box');

    // $('#title').click(function () {
    //     alert("Saya klik Page Title");
    // })

    // $('#submitButton').click(function (e) {
    //     e.preventDefault();
    //     let username = $("#username").val();
    //     alert("Halo " + username);
    // })

    $('.page-box:first').addClass('btn-danger');
    // console.log($('.page-box:first')) 

    

});