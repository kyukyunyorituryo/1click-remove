document.addEventListener('DOMContentLoaded', function() {

  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
var loc = tab.url;
var url;
console.log(loc);
        if (loc.match(/\/dp\/([^/&\?\%]+)/) || loc.match(/\/obidos\/ASIN\/([^/&\?\%]+)/) || loc.match(/\/gp\/product\/([^/&\?\%]+)/) || loc.match(/\/o\/ASIN\/([^/&\?\%]+)/)){
         url = 'https://read.amazon.co.jp/?asin=' + RegExp.$1;
           console.log(url);
      var target = document.getElementById("cloud");
        target.href =url;
          console.log(target);
         }

  });

});
