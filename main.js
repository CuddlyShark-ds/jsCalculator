let currentDisplayText = ""


function main() {

}

function getInput(userInput){
    currentDisplayText += userInput.toString();
    document.getElementById("display").innerHTML = currentDisplayText;
    console.log(currentDisplayText)
}

main()