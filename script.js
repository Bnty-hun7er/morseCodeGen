document.getElementById("morseForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const text = document.getElementById("text").value.toLowerCase();
    let morseCode = 'Morse code is ==>  ';

    // Loop through each character in the input
    for (let char of text) {
        switch (char) {
            case 'a': morseCode += '.- '; break;
            case 'b': morseCode += '-... '; break;
            case 'c': morseCode += '-.-. '; break;
            case 'd': morseCode += '-.. '; break;
            case 'e': morseCode += '. '; break;
            case 'f': morseCode += '..-. '; break;
            case 'g': morseCode += '--. '; break;
            case 'h': morseCode += '.... '; break;
            case 'i': morseCode += '.. '; break;
            case 'j': morseCode += '.--- '; break;
            case 'k': morseCode += '-.- '; break;
            case 'l': morseCode += '.-.. '; break;
            case 'm': morseCode += '-- '; break;
            case 'n': morseCode += '-. '; break;
            case 'o': morseCode += '--- '; break;
            case 'p': morseCode += '.--. '; break;
            case 'q': morseCode += '--.- '; break;
            case 'r': morseCode += '.-. '; break;
            case 's': morseCode += '... '; break;
            case 't': morseCode += '- '; break;
            case 'u': morseCode += '..- '; break;
            case 'v': morseCode += '...- '; break;
            case 'w': morseCode += '.-- '; break;
            case 'x': morseCode += '-..- '; break;
            case 'y': morseCode += '-.-- '; break;
            case 'z': morseCode += '--.. '; break;
            case '1': morseCode += '.---- '; break;
            case '2': morseCode += '..--- '; break;
            case '3': morseCode += '...-- '; break;
            case '4': morseCode += '....- '; break;
            case '5': morseCode += '..... '; break;
            case '6': morseCode += '-.... '; break;
            case '7': morseCode += '--... '; break;
            case '8': morseCode += '---.. '; break;
            case '9': morseCode += '----. '; break;
            case '0': morseCode += '----- '; break;
            default: morseCode += ' '; // Add space for unrecognized characters
        }
    }

    document.getElementById("output").textContent = morseCode.trim();
});
