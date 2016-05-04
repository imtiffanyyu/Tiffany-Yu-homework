function EmailList ( listname ) {
	this.listname = listname; 
	this.emailarray = [];
};

EmailList.prototype.addEmail = function( email ) {
	this.emailarray.push(email); 
};

EmailList.prototype.sendEmailToAll = function (emailtext) {
	this.emailtext = emailtext;
	console.log (this.listname);
	console.log ("Email content: \n" + this.emailtext);
	console.log ("Sending email to \n" + this.emailarray)
}

var studentslist = new EmailList ("BSSA Students")
studentslist.addEmail ('student1@gmail.com');
studentslist.addEmail ('student2@gmail.com');
studentslist.addEmail ('student3@gmail.com');
studentslist.sendEmailToAll ( "Turn in your homework" );

var teacherslist = new EmailList ("BSSA Teachers")
teacherslist.addEmail ('teacher1@gmail.com');
teacherslist.addEmail ('teacher2@gmail.com');
teacherslist.addEmail ('teacher3@gmail.com');
teacherslist.sendEmailToAll ( "You've been promoted!" );