var btnEat = document.querySelectorAll('.eat-btn');
btnEat.forEach(e => {
    e.addEventListener("click", function (e) {
        e.preventDefault();
        let burger = { id: this.id }

        fetch('api/update', {
            method: 'POST',
            body: JSON.stringify(burger),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json)
            .then(data => location.reload());
    });
});

var btnAdd = document.getElementById("burger-add");
btnAdd.addEventListener("click", function (e) {
    e.preventDefault();
    burgerText = document.getElementById("burger-text").value;
    if (!burgerText)
        return;

    let burger = { name: burgerText }

    fetch('/api/add', {
        method: 'POST',
        body: JSON.stringify(burger),
        headers: {
            'Content-Type': 'application/json'
        },

    }).then(response => response.json())
        .then(data => location.reload());
});