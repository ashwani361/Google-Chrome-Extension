testMessage();

function testMessage(){
    chrome.runtime.sendMessage(
        {payload: 'Hello from a content'},
        ()=>console.log(2+2)
    );
}

chrome.runtime.onMessage.addListener((request, sender)=>{
    console.log('request', request);
    console.log('sender', sender);
});