chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {
    "file": "content_script.js"
  }, function(err) {
    console.log({
      msg: 'got content script failed',
      error: err
    });
  })
});
