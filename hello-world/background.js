

chrome.runtime.onInstalled.addListener(async() => {

    let url = chrome.runtime.getURL("hello.html");
    console.log(url);

    let tab = await chrome.tabs.create({ url });
    
    console.log(`Created tab ${tab.id}`);   
});