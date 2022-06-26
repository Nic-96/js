const string = 'Привет! Как дела?'
let vowList = ["а","у","о","ы","э","я","ю","ё","и","е"]


function getVowels(filteredString) {
    let extractedVowels = "";
    let vow;

    for (let i = 0; i < filteredString.length; i++) {
        const curLetter = filteredString[i];
        
        for (let j = 0; j < vowList.length; j++) {
            if (curLetter==vowList[j]) {
                vow = curLetter;
                extractedVowels = extractedVowels + vow;
            }
        }
    }
    
    return extractedVowels
}

console.log(getVowels(string))

