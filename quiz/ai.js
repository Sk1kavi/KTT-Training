let currentQuestions;

const aiList=[
    {id : "landing" , name : "Home" , img : "home.png"},
    {id : "agenticAi" , name : "Agentic AI" , img : "agentic-ai.jpg"},
    {id : "genAi" , name : "Generative AI" , img : "gen-ai.png"},
    {id : "ml" , name : "Machine Learning" , img : "machine-learning.png"},
    {id : "dl" , name : "Deep Learning" , img : "deep-learning.png"},
    {id : "nlp" , name : "Natural Language Processing" , img : "nlp.png"},
    {id : "cv" , name : "Computer Vision" , img : "computer-vision.png"},
]

const questionsList = {
    agenticAi : [
    {
        id: "a1",
        question: "What is the primary characteristic that distinguishes Agentic AI from standard Generative AI?",
        options: [
            "The ability to generate text and images",
            "The ability to independently pursue goals and take actions",
            "Using more parameters in its neural network",
            "Being hosted on a cloud-based server"
        ],
        answerIndex: 1
    },
    {
        id: "a2",
        question: "In the context of Agentic AI, what does \"autonomy\" refer to?",
        options: [
            "The software’s capability to operate without continuous human input",
            "The physical hardware the AI runs on",
            "The AI’s ability to understand multiple languages",
            "The speed at which the AI processes data"
        ],
        answerIndex: 0
    },
    {
        id: "a3",
        question: "Which of these is a common component of an AI agent?",
        options: [
            "A physical robot body",
            "A \"Reasoning\" or \"Planning\" loop",
            "A manual override switch for every step",
            "A traditional relational database"
        ],
        answerIndex: 1
    },
    {
        id: "a4",
        question: "What is a \"multi-agent system\"?",
        options: [
            "One AI model running on many different computers",
            "A system where multiple AI agents interact or collaborate to solve a task",
            "A software that has more than one user at a time",
            "An AI that can only perform one specific task"
        ],
        answerIndex: 1
    },
    {
        id: "a5",
        question: "Which of the following best describes \"tool use\" in Agentic AI?",
        options: [
            "The AI using a screwdriver to fix a computer",
            "The AI calling external APIs or software to perform specific actions",
            "A human using a keyboard to talk to the AI",
            "The AI rewriting its own source code"
        ],
        answerIndex: 1
    }
],
    genAi: [
        {
            id: "g1",
            question: "What is the core purpose of Generative AI?",
            options: [
                "To classify existing data into categories",
                "To create new content like text, images, or audio",
                "To optimize logistics and delivery routes",
                "To detect fraud in credit card transactions"
            ],
            answerIndex: 1
        },
        {
            id: "g2",
            question: "Which model architecture is most commonly associated with modern Generative AI like ChatGPT?",
            options: [
                "Decision Trees",
                "Support Vector Machines",
                "Transformers",
                "Linear Regression"
            ],
            answerIndex: 2
        },
        {
            id: "g3",
            question: "What does \"hallucination\" refer to in the context of Large Language Models (LLMs)?",
            options: [
                "The AI's screen flickering",
                "The AI generating factually incorrect but plausible-sounding information",
                "The AI taking too long to respond",
                "The AI asking for more data"
            ],
            answerIndex: 1
        },
        {
            id: "g4",
            question: "Which of these is an example of a \"Prompt\"?",
            options: [
                "The Python code used to train the model",
                "The user’s input instruction to the AI",
                "The physical GPU the model runs on",
                "The dataset used for pre-training"
            ],
            answerIndex: 1
        },
        {
            id: "g5",
            question: "What is \"Diffusion\" most commonly used for in Generative AI?",
            options: [
                "Text-to-speech synthesis",
                "Image generation",
                "Solving mathematical equations",
                "Predicting stock prices"
            ],
            answerIndex: 1
        }
    ],

    ml: [
        {
            id: "m1",
            question: "What is the main idea behind Machine Learning (ML)?",
            options: [
                "Programming a computer with every possible rule for a task",
                "Computers learning patterns from data without being explicitly programmed for every scenario",
                "Creating a machine that can physically move like a human",
                "Building faster computer processors"
            ],
            answerIndex: 1
        },
        {
            id: "m2",
            question: "Which type of ML uses labeled data (input-output pairs) for training?",
            options: [
                "Unsupervised Learning",
                "Reinforcement Learning",
                "Supervised Learning",
                "Semi-autonomous Learning"
            ],
            answerIndex: 2
        },
        {
            id: "m3",
            question: "In ML, what is \"Overfitting\"?",
            options: [
                "When a model performs too well on new, unseen data",
                "When a model learns the training data too well, including its noise, and fails on new data",
                "When the dataset is too small for the model",
                "When the computer runs out of memory"
            ],
            answerIndex: 1
        },
        {
            id: "m4",
            question: "What is \"Clustering\" an example of?",
            options: [
                "Supervised Learning",
                "Unsupervised Learning",
                "Reinforcement Learning",
                "Deep Learning"
            ],
            answerIndex: 1
        },
        {
            id: "m5",
            question: "Which of these is a common metric for evaluating a classification model?",
            options: [
                "Megabytes per second",
                "Accuracy",
                "Clock speed",
                "Pixels per inch"
            ],
            answerIndex: 1
        }
    ],

    dl: [
        {
            id: "d1",
            question: "Deep Learning is a specialized subset of which field?",
            options: [
                "Quantum Computing",
                "Machine Learning",
                "Mechanical Engineering",
                "Database Management"
            ],
            answerIndex: 1
        },
        {
            id: "d2",
            question: "What is the fundamental building block of a Deep Learning model?",
            options: [
                "A Logical Gate",
                "An Artificial Neuron (or Perceptron)",
                "A Spreadsheet cell",
                "A hard drive sector"
            ],
            answerIndex: 1
        },
        {
            id: "d3",
            question: "What does the \"Deep\" in Deep Learning refer to?",
            options: [
                "The complexity of the math involved",
                "The many layers in a neural network",
                "The large amount of data required",
                "The physical depth of the server racks"
            ],
            answerIndex: 1
        },
        {
            id: "d4",
            question: "Which type of neural network is typically used for processing images?",
            options: [
                "Recurrent Neural Networks (RNNs)",
                "Convolutional Neural Networks (CNNs)",
                "Feedforward Neural Networks",
                "Linear Neural Networks"
            ],
            answerIndex: 1
        },
        {
            id: "d5",
            question: "What is \"Backpropagation\"?",
            options: [
                "A method for storing data in a database",
                "An algorithm used to update the weights of a neural network to reduce error",
                "The process of deleting old AI models",
                "A way to speed up the internet connection"
            ],
            answerIndex: 1
        }
    ],

    nlp: [
        {
            id: "n1",
            question: "What is the primary goal of NLP?",
            options: [
                "To help computers understand, interpret, and generate human language",
                "To teach computers how to speak in binary code",
                "To translate computer code into English",
                "To improve the audio quality of phone calls"
            ],
            answerIndex: 0
        },
        {
            id: "n2",
            question: "What is \"Tokenization\" in NLP?",
            options: [
                "Breaking down text into smaller units like words or subwords",
                "Encrypting a message for security",
                "Translating a sentence into another language",
                "Checking for spelling errors"
            ],
            answerIndex: 0
        },
        {
            id: "n3",
            question: "\"Sentiment Analysis\" is used to determine:",
            options: [
                "The grammatical correctness of a sentence",
                "The emotional tone (e.g., positive, negative) of a text",
                "The word count of a document",
                "The author's name"
            ],
            answerIndex: 1
        },
        {
            id: "n4",
            question: "What is \"Named Entity Recognition\" (NER)?",
            options: [
                "Correcting typos in a document",
                "Identifying and categorizing key information (like names, places, or dates) in text",
                "Summarizing a long article",
                "Predicting the next word in a sentence"
            ],
            answerIndex: 1
        },
        {
            id: "n5",
            question: "Which of these is a common NLP task?",
            options: [
                "Image colorization",
                "Machine Translation",
                "File compression",
                "Virus scanning"
            ],
            answerIndex: 1
        }
    ],

    cv: [
        {
            id: "c1",
            question: "What is the main objective of Computer Vision?",
            options: [
                "To make computer screens brighter",
                "To enable computers to \"see\" and interpret visual information from the world",
                "To record videos in high definition",
                "To design better glasses for humans"
            ],
            answerIndex: 1
        },
        {
            id: "c2",
            question: "What is \"Object Detection\"?",
            options: [
                "Identifying that an image exists",
                "Identifying and locating specific objects within an image (usually with boxes)",
                "Changing the background of a photo",
                "Deleting blurry photos"
            ],
            answerIndex: 1
        },
        {
            id: "c3",
            question: "Which task involves labeling every single pixel in an image according to what object it belongs to?",
            options: [
                "Image Classification",
                "Semantic Segmentation",
                "Optical Character Recognition (OCR)",
                "Face Recognition"
            ],
            answerIndex: 1
        },
        {
            id: "c4",
            question: "What does OCR stand for in the context of Computer Vision?",
            options: [
                "Online Computer Recording",
                "Optical Character Recognition",
                "Optimal Color Rendering",
                "Output Camera Resolution"
            ],
            answerIndex: 1
        },
        {
            id: "c5",
            question: "Which technology is crucial for self-driving cars to navigate their surroundings?",
            options: [
                "Spreadsheet software",
                "Computer Vision",
                "Blockchain",
                "Email servers"
            ],
            answerIndex: 1
        }
    ]  
};

const container=document.querySelector(".side-bar")
function displaySidebar(aiList){
    container.innerHTML="";
    aiList.forEach(element => {
        const card=`<div class="topic-card" id=${element.id}>
        <img src=${element.img}>
        <h3>${element.name}</h3>
        </div>`
        container.innerHTML+=card;
    });
}

const content=document.querySelector(".main-content");
function displayContent(questions){
    content.innerHTML="";
    let qn=1;
    questions.forEach(element =>{
         let optionsCard = "";
         element.options.forEach((option,index)=>{
            optionsCard+=`<label>
            <input type="radio" name="q${qn}" value="${index}">
            ${option}</label><br>`
         });

        const card=`<div class="question-card">
        <strong>${qn}. ${element.question}</strong>
        <div class="option-card">${optionsCard}</div>
            </div> `
        qn++;
        content.innerHTML+=card;
    })
    content.innerHTML+=` <button id="submit" value="submit">Submit</button>`;

    const button = document.getElementById("submit");
    button.addEventListener("click", () => {
        button.disabled = true;
        evaluateQuiz();
    });
}

function evaluateQuiz(){
    let score=0;
    currentQuestions.forEach((qn,index)=>{
        const selected = document.querySelector(`input[name="q${index+1}"]:checked`);
        const selectedIndex = parseInt(selected.value);
        if(selectedIndex==qn.answerIndex){
            score++;
        }
    })
    alert("Your Score :   "+score);
    document.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
        radio.checked = false;
    });
    document.getElementById("submit").disabled = false;
}

container.addEventListener("click",(e)=>{
    const card=e.target.closest(".topic-card");
    if(card){
        const audio = new Audio("audio.wav");
        audio.play();

        const id=card.id;
        if(id=="landing"){
            window.location.href=`${id}.html`;
            return;
        }

        currentQuestions=questionsList[id];
        if (!currentQuestions) {
            content.innerHTML = "<p>No questions available.</p>";
            return;
        }
        displayContent(currentQuestions);
    }
})

window.onload=function(){
    displaySidebar(aiList);
}



