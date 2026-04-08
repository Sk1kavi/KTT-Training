const container = document.querySelector(".laptops");
function displayLaptops(laptops) {
    container.innerHTML = "";
    laptops.forEach(laptop => {
        const card=`<div class="laptop-card">
        <img src="${laptop.image}" alt="${laptop.name}">
        <h3>${laptop.name} Laptop</h3>
        <p>Price: ₹${laptop.price}</p>
        <p>RAM: ${laptop.ram} GB</p>
        <p>Battery: ${laptop.battery} hours</p>
        <p>Storage: ${laptop.storage} GB</p>
        <p>Processor: ${laptop.processor}</p>
        <p>Graphics: ${laptop.graphics}</p>
        <p>OS: ${laptop.os}</p>
        <p>Rating: ${laptop.rating}</p>
        <p>Status: ${laptop.status}</p>
        </div>`
        container.innerHTML+=card;
    })
}

window.onload=function() {
    displayLaptops(laptops);
}

document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
    checkbox.addEventListener("change", applyFilters)
});

function getChecked(name){
    const checked=document.querySelectorAll(`input[name="${name}"]:checked`);
    const arr=Array.from(checked);
    return arr.map(checkbox => checkbox.value);
}
function applyFilters() {
    const selectedPrice=getChecked("price");
    const selectedRam=getChecked("ram");
    const selectedBattery=getChecked("battery");
    const selectedBrand=getChecked("brand");
    const selectedProcessor=getChecked("processor");
    const selectedScreen=getChecked("screen");
    const selectedStorage=getChecked("storage");
    const selectedStatus=getChecked("status");
    const selectedGraphics=getChecked("graphics");
    const selectedOs=getChecked("os");
    const selectedRating=getChecked("rating");
    const selectedFeatures=getChecked("features");
    const selectedColor=getChecked("color");

    const filteredLaptops=laptops.filter(laptop =>{
        if(selectedBrand.length > 0 && !selectedBrand.includes(laptop.brand.toLowerCase())){
            return false;
        }
        if(selectedBattery.length > 0 && !selectedBattery.includes(laptop.battery.toString())){
            return false;
        }
         if(selectedStorage.length > 0 && !selectedStorage.includes(laptop.storage.toString())){
            return false;
        }
        if(selectedStatus.length > 0 && !selectedStatus.includes(laptop.status.toLowerCase())){
            return false;
        }
        if(selectedProcessor.length > 0 && !selectedProcessor.some(processor => laptop.processor.toLowerCase().includes(processor))){
            return false;
        }
         if(selectedGraphics.length > 0 && !selectedGraphics.some(graphics => laptop.graphics.toLowerCase().includes(graphics))){
            return false;
        }
         if(selectedColor.length > 0 && !selectedColor.some(color => laptop.color.toLowerCase().includes(color))){
            return false;
        }
         if(selectedOs.length > 0 && !selectedOs.some(os => laptop.os.toLowerCase().includes(os))){
            return false;
        }
       if(selectedFeatures.length > 0 && !selectedFeatures.every(feature => laptop[feature])){
        return false;
       }
       if(selectedPrice.length > 0){
        const match = selectedPrice.some(priceRange =>{
            const [min,max]=priceRange.split('-').map(Number);
            if(laptop.price >= min && laptop.price <= max){
                return true;
            }
        });
        if(!match) {return false};
       }
       if(selectedRating.length > 0){
        const match=selectedRating.some(priceRange =>{
            const [min,max]=priceRange.split('-').map(Number);
            if(laptop.rating >= min && laptop.rating <= max){
                return true;
            }
        });
        if(!match) {return false};
       }
       if(selectedScreen.length > 0){
        const match= selectedScreen.some(priceRange =>{
            const [min,max]=priceRange.split('-').map(Number);
            if(laptop.screen >= min && laptop.screen <= max){
                return true;
            }
        });
        if(!match) {return false};
       }
       if(selectedRam.length > 0){
        const match=selectedRam.some(priceRange =>{
            const [min,max]=priceRange.split('-').map(Number);
            if(laptop.ram >= min && laptop.ram <= max){
                return true;
            }
        });
        if(!match) {return false};

       }
        return true;
    })
    const filters = {
        Price: selectedPrice,
        RAM: selectedRam,
        Battery: selectedBattery,
        Brand: selectedBrand,
        Processor: selectedProcessor,
        Screen: selectedScreen,
        Storage: selectedStorage,
        Status: selectedStatus,
        Graphics: selectedGraphics,
        OS: selectedOs,
        Rating: selectedRating,
        Features: selectedFeatures,
        Color: selectedColor
    };
    displayFilters(filters);
    displayLaptops(filteredLaptops);
}

function displayFilters(filters){
        const container=document.querySelector('.filter-choice');
        container.innerHTML="";
        for (let title in filters){
            const values=filters[title];
            if(values.length>0){
                const card=`<div class="filter-card">
                <strong>${title}</strong>
                <p>${values.join(",")}</p>
                </div>`
                container.innerHTML+=card;
            }
        }
}

document.getElementById("main").addEventListener("reset", function () {
    setTimeout(applyFilters,0);
});