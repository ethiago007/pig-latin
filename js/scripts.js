$(document).ready(function() {
    $("#formOne").submit(function(event) {
        event.preventDefault();
    // Business Logic
    let sentence= $("#sentence").val();
    let vowelSentence = sentence.charAt(0);
    let quSentence = sentence.slice(0,2);
    let remSentence = sentence.slice(2)
    let remSentence2 = sentence.slice(1)
  let result;
    if (vowelSentence === 'a' || vowelSentence === 'e' || vowelSentence === 'i' || vowelSentence === 'o' || vowelSentence === 'u') {
        result=    (sentence.concat("acedu"))
    }
    else if (quSentence === 'qu' ) {
        result=   (remSentence.concat(quSentence, "ayac"))
    }
    else {
        result=   (remSentence2.concat(vowelSentence,"ayac"))
    }
    $("#result").text(result);
   

    event.preventDefault();
  });
  });