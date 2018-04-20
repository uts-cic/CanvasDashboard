# CanvasDashboardIntegration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2. 

``` sh 
ng -v 


 Angular CLI: 1.7.2
 Node: 8.9.4
 OS: darwin x64
 Angular: 5.2.7
 ... common, compiler, compiler-cli, core, forms, http
 ... language-service, platform-browser, platform-browser-dynamic
 ... router

 @angular/animations: 5.1.0
 @angular/cdk: 5.0.0-rc.1
 @angular/cli: 1.7.2
 @angular/material: 5.0.0-rc.1
 @angular-devkit/build-optimizer: 0.3.2
 @angular-devkit/core: 0.3.2
 @angular-devkit/schematics: 0.3.2
 @ngtools/json-schema: 1.2.0
 @ngtools/webpack: 1.10.1
 @schematics/angular: 0.3.2
 @schematics/package-update: 0.3.2
 typescript: 2.4.2
 webpack: 3.11.0

```


## Instructions

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

To get started:

Install Node.js (https://nodejs.org/en/download/)
Install npm <> or update npm <>

Using the node.js command prompt install the Angular CLI globally: <npm install -g @angular/cli>
Check the version of node.js <node -v> - gives the version number such as v8.11.1
Check the version of npm <npm -v> - gives the version number such as 5.6.0

Using the node.js command prompt change directory to the cloned repo on your local machine. This will contains the .angular-cli.json file. npm uses this file to determine what packages it needs to install on your machine.
List the packages and their status using this command: <npm ls>
Install / update the packages to the folders using the command: <npm install> (this will run for about 10 minutes depending on bandwith/processing power)
Then update the packages using npm <npm update> - gives a final output line like --added 3 packages, removed 1 package and updated 5 packages in 73.173s

Run the following command <ng -v> to check the versions and that everything is installed correctly.

The final result shoudl look like this :-

    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/

Angular CLI: 1.7.2
Node: 8.11.1
OS: win32 x64
Angular: 5.2.9
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

@angular/cdk: 5.2.4
@angular/cli: 1.7.2
@angular/material: 5.2.4
@schematics/package-update: 0.3.2
typescript: 2.4.2
webpack: 4.5.0

Note: My install gave this line - webpack: error
To resolve execute <npm install --save-dev webpack> - This results in a succesful install with the final lines being "+ webpack@4.5.0 added 226 packages in 125.696s" and can be checked by rerunning the command <ng -v> and checking the versions as above. Note some version numbers will increse from those listed here. Do not be alarmed by this.

To start the code run the following <ng serve>
Accept the firewall rule change for both private and public networks


## Project Structure

* **src**
  * **app**
    * **components**: Charts and other fragments of the project
      * **engagement-chart**: Engagement levels on each social media platform. Engagement = how many replies or interaction with other users. This is not equal to reach level, which only associates with amount of views.
      * **keywords**: Rank of keywords being used the most by the user, also shows the amount of times being used.
      * **network-chart**: Who the user is connected with. There can be several groups of people the user is connected with, as shown by the different node colours.
      * **social-activity-chart**: Amount of social media activities over a timeline. Focus chart below the main chart can be used to zoom in, out, and to navigate along the timeline.
      * **social-reach-chart**: Reach levels on each social media platform. Reach = how many views on posts created in the different social media platforms.
      * **topic-analysis-chart**: Analysis of how popular a topic is over a timeline. Focus chart is provided to zoom in, out, and to navigate along the timeline.
      * **twitter-topic-chart**: Analysis of how popular a topic is over a timeline in the Twitter platform. Shows the different popularity levels within different Tweet categories (original, replies, retweets, friends).
    * **containers**: Full page containers.
      * **explore**: Allows searching for a specific topic, and shows results of people related to the topic. Users can establish connections with people shown in the results section.
      * **profile**: Shows a user's details. Allows users to select analytics to be shown in public profile. Aims to enable saving of dashboards and uploads of files to be shown in the portfolio section.
      * **social**: Social page which shows the instructor's view of the social dashboard. Instructors can enable / disable certain charts with the Content Manager and preset student dashboards by selecting components to be shown. Instructors can assign task for students. Once a task is assigned, students will be able to view and submit an answer in the student's view of social dashboard.
      * **social-student**: Student's view of the social dashboard. Students can modify the preset components. Once the instructor assigns a task for students, it can be viewed in this page and an answer can be submitted with the provided answer field.
    * **domain**: Domain / business logic level code.
      * **data**: Mock data for simulation. Form of data that can be accepted by each chart can be viewed in the mock data files.
      * **models**: Models for typings.
      * **services**: Services to handle http requests.

## Main Libraries
- [**NVD3**](https://github.com/krispo/ng2-nvd3): All charts in this project are created with NVD3 charting library, which is based on the D3.js charting library. Therefore, D3.js library is also installed in this project and can also be readily used to create more charts.

- [**ng-bootstrap**](https://ng-bootstrap.github.io/#/home): Most components in this project are created with ng-bootstrap library, which is based on Bootstrap 4.

- [**Angular Material**](https://material.angular.io/): Some components such as checkbox and Snackbar messages are created using Angular Material as they are not readily available in ng-bootstrap.

- [**Moment.js**](https://momentjs.com/): Used to easily manipulate dates to be displayed.

## To-do List
- **[PRIORITY]** **Manipulate DOM to add and remove components** (instead of using if statements to hide and show components).This is important to significantly cut down the amount of codes required to show or hide components.
>> **Helpful Resources**:
>> * [How to dynamically add components to DOM](https://medium.com/front-end-hacking/dynamically-add-components-to-the-dom-with-angular-71b0cb535286).

- **Enable drag and drop movements to relocate components.**
>> **Helpful Resources**:
>> * [Bootstrap Sortable](https://valor-software.com/ngx-bootstrap/#/sortable).
>> * Using ngx-bootstrap sortable, each component can be stored as a model and a html template can be created to display the panels.

- **Immediate Interaction between different components.** Currently, selection on keyword component can update social activity component but data change does not happen immediately (requires re-rendering of the page, e.g. going to another page first and going back to the page). The aim is to enable interactions between different charts.
>> **Helpful Resources**:
>> * Might be possible to implement using [EventEmitter](https://angular.io/api/core/EventEmitter).
>> * `this.nvd3.chart.update()` needs to be called everytime a data change is detected. Otherwise, chart will only be updated on page re-rendering.

- **Create more charts.** Currently all charts are created using NVD3, but D3.js can also be used as it is already installed in this project.
>> **Helpful Resources**:
>> * [Github Example](https://github.com/datencia/d3js-angular2-example) on how to use D3.js in Angular.

- **Locking of dashboard configurations.** Allow instructors to set certain charts as mandatory in the dashboards so that students are not able to modify it. 

- **Saving and sharing of dashboards.**

- **Associate a dashboard preset with weekly tasks.** Allow instructors to preset a dashboard configuration and set a weekly task for it. 

- **Display tasks, video guide, and guided tour** in the dashboard (student's view) to guide students on what to do, as well as how to use and interpret the dashboard configurations to complete the given task.

- **Create a section for students to answer task questions / write reflections in the dashboard.**
