(function() {
	if (document.referrer.indexOf('//inimu.com') >= 0) {
		var LINK = document.getElementById('header-link');
		LINK.href = document.referrer;
	}
	document.getElementById('header-closer').onclick = function() {
		var FRAME = document.getElementById('content-frame');
		try {
			window.top.location = FRAME.contentWindow.location.href;
		} catch(e) {
			window.top.location = FRAME.src;
		}
		return false;
	}
})();
