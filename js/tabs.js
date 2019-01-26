function openPage(pageName,elmnt) {
		var i, tabcontent, tablinks;
		tabcontent = $(".tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		tablinks = $(".tablink");
		/*for (i = 0; i < tablinks.length; i++) {
			tablinks[i].style.backgroundColor = "";
		}*/
		document.getElementById(pageName).style.display = "block";
		//elmnt.style.backgroundColor = color;
	}
	

$(alert("Site under construction!\nStill testing ideas and technologies..."));
	
$("#defaultOpenButton").attr("onclick", "openPage('home', this)");
$("#newsButton").attr("onclick", "openPage('news', this)");
$("#studiesButton").attr("onclick", "openPage('studies', this)");
$("#seminarsButton").attr("onclick", "openPage('seminars', this)");
$("#certificationsButton").attr("onclick", "openPage('certifications', this)");
$("#experienceButton").attr("onclick", "openPage('experience', this)");
$("#accomplishmentsButton").attr("onclick", "openPage('accomplishments', this)");
$("#contactButton").attr("onclick", "openPage('contact', this)");
$("#aboutButton").attr("onclick", "openPage('about', this)");

// Get the element with id="defaultOpen" and click on it
$("#defaultOpenButton").click();