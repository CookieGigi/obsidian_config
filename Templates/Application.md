---
type: Application
creation_date: <% tp.file.creation_date() %>
url: 
Status: 
---


<%* 
	// get path (relative to vault) for current note
	const notePath = tp.file.path(true);
		
	// get TAbstractFile for current note
	let tFile = this.app.vault.getAbstractFileByPath(notePath);
	
	//	get all parents and output their names to the template engine replacement string tR
	tR += "Parents: ";
	while (!tFile.parent?.isRoot()) {
	  tR += "[[" + tFile.parent.name + "]] | ";	 
	  tFile = tFile.parent;
	}
	
	// remove last pipe and blank characters from output
	tR = tR.slice(0, -2);
%>

## TODO

## Cover letter

Hello,

I’m excited to apply for the Software Engineer (C#) position at your company. With 4 years of experience working with ASP.Net, C#, and Microsoft SQL Server, I have built, deployed and maintained robust systems while troubleshooting technical issues to ensure smooth operations. I’m passionate about exploring new technologies, such as Self-hosting and Rust, and enjoy applying innovative solutions in my work.

Throughout my career, I’ve closely collaborated with other developers to deliver high-quality, scalable solutions. After 9 months of traveling, I’m excited to settle in Malaysia and embrace new professional challenges.

I look forward to the opportunity to discuss how I can bring value to your team!

Best regards,  
Guillaume Creusot