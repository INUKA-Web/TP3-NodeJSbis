/*** SPA ***/
function show(hash) {
    $('.active').removeClass('active').addClass('inactive');
    $(hash).removeClass('inactive').addClass('active');
}

/*** AJAX ***/
function disBonjour() {
    const data = {
        personne: document.getElementById("personne").value
    };
    fetch('/disbonjour-json', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(json => document.getElementById("result").innerHTML = json.message);
}

function getTime() {
    fetch('/time')
    .then(res => res.json())
    .then(json => document.getElementById("heure").innerHTML = json.time)
}