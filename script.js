const questions={

1:{
title:"Engineering",
text:"Hello STEM Explorer! Have you chosen your answer? The correct answer is Triangle. Triangles are the strongest shape because they keep their form when force is applied. Engineers use triangles in bridges, towers and roofs. Excellent work!"
},

2:{
title:"Biology",
text:"Great job! The correct answer is Photosynthesis. Plants use sunlight, water and carbon dioxide to make their own food. They also release oxygen into the air."
},

3:{
title:"Physics",
text:"Excellent! The correct answer is Iron. Magnets attract iron and steel because they have magnetic properties. Plastic and wood are not magnetic."
},

4:{
title:"Earth Science",
text:"Correct! Earth rotates on its axis. As Earth spins, one side faces the Sun while the other side is dark. That is why we have day and night."
},

5:{
title:"Electricity",
text:"Well done! Copper is the correct answer. Copper carries electricity very well, which is why it is used inside electrical wires."
},

6:{
title:"Environment",
text:"Fantastic! Recycling plastic bottles helps reduce pollution, protects wildlife and saves natural resources."
},

7:{
title:"Coding",
text:"Awesome! An algorithm is a step by step set of instructions used to solve a problem. Computers follow algorithms every day."
}

};

const params=new URLSearchParams(window.location.search);

const page=params.get("page")||1;

document.getElementById("title").innerHTML=questions[page].title;

document.getElementById("message").innerHTML=questions[page].text;

function speakAgain(){

const speech=new SpeechSynthesisUtterance(questions[page].text);

speech.rate=1;

speech.pitch=1;

speech.lang="en-US";

speechSynthesis.speak(speech);

}

window.addEventListener("load", () => {
    setTimeout(() => {
        speechSynthesis.cancel();

        const speech = new SpeechSynthesisUtterance(questions[page].text);
        speech.rate = 1;
        speech.pitch = 1;
        speech.lang = "en-US";

        speechSynthesis.speak(speech);
    }, 1000);
});
