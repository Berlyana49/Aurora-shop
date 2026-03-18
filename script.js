// DICT
flowers = [
    {
        id  : "daisy",
        img : "assets/daisy/1.jpg",
        name : "Tulip 1",
        price : 150000,
        desc : "Tulips 1"
    },
    {
        id  : "daisy",
        img : "assets/daisy/2.jpg",
        name : "Tulip 2",
        price : 120000,
        desc : "Tulips 2"
    },
    {
        id  : "daisy",
        img : "assets/daisy/3.jpg",
        name : "Tulip 3",        
        price : 200000,
        desc : "Tulips 3"
    },
    {
        id  : "daisy",
        img : "assets/daisy/4.jpg",
        name : "Tulip 4",
        price : 250000,
        desc : "Tulips 4"
    },
    
]

flowers.forEach(flower => {
    document.getElementById("flowers-list").innerHTML += `
        <div class="item" id="${flower.id}">
            <img src="${flower.img}" class="portrait">
            <h3>${flower.name}</h3>
            <p>IDR ${flower.price}</p>
            <p>${flower.desc}</p>
        </div>
    `
});