# Employee
##### This webapp kepps track of on and off duty employees. It also creates new employees and adds them the employees list.

## Technologies usen on the project
* Github
###### Github is a remote repository where we can store versions of our code.
* Gitlab
###### GitLab is a web-based DevOps lifecycle tool that provides a Git-repository manager providing wiki, issue-tracking and CI/CD pipeline features, using an open-source license, developed by GitLab Inc.
* HTML 5
###### HTML is a markup language tool where we write the text of our webpages. It Uses tags to organize the page in a  semantic meaning. Making easer to read and understand de structure of the page.
* JavaScript
###### JavaScript, often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
* Bootstrap
###### The world’s most popular framework for building responsive, mobile-first sites.
* Heroku
##### Heroku is a cloud platform as a service supporting several programming languages. It supports Java, Node, Scala, Clojure, Python, PHP, and Go.
* Handlebars
##### Handlebars.js is a popular templating engine that is powerful, simple to use and has a large community. With Handlebars, you can separate the generation of HTML from the rest of your JavaScript and write cleaner code.
* Mysql
##### MySQL is an open-source relational database management system.
---
* gif demo
![how it looks](https://media.giphy.com/media/PnJgFH3mxHZo1DKzMu/giphy.gif)
---
## The following piece of code uses handlebars variables that represent the values that going to be render to the page.
```handlebars
 <ul>
  {{#each employees}}
    {{#unless inactive}}
      {{> employees/employees-block active=true}}
    {{/unless}}
  {{/each}}
</ul>
<h2>Employees off duty!</h2>
<ul>
  {{#each employees}}
    {{#if inactive}}
      {{> employees/employees-block active=false}}
    {{/if}}
  {{/each}}
</ul>
```
---
> Author
 Alexei Dias
 Linkedin 
 https://www.linkedin.com/in/alexei-dias-b4054a164/