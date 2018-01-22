(function(){
		var s=document.createElement('script');
		s.src='snow.js';
		s.async=true;
		s.addEventListener('load',function(){
			var app = new goog.egg.snowyfog.Snowyfog();
			app.init();
		},false);
		document.getElementById('snfloader').appendChild(s);})();