---
cssclasses:
  - wide-page
type: relation-page
birthday: 
parent: "[[<% tp.file.folder() %>]]"
---

<%*
	// Rename file with the one choose by user
	const fileName = await tp.system.prompt("Nom :")
	await tp.file.rename(fileName)
  
	const baseFolder = tp.file.folder(true)
	const newFolder = `${baseFolder}/${fileName}/`

	await tp.file.move(newFolder + fileName)

	// Birthday
	const birthday_str = await tp.system.prompt("Anniversaire :")
	if(birthday_str !== ""){
		const birthday = moment(birthday_str, "DD/MM/YYYY", true)
		if(birthday.isValid()){
			console.log(birthday)
			
			const file = tp.file.find_tfile(fileName);
			await app.fileManager.processFrontMatter(file, (frontmatter) => {
				console.log(frontmatter)
				frontmatter["birthday"] = birthday.format("MM/DD/YYYY");
			  
			})
		}
	}
	
%>






```meta-bind-button
label: New note
icon: plus
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions:
  - type: templaterCreateNote
    templateFile: Templates/Note.md
    folderPath: <% tp.file.folder(true) %>
    fileName: ""
    openNote: true
    openIfAlreadyExists: false

```
## Todo

```dataview
TASK
WHERE startswith(file.folder, this.file.folder)
```

## Notes

> [!multi-column]
> 
>> Last modified
>>```dataview
>>List
>>FROM ""
>>WHERE contains(file.folder, this.file.folder)
>>WHERE !contains(type,"-page")
>>SORT file.mtime DESC
>>LIMIT 5
>>```
>
>> Last new
>>```dataview
>>List
>>FROM ""
>>WHERE contains(file.folder, this.file.folder)
>>WHERE !contains(type,"-page")
>>SORT file.ctime DESC
>>LIMIT 5
>>```
>
>> All
>>```dataview
>>LIST
>>WHERE contains(file.folder, this.file.folder)
>>WHERE !contains(type,"-page")
>>```
