## Langenium

This is the repository for the Langenium server codebase. Content is provided by assets exported from the [Langenium Universe repo](https://github.com/paulbrzeski/Langenium-Universe) into the /public folder

Folder | Description
--- | ---
**[Controllers](/controllers)** | Server application logic
**[Models](/models)** | Currently mapped to Mongo, will be replaced by a json managing class called Data
**[Public](/public)** | Currently static files, will need to think about how to integrate Universe exported files with 3rd party files like THREE.JS 
**[Routes](/controllers)** | Currently a folder with manual routes, will change to a Class that imports route configs from .json files in /public
**[Styles](/controllers)** | Stylus files for the web client
**[Views](/controllers)** | Jade templates for the web client