function encryptText(text) {
    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return encryptedText;
}

function decryptText(text) {
    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return decryptedText;
}

document.getElementById('encryptButton').addEventListener('click', () => {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = encryptText(inputText);
    document.getElementById('resultText').innerText = encryptedText;
    document.getElementById('outputImage').classList.add('hidden');
    document.getElementById('outputText').classList.add('hidden');
    document.getElementById('outputInstructions').classList.add('hidden');
    document.getElementById('resultText').classList.remove('hidden');
});

document.getElementById('decryptButton').addEventListener('click', () => {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = decryptText(inputText);
    document.getElementById('resultText').innerText = decryptedText;
    document.getElementById('outputImage').classList.add('hidden');
    document.getElementById('outputText').classList.add('hidden');
    document.getElementById('outputInstructions').classList.add('hidden');
    document.getElementById('resultText').classList.remove('hidden');
});
