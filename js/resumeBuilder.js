var work = {
  "jobs" : [{
    "employer": "AT&T",
    "title" : "Senior IT Analyst",
    "location" : "Earth City, MO",
    "pin" : "green",
    "dates" : "October 2007 - present",
    "description" : "Programmer and web developer, specializing in full stack web development of tools for use by internal AT&T customer support teams."
  },{
    "employer": "AT&T",
    "title" : "Network Center Technician",
    "location" : "Earth City, MO",
    "pin" : "green",
    "dates" : "June 2000 - October 2007",
    "description" : "Call center technician, specializing in customer support of DSL trouble calls. Also functioned as a team lead in support of other center technicians."
  },{
    "employer" : "Memorial Hospital",
    "title" : "Info Systems Technician",
    "location" : "Belleville, IL",
    "pin" : "blue",
    "dates" : "1998 - May 2000",
    "description" : "Ran reports and backup procedures on a large mainframe, with additional support for user equipment on an as-needed basis."
  }],
  display : function() {
    for (index in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[index].employer);
      formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[index].title);
      $(".work-entry:last").append(formattedEmployer + formattedTitle);

      formattedDates = HTMLworkDates.replace("%data%",work.jobs[index].dates);
      $(".work-entry:last").append(formattedDates);

      formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[index].location);
      formattedPin = HTMLworkMapPin.replace("%color%",work.jobs[index].pin);
      $(".work-entry:last").append(formattedLocation + formattedPin);

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
    "title" : "Web Portfolio",
    "dates" : 2014,
    "description" : "Web page detailing projects finished within the Nanodegree courses.",
    "images": ["images/nano-p1-1.png","images/nano-p1-2.png"],
    "url" : "http://sentry71.github.io/portfolio"
  },{
    "title" : "Arcade Clone",
    "dates" : 2014,
    "description" : "Frogger-like game, using object oriented JavaScript and HTML5 canvas.<br>Featured in Udacity's list of <a class='inline' href='http://blog.udacity.com/2014/12/best-student-projects-2014.html'>'Best Student Projects of 2014'</a>.",
    "images": ["images/nano-p3-1.png","images/nano-p3-2.png"],
    "url" : "http://sentry71.github.io/arcade"
  }
  ],
  display : function() {
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
  "welcomeMessage" : "Welcome to my online resume. Hopefully it is a step above 'Hello World!'",
  "contacts" : {
    "mobile" : "618-225-XXXX",
    "email" : "ghill315@att.net",
    "github" : "sentry71",
    "blog" : "hill-nano",
    "linkedin" : "garyhilljr",
    "location" : "Shiloh, IL",
    "pin" : "red"
  },
  "skills" : ["HTML","CSS","JavaScript","Perl","Oracle"],
  "bioPic" : "images/gold_centurion_poster.jpg",
  display : function() {
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
    formattedBlog = HTMLblog.replace("%data%",bio.contacts.blog);
    $("#topContacts").append(formattedBlog);
    $("#footerContacts").append(formattedBlog);
    formattedLinkedin = HTMLlinkedin.replace("%data%",bio.contacts.linkedin);
    $("#topContacts").append(formattedLinkedin);
    $("#footerContacts").append(formattedLinkedin);
    formattedLocation= HTMLlocation.replace("%data%",bio.contacts.location);
    formattedPin = HTMLmapPin.replace("%color%",bio.contacts.pin);
    $("#topContacts").append(formattedLocation + formattedPin);
    $("#footerContacts").append(formattedLocation + formattedPin);

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
    "url" : "http://www.mckendree.edu",
    "pin" : "yellow"
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
  display : function() {
    $("#education").append(HTMLschoolStart);
    for (index in education.schools) {
      formattedName = HTMLschoolName.replace("%data%",education.schools[index].name).replace("%url%",education.schools[index].url);
      formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[index].degree);
      $(".education-entry:last").append(formattedName + formattedDegree);
      formattedDates = HTMLschoolDates.replace("%data%",education.schools[index].dates);
      $(".education-entry:last").append(formattedDates);
      formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[index].location);
      formattedPin = HTMLschoolMapPin.replace("%color%",education.schools[index].pin);
      $(".education-entry:last").append(formattedLocation + formattedPin);
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
        formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[index].title).replace("#",education.onlineCourses[index].url);
        formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[index].school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);
        formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[index].dates);
        $(".education-entry:last").append(formattedDates);
        formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[index].url).replace("#",education.onlineCourses[index].url);
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
