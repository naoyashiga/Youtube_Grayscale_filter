//Page Action?
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if(tab.url.indexOf("youtube") != -1){
		//page action show
		chrome.pageAction.show(tabId);
	}
});
//Clicked?
var cnt = 0;
chrome.pageAction.onClicked.addListener(function() {
	chrome.tabs.executeScript(null, {"file":"jquery.js"},
		function(){
			chrome.tabs.executeScript(null, {
				"code":cnt++ +";if("+cnt+"%2==0){$('#movie_player').css('-webkit-filter','brightness(100%)');}else{$('#movie_player').css('-webkit-filter','grayscale()');}"
			});
		});
});