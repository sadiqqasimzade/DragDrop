
let fruits = document.querySelectorAll(".fruit");
let vegs = document.querySelectorAll(".veg");



fruits.forEach(fruit => {
    fruit.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("itemId", this.id);
    })
})

vegs.forEach(veg => {
    veg.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("itemId", this.id);
    })
})




document.querySelectorAll(".area").forEach(area => {
    area.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
})
document.querySelectorAll(".farea").forEach(area => {
    area.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
})
document.querySelectorAll(".varea").forEach(area => {
    area.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
})





document.querySelectorAll(".area").forEach(area => {
    area.addEventListener("drop", function (e) {
        let data = e.dataTransfer.getData("itemId");
        this.appendChild(document.getElementById(data));
    })
})

document.querySelectorAll(".farea").forEach(area => {
    area.addEventListener("drop", function (e) {
        let data = e.dataTransfer.getData("itemId");
        if (String(data).includes("fruit"))
            this.appendChild(document.getElementById(data));
    })
})

document.querySelectorAll(".varea").forEach(area => {
    area.addEventListener("drop", function (e) {
        let data = e.dataTransfer.getData("itemId");
        if (String(data).includes("veg"))
            this.appendChild(document.getElementById(data));
    })
})
