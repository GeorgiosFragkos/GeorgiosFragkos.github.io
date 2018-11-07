$("a").click(function(event){ 
				if ($(this).attr("id")!="email") {
					event.preventDefault();
					window.open($(this).attr("href"));
				}
				/*else {
					var loadingMessage="your e-mail client is being triggered,please wait..."
					$(this).parent().append(loadingMessage);
				}*/
})