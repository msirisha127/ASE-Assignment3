/**
 * Created by Ravi on 14-09-2016.
 */
function convertTextToSpeech(){
    var text=document.getElementById("text").value;
    var textToSpeechUrl='https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=&password=sn76K1w3Smnl&text='+text;

    var audio="<video controls='' autoplay='' name='media'><source src='"+textToSpeechUrl+"' type='audio/ogg'></video>";
    document.getElementById("playAudio").innerHTML=audio;
}
