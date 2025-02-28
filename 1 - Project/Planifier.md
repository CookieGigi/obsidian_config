---
category: "[[1 - Project]]"
---
```dataview
Table priority, deadline
where contains(file.folder, this.file.folder)
where !contains(file.folder, "4 - Archive")
where contains(type, "project")
sort priority
```










