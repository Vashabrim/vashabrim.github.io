var bio = {
	"name" : "Doug Stubbs",
	"role" : "Web Developer",
	"bioPic" : "images/bmf.JPG",
	"welcomeMessage" : "An experienced IT professional with proven skills in web development, desktop support, and helpdesk. Self-starter with a passion to initiate action through concise communication and collaboration within a team environment. A non-stop learner.",
	"contacts" : [{
		"mobile" : "515-867-5309",
		"email" : "stubbs.doug@gmail.com",
		"github" : "<a href='https://github.com/Vashabrim'>vashabrim</a>",
		"twitter" : "<a href='https://twitter.com/1TrueDAS'>@1TrueDAS</a>",
		"location" : "Des Moines",
		"linkedIn" : "<a href='https://www.linkedin.com/pub/doug-stubbs/90/986/834'>Doug Stubbs</a>"
	}],
	
	"skills": ["HTML5", "CSS","Bootstrap","JavaScript","Java","Python","Powershell","Adobe Creative Suite","Active Directory","GitHub version control","Microsoft Office Suite","Microsoft Exchange","Microsoft Sharepoint","Microsoft Visual Studio","Microsoft Windows 7,8, and 10"]
	
};

var work = {
	"jobs" : [
	{
		"employer" : "TMC Transportation",
		"title" : "Software Developer",
		"location" : "Ankeny, IA",
		"dates" : "2015 - ",
		"description" : "Developing custom software for in house application to manage all facets of the business of the company using .Net C#, JavaScript and SQL."
	},
	{
		"employer" : "Nationwide Insurance",
		"title" : "Senior Analyst",
		"location" : "Des Moines, IA",
		"dates" : "2011-2015",
		"description" : "Primary responsibilities included desktop support, as well as support of corporate customer base. Enhanced team engagement by creating a web based activity for use after staff meetings. The project increased engagement, as well as attention and focus for the team during meetings"
	},
	{
		"employer" : "TEKSystems",
		"title" : "Contractor",
		"location" : "Des Moines, IA",
		"dates" : "2000-2005, 2010-2011",
		"description" : "Contractor for various companies around Des Moines, including Iowa Methodist Hospital, Farm Bureau Insurance, and Nationwide Insurance"
	},
	{
		"employer" : "Kelly IT Services",
		"title" : "Contractor",
		"location" : "Johnston, IA",
		"dates" : "2009-2010",
		"description" : "Quality assurance position at Pioneer Hi-Bred for a new field sales system software, then moved to technical support for users in the field after use. Problem-solved software issues with developers and field users."
	},
	{
		"employer" : "Principal Financial Group",
		"title" : "Helpdesk Technician",
		"location" : "Des Moines, IA",
		"dates" : "2005-2009",
		"description" : "Resolved help desk calls and incident tickets and provided excellent customer service in a second-level support role. I was a lead for the department in OS migration, mobile devices including BlackBerry, Microsoft Exchange, and Active Director management"
	},
	{
		"employer" : "B-Executive, Inc.",
		"title" : "Technician",
		"location" : "Prairie City, IA",
		"dates": "1997-2000",
		"description" : "Worked for small computer repair company, traveling to customer's locations to resolve computer, network, printer issues."
	},
	{
		"employer" : "Lih Chen",
		"title" : "Technician",
		"location" : "Iowa City, IA",
		"dates" : "1996-1997",
		"description" : "PC repair and sales for a small company, specializing in support of restaurant POS systems."
	}
	]
};


var education = {
    "schools" : [
    	{
    		"name" : "Iowa State University",
    		"city" : "Ames, IA",
    		"degree" : "N/A",
    		"major" : "Pre-Engineering",
    		"dates" : "1990-1992",
    		"url" : "http:www.iastate.edu"
    	},
        {
            "name" : "Marshalltown Community College",
            "city" : "Marshalltown, IA",
            "degree" : "Associates",
            "major" : ["General Studies"],
            "dates" : "1996",
            "url" : "http://www.iavalley.edu/mcc/"
        },
        {
            "name" : "Des Moines Area Community College",
            "city" : "Des Moines, IA",
            "degree" : "Web Development certificate- in Progress",
            "major" : ["Web Development certificate"],
            "dates" : "2014",
            "url" : "http://www.dmacc.edu"
        }
        ],
        "onlineCourses" : [
        {
        	"title" : "Front End Web Developer Nanodegree",
        	"school" : "Udacity",
        	"dates" : "2015",
        	"url" : "http://www.udacity.com"
        }]
};

var projects = {
	"projects" : [
	{
		"title":"HDI Iowa website",
		"dates":"2010-",
		"description":"I maintain and update the website for the HDI chapter of Iowa",
		"images":"images/Capture.PNG"
	},
	{
		"title" : "DX Transportation Management System",
		"dates" : "2015-",
		"description" : "TMC Transportation proprietary software",
		"images": ""
	}
	]
};


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedbioPic,formattedMsg);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
		var formattedGit = HTMLgithub.replace("%data%", bio.contacts[contact].github);
		var formattedTweety = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
		var formattedlinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts[contact].linkedIn);
		$("#topContacts").append(formattedMobile, formattedEmail,formattedLocation);
		$("#footerContacts").append(formattedGit, formattedlinkedIn, formattedTweety);
	};

};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedUrl = HTMLschoolUrl.replace("%data%", education.schools[school].url);
				
		$(".education-entry:last").prepend(formattedName + formattedDegree, formattedDates,formattedLocation, formattedMajor, formattedUrl);
	};
	for(course in education.onlineCourses){
		
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

		$(".education-entry:last").append(HTMLonlineClasses);	
		$(".education-entry:last").append(formattedTitle, formattedSchool, formattedDates, formattedUrl);
	};
	
};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedLocation,formattedDates,formattedDescription);
	};
};

projects.display = function() {
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedImg = HTMLprojectImage.replace("%data%", projects.projects[project].images);

		$(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription, formattedImg);
		};
		
	};

function inName(name){
	console.log(bio.name);
	var newName = bio.name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ")+ 1).toLowerCase() + newName.slice(newName.indexOf(" ")+1).toUpperCase();

	return newName;
};

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

bio.display();
work.display();
education.display();
projects.display();
