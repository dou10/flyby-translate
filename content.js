// document.addEventListener('DOMContentLoaded', function(){
//     const numberOfWords = document.body.innerText.split(' ').length
//     const numberOfWordsDIV = document.createElement('div')
//     numberOfWordsDIV.textContent = `Number of Words On Page Are ${numberOfWords}`
//     document.body.appendChild(numberOfWordsDIV)
// }, false)

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
    //alert('button works')
    let numberOfWords = wordCount(document.body.innerText)

    function wordCount(words){
        let count = 0
        for(let i = 0 ; i< words.length; i++){
        count += words[i].split(' ').length
        }
        return count
    }
    
    
    sendResponse({wordCount: numberOfWords})
})