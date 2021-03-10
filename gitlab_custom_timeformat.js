// ==UserScript==
// @name        GitLab Custom Timeformat
// @match       http://192.168.110.149/*
// ==/UserScript==

const replaceTime = function() {
    document.querySelectorAll('time.js-timeago').forEach((timeTag) => {
        if (timeTag.nextSibling.textContent == '\n') {
            const timeStr = timeTag.getAttribute('datetime').replace('T', ' ').replace('Z', '');
            timeTag.nextSibling.textContent = ' (' + timeStr + ')';
        }
    });
};

window.addEventListener('load', replaceTime);

const observer = new MutationObserver((mutationsList, observer) => replaceTime());
const targetNode = document.getElementsByClassName('content_list')[0];
const config = { attributes: false, childList: true, subtree: false };
observer.observe(targetNode, config);
