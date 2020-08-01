document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', onclick,false)

    function onclick(){
        chrome.tabs.query({currentWindow:true, active: true},
        function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, 'hi', setWordCount)
        })
    }
    
    function setWordCount(res){
        const numberOfWordsDIV = document.createElement('div')
        numberOfWordsDIV.textContent = `The number of words are ${res.wordCount}`
        document.body.appendChild(numberOfWordsDIV)
    }

},false)