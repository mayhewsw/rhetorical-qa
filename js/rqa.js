answers = [
    "Much to consider!",
    "Many have asked this question.",
    "Mmmm, yes (sagely).",
    "Indeed!",
    "I've wondered this myself!",
    "So true!",
    "Great question!",
    "A lot of us have been asking this.",
    "Yes, exactly.",
    "How could anyone know?",
    "I agree 100%.",
    "Perhaps Delphi would know?",
    "Beyond me.",
    "Such questions are difficult, but important.",
    "Keep asking, perhaps one day you'll find an answer.",
    "*nods in agreement*",
    "That is the question!",
    "Tough but fair.",
    "We'd all like to know!",
    "There's a grain of truth in that."
]

async function onSubmit(event){
    event.preventDefault();
    txt = document.getElementById("inputbox").value;
    if (txt.length == 0){
        return
    }
    document.getElementById("results").style.visibility = "hidden";
    document.getElementById("loader").style.visibility = "visible";
    // sleep a short time to simulate doing cool neural stuff
    await new Promise(r => setTimeout(r, 900));
    document.getElementById("loader").style.visibility = "hidden";

    ans = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById("results").style.visibility = "visible";
    document.getElementById("question").innerHTML = txt;
    document.getElementById("answer").innerHTML = ans;
    
}

function chooseExample(){
    index = document.getElementById("examples").selectedIndex;
    if (index == 0){
        return
    }
    options = document.getElementById("examples").options;
    optionText = options[index].innerText
    document.getElementById("inputbox").value = optionText;
}