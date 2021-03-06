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
