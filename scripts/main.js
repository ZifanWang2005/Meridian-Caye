const myImage = document.getElementById("fishImage");

var imageList = [];
imageList.push(["images/neon-gold-platy.webp", 
    '<div id="fishFacts"><p>This is a neon gold calico platy, a popular aquarium fish. Other varieties of platies include</p><ul><li>Red wag</li><li>High fin</li><li>Dalmatian</li></ul></div>']);
imageList.push(["images/zebra-angelfish.webp", 
    '<div id="fishFacts"><p>This is a zebra angelfish, a popular aquarium fish. Other varieties of angelfish include</p><ul><li>Black Lace</li><li>Marble</li><li>Golden</li></ul></div>']);
imageList.push(["images/zebra-pleco.jpeg", 
    '<div id="fishFacts"><p>This is a zebra pleco (L46), a highly sought-after aquarium fish. Other species of plecos include</p><ul><li>Gold Nugget (L018)</li><li>Royal</li><li>Colombian blue-eyed</li></ul></div>']);
    

myImage.onclick = () => {
    ChangeFish();
};

let index = 0;

function ChangeFish() {
    index += 1;
    if (index == imageList.length) {
        index = 0;
    }
    
    myImage.src = imageList[index][0];
    document.getElementById('fishFacts').innerHTML = imageList[index][1];
};
