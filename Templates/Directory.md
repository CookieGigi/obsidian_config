<%*
  // Rename file with the one choose by user
  const fileName = await tp.system.prompt("Title :")
  await tp.file.rename(fileName)
  
  const baseFolder = tp.file.folder(true)
  const newFolder = `${baseFolder}/${fileName}/`

  await tp.file.move(newFolder + fileName)
%>

## Todo

```dataview
TASK
WHERE startswith(file.folder, this.file.folder)
```

## Last modified

```dataview
List
FROM ""
WHERE contains(file.folder, this.file.folder)
SORT file.mtime DESC
LIMIT 5
```

## Last new

```dataview
List
FROM ""
WHERE contains(file.folder, this.file.folder)
SORT file.ctime DESC
LIMIT 5
```
## All

```dataview
LIST
WHERE contains(file.folder, this.file.folder)
```
