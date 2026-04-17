const domainData=[
    {id : "full-stack" ,name : "Full Stack Development" , img : "full-stack.jpg"},
    {id : "ai" , name : "Artificial Intelligence" , img : "ai.png"},
    {id : "cc" , name : "Cloud Computing" , img : "cloud.png"},
    {id : "mad" , name : "Mobile Application Development" , img : "mobile-app.png"},
    {id : "ds" , name : "Data Science" , img : "data-science.png"},
    {id : "cyber" ,name : "Cyber Security" , img : "security.jpg"},
]

const container=document.querySelector(".domain-list")
function displayDomain(domainData){
    container.innerHTML="";
    domainData.forEach(element => {
        const card=`<div class="domain-card" id=${element.id}>
        <img src=${element.img}>
        <h2>${element.name}</h2>`
        container.innerHTML+=card;
    });
    
}

container.addEventListener("click",(element)=>{
    const card=element.target.closest(".domain-card");
    if(card){
        window.location.href=`${card.id}.html`;
    }
})

const login=document.querySelector("#login-btn");
login.addEventListener("click",()=>{
    window.location.href="login.html";
})

window.onload=function(){
    displayDomain(domainData);
}
