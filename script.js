let btn = document.querySelector("#button")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
 
function wishMe(){
    let day = new Date()
    let hour = day.getHours()
    if(hour>=0 && hour<=12){
        speak("Good morning what should i help you")
    }else  if(hour>=12 && hour<=16){
        speak("Good Afternoon what should i help you")
    }else{
        speak("Good Evening what should i help you")
    }
}
window.addEventListener('load',()=>{
    //  wishMe()
})
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
// let isListening = false
let recognition =new speechRecognition()
recognition.onresult = (event)=>{
    let currentIndex= event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText=transcript
         takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
    // wishMe();   

    // if(!isListening){
    //     recognition.start();
    // }
    // else{
    //     recognition.stop();
    // }

});
 function takeCommand(message){
    if(message.includes("hello") || message.includes("hey")){
        speak("hello ,what can i help you")
    }else if( message.includes("who are you")){
        speak("i am virtual assistant ,cretaed by ashutosh  singh")
    }else if(message.includes("open youtube")){
        speak("openig youtube ...")
        window.open("https://www.youtube.com/","_blank")
    }else if("")
 }
