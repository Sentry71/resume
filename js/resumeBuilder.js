var work = {
  "jobs" : [{
    "employer": "AT&T",
    "title" : "Senior IT Analyst",
    "location" : "Earth City, MO",
    "dates" : "October 2007 - present",
    "description" : "Programmer and web developer, specializing in full stack web development of tools for use by internal AT&T customer support teams."
  },{
    "employer": "AT&T",
    "title" : "Network Center Technician",
    "location" : "Earth City, MO",
    "dates" : "June 2000 - October 2007",
    "description" : "Call center technician, specializing in customer support of DSL trouble calls."
  }],
  "display" : function() {
    for (index in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[index].employer);
      formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[index].title);
      formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      formattedDates = HTMLworkDates.replace("%data%",work.jobs[index].dates);
      $(".work-entry:last").append(formattedDates);

      formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[index].location);
      $(".work-entry:last").append(formattedLocation);

      formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[index].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};

var projects = {
  "projects" : [{
    "title" : "1st Column Website",
    "dates" : 2011,
    "description" : "Website written in support of the 1st Column fleet inside of Star Trek Online.",
    "images": ["images/1st_column.jpg","images/1st_column_2.jpg"],
    "url" : "http://1stcolumn.org"
  },{
    "title" : "Interactive Resume",
    "dates" : 2014,
    "description" : "Resume with data dynamically added to the web page.",
    "images": ["images/197x148.gif","images/197x148.gif"],
    "url" : "#"
  },{
    "title" : "Web Portfolio",
    "dates" : 2014,
    "description" : "Web page detailing projects finished with the Nanodegree courses.",
    "images": ["images/197x148.gif","images/197x148.gif"],
    "url" : "#"
  }],
  "display" : function() {
    $("#projects").append(HTMLprojectStart);
    for (index in projects.projects) {
      formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[index].title).replace("%url%",projects.projects[index].url);
      $(".project-entry:last").append(formattedTitle);
      formattedDates = HTMLworkDates.replace("%data%",projects.projects[index].dates);
      $(".project-entry:last").append(formattedDates);
      formattedDescription = HTMLworkDescription.replace("%data%",projects.projects[index].description);
      $(".project-entry:last").append(formattedDescription);

      if(projects.projects[index].images.length > 0){
        for (index2 in projects.projects[index].images) {
          var formattedImage = HTMLprojectImage.replace("%data%",
            projects.projects[index].images[index2]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  }
};

var bio = {
  "name" : "Gary Hill",
  "role" : "Web Developer",
  "welcomeMessage" : "This is a welcome message - at least it's better than Hello World!",
  "contacts" : {
    "mobile" : "618-225-XXXX",
    "email" : "ghill315@att.net",
    "github" : "sentry71",
    "linkedin" : "garyhilljr",
    "location" : "Shiloh, IL"
  },
  "skills" : ["HTML","CSS","JavaScript","Perl","Oracle"],
  "bioPic" : "images/fry.jpg",
  "display" : function() {
    formattedName = HTMLheaderName.replace("%data%",bio.name);
    formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);
    formattedLinkedin = HTMLcontactGeneric.replace("%data%",bio.contacts.linkedin).replace("%contact%","linkedin");
    $("#topContacts").append(formattedLinkedin);
    $("#footerContacts").append(formattedLinkedin);
    formattedLocation= HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);

    formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
    $("#header").append(formattedPic);
    formattedMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedMsg);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for(var i=0; i < bio.skills.length; i++){
        formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
        $("#skills").append(formattedSkill);
      }
    }
  }
};

var education = {
  "schools" : [{
    "name" : "McKendree University",
    "location" : "Lebanon, IL",
    "degree" : "Bachelor of Science",
    "majors" : ["biology"],
    "dates" : "1989 - 1993",
    "url" : "http://www.mckendree.edu"
  }],
  "onlineCourses" : [{
    "title" : "Front End Web Development Nanodegree",
    "school" : "Udacity",
    "dates" : "2014 - 2015",
    "url" : "https://www.udacity.com/course/nd001"
  },{
    "title" : "Try Git",
    "school" : "Code School",
    "dates" : 2014,
    "url" : "https://try.github.io"
  }],
  "display" : function() {
    $("#education").append(HTMLschoolStart);
    for (index in education.schools) {
      formattedName = HTMLschoolName.replace("%data%",education.schools[index].name).replace("%url%",education.schools[index].url);
      formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[index].degree);
      $(".education-entry:last").append(formattedName + formattedDegree);
      formattedDates = HTMLschoolDates.replace("%data%",education.schools[index].dates);
      $(".education-entry:last").append(formattedDates);
      formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[index].location);
      $(".education-entry:last").append(formattedLocation);
      if (education.schools[index].majors.length > 0) {
        for (index2 in education.schools[index].majors){
          var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[index].majors[index2]);
          $(".education-entry:last").append(formattedMajor);
        }
      }
    }
    if (education.onlineCourses.length > 0) {
      $(".education-entry:last").append(HTMLonlineClasses);
      for (index in education.onlineCourses) {
        formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[index].title);
        formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[index].school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);
        formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[index].dates);
        $(".education-entry:last").append(formattedDates);
        formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[index].url);
        $(".education-entry:last").append(formattedURL);
      }
    }
  }
};

bio.display();

work.display();

projects.display();

education.display();

/**
 * used to modify name, not part of end result webpage
function inName() {
  var nameStr = bio.name;
  var namePart = nameStr.split(" ");
  var newName = namePart[0].slice(0,1).toUpperCase() + namePart[0].slice(1).toLowerCase() + " " + namePart[1].toUpperCase();
  return newName;
}

$("#main").append(internationalizeButton);
*/

$("#mapDiv").append(googleMap);
