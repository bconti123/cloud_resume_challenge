/*
const countEl = 
document.getElementById('count');

updateVisitCount();

function updateVisitCount() {

    fetch('https://qomxeq0shi.execute-api.us-west-1.amazonaws.com/test')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        });
}
*/
/* XML HTTP Request
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://qomxeq0shi.execute-api.us-west-1.amazonaws.com/test', true);

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            document.getElementById("count").innerHTML = '&nbsp;&nbsp;' + xhr.responseText + ' views&nbsp;&nbsp;';

        }
    }
};

xhr.send(null);
*/
var count = 5;