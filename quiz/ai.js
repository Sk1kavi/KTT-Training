const aiList=[
    {id : "landing" , name : "Home" , img : "home.png"},
    {id : "agentic-ai" , name : "Agentic AI" , img : "agentic-ai.jpg"},
    {id : "gen-ai" , name : "Generative AI" , img : "gen-ai.png"},
    {id : "ml" , name : "Machine Learning" , img : "machine-learning.png"},
    {id : "dl" , name : "Deep Learning" , img : "deep-learning.png"},
    {id : "nlp" , name : "Natural Language Processing" , img : "nlp.png"},
    {id : "cv" , name : "Computer Vision" , img : "computer-vision.png"},
]

const container=document.querySelector(".side-bar")
function displaySidebar(aiList){
    container.innerHTML="";
    aiList.forEach(element => {
        const card=`<div class="topic-card">
        <img src=${element.img}>
        <h3>${element.name}</h3>
        </div>`
        container.innerHTML+=card;
    });
}

container.addEventListener("click",(element)=>{
    const card=element.target.closest(".topic-card");
    if(card){
        const audio = new Audio("audio.wav");
        audio.play();
    }
})

window.onload=function(){
    displaySidebar(aiList);
}