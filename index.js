'use strict';

//> ipc for renderer process
let ipcRenderer = require('electron').ipcRenderer;

//> Ask button
let AskBtn = document.querySelector('#Ask');

AskBtn.addEventListener('click', () => {
    //> send a message to close-main-window channel without args
    ipcRenderer.send('close-main-window');
});



function StartCatchVoice() {
    　var Today=new Date();
    　alert("今天日期是 " + Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日");
    }