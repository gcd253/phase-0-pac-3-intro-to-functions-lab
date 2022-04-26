function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
function logShout(string) {
    console.log(string.toUpperCase());
}
logShout("hello");
function logWhisper(string) {
    console.log(string.toLowerCase());
}
logWhisper("hello");


function sayHiToHeadphonedRoommate(string) {
    let response;


    if (string === "Let's have dinner together!") {
        response = "I would love to!"
    };
    if (string === string.toLowerCase()) {
        response = "I can't hear you!"
    };
    if (string === string.toUpperCase()) {
        response = "YES INDEED!"
    }

    return (response);
}
console.log(string);
console.log(string.toLowerCase());

console.log(string === string.toLowerCase());
