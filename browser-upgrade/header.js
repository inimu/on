(function() {
	var TOP = window.top;
	var SELF = window.self;
	if (SELF.location == TOP.location) {
		TOP.location = 'index.html';
	}
	if (TOP.document.referrer.indexOf('//inimu.com') >= 0) {
		var LINK = SELF.document.getElementById('link');
		LINK.href = TOP.document.referrer;
	}
	SELF.document.getElementById('closer').onclick = function() {
		var CONTENT = TOP.document.getElementById('content');
		try {
			window.top.location = CONTENT.contentWindow.location.href;
		} catch(e) {
			window.top.location = CONTENT.src;
		}
		return false;
	}
})();
