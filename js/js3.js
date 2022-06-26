const path = "/users/download/index.html"

const isHtml = pathToFile => {
    const requiredExt = '.html';
    let fileEnding = '';
    for (i=0; i<5; i++) {
        let curLetter = pathToFile[pathToFile.length - 5 + i];
        fileEnding = fileEnding + curLetter;
    }
    
    return fileEnding == requiredExt
}

console.log(isHtml(path))