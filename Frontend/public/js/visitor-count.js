// DynamoDB ----> Lambda ---- > API Gateway ----> JS
const countEl = document.getElementById('count');

function UpdateCount() {
    fetch('https://fc3srfr1df.execute-api.us-west-1.amazonaws.com/prod/count', {
        mode: "no-cors",
        method: 'GET' 
        })
        .then(response => response.json())
        .then(
            response => { countEl.innerHTML = response.value;
            })
        .catch(error => console.error(error))
}
UpdateCount();

// setInterval(UpdateCount, 5000)