
(function()
{	
	$("#header").load("t_index.html .navbar-static-top",  function() {$.fn.myInit();});
	$("#footer").load("t_index.html .bs-docs-footer",  function() {$.fn.myInit();});
	$("#right").load("t_index.html .bs-docs-sidebar",  function() {$.fn.myInit();});
	
	$index = 0;
	$.fn.myInit = function(){
		$index++;
		if($index < 3)
			return;
		
		$title = $("head title").text();
		$(".navbar-brand").text($title);
		
		$childLi = null;
		$childNav = null;
		$(".main").find('h1,h2').each(function() {
			//alert($(this).is('h1') + " " + $(this).text() + " " + $(this).prop('id'));
			if($(this).is('h1')){
				$childLi = $('<li></li>');
				$(".bs-docs-sidenav").append($childLi);
				
				$eli = $('<a href="#'+$(this).prop('id')+'">'+$(this).text()+'</a>');
				$childLi.append($eli);
				
				$childNav = null;
				
				$(".navbar-nav").append($('<li><a href="#'+$(this).prop('id')+'">'+$(this).text()+'</a></li>'));
			} else if($(this).is('h2')){
				if($childNav == null){
					$childNav = $('<ul class="nav"></ul>');
					$childLi.append($childNav);
				}
				
				$eli = $('<li><a href="#'+$(this).prop('id')+'">'+$(this).text()+'</a></li>');
				$childNav.append($eli);
			}
		});
	}
})();
			
/*!* JavaScript for Bootstrap's docs (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */
!function(a){"use strict";a(function(){var b=a(window),c=a(document.body);c.scrollspy({target:".bs-docs-sidebar"}),b.on("load",function(){c.scrollspy("refresh")}),a(".bs-docs-container [href=#]").click(function(a){a.preventDefault()}),setTimeout(function(){var b=a(".bs-docs-sidebar");b.affix({offset:{top:function(){/*var c=b.offset().top,d=parseInt(b.children(0).css("margin-top"),10),e=a(".bs-docs-nav").height();return this.top=c-e-d*/return a(".bs-docs-nav").height();},bottom:function(){return this.bottom=a(".bs-docs-footer").outerHeight(!0)}}})},100),setTimeout(function(){a(".bs-top").affix()},100),function(){var b=a("#bs-theme-stylesheet"),c=a(".bs-docs-theme-toggle"),d=function(){b.attr("href",b.attr("data-href")),c.text("Disable theme preview"),localStorage.setItem("previewTheme",!0)};localStorage.getItem("previewTheme")&&d(),c.click(function(){var a=b.attr("href");a&&0!==a.indexOf("data")?(b.attr("href",""),c.text("Preview theme"),localStorage.removeItem("previewTheme")):d()})}(),a(".tooltip-demo").tooltip({selector:'[data-toggle="tooltip"]',container:"body"}),a(".popover-demo").popover({selector:'[data-toggle="popover"]',container:"body"}),a(".tooltip-test").tooltip(),a(".popover-test").popover(),a(".bs-docs-popover").popover(),a("#loading-example-btn").on("click",function(){var b=a(this);b.button("loading"),setTimeout(function(){b.button("reset")},3e3)}),a("#exampleModal").on("show.bs.modal",function(b){var c=a(b.relatedTarget),d=c.data("whatever"),e=a(this);e.find(".modal-title").text("New message to "+d),e.find(".modal-body input").val(d)}),a(".bs-docs-activate-animated-progressbar").on("click",function(){a(this).siblings(".progress").find(".progress-bar-striped").toggleClass("active")})/*,ZeroClipboard.config({moviePath:"/assets/flash/ZeroClipboard.swf",hoverClass:"btn-clipboard-hover"}),a(".highlight").each(function(){var b='<div class="zero-clipboard"><span class="btn-clipboard">Copy</span></div>';a(this).before(b)});var d=new ZeroClipboard(a(".btn-clipboard")),e=a("#global-zeroclipboard-html-bridge");d.on("load",function(){e.data("placement","top").attr("title","Copy to clipboard").tooltip()}),d.on("dataRequested",function(b){var c=a(this).parent().nextAll(".highlight").first();b.setText(c.text())}),d.on("complete",function(){e.attr("title","Copied!").tooltip("fixTitle").tooltip("show").attr("title","Copy to clipboard").tooltip("fixTitle")}),d.on("noflash wrongflash",function(){e.attr("title","Flash required").tooltip("fixTitle").tooltip("show")})*/})}(jQuery);