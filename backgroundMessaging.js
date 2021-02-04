chrome.runtime.onMessage.addListener((request, sender, resp)=>{
    console.log('request', request);
    console.log('sender', sender);
    console.log('response', resp);
});

chrome.bookmarks.onMoved.addListener(()=>{
    chrome.tabs.query({active:true, currentWindow: true}, tabs=>{
        chrome.tabs.sendMessage(tabs[0].id, {name:'Tomas'});
    });
})

