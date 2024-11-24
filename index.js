function shout(myString) {
    return myString.toUpperCase();
}
function whisper(myString) {
    return myString.toLowerCase();
}
function logShout(myString) {

    console.log(shout(myString));
}
function logWhisper(myString) {
    console.log(whisper(myString));
}
function sayHiToHeadphonedRoommate(myString) {
    if (myString === myString.toLowerCase()) {
        return "I can't hear you!";
    }
}
function sayHiToHeadphonedRoommate(myString) {
    if (myString === myString.toUpperCase()) {
        return "YES INDEED!";
    }
}
function sayHiToHeadphonedRoommate(myString) {
    if (myString === myString.toLowerCase()) {
        return "I can't hear you!";
    }
    else if (myString === myString.toUpperCase()) {
        return "YES INDEED!";
    }
    else if (myString === "Let's have dinner together!") {
        return "I would love to!"
    }
}