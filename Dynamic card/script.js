function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewStr

    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }

    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName}. ${viewStr} views . ${monthsOld} months ago</p>
    </div>

</div>`

let button = document.querySelector(".btn");

button.addEventListener("click", (event) => {
    let action = document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
});

}

createCard("Introduction to Backend | Sigma Web Dev video #2", "Sneha Dhawale", 560000, 7, "31:22", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5vr10Y8d9lP8Q2TypoxNuRTRSvdCCtBhcPw&usqp=CAU");
