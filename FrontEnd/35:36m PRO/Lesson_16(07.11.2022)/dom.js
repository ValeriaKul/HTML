// addEventListener ('event', showThisAndEventTarget)

function showThisAndEventTarget(event) {
    console.log(this);
    console.log(event.target);
}