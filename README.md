# CanvasDashboardIntegration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Instructions

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Project Structure

* **Src**
  * **app**
    * **components**: Charts and other fragments of the project
      * **engagement-chart**: Engagement levels on each social media platform. Engagement = how many replies or interaction with other users. This is not equal to reach level, which only associates with amount of views.
      * **keywords**: Rank of keywords being used the most by the user, also shows the amount of times being used.
      * **network-chart**: Who the user is connected with. There can be several groups of people the user is connected with, as shown by the different node colours.
      * **social-activity-chart**: Amount of social media activities over a timeline. Focus chart below the main chart can be used to zoom in, out, and to navigate along the timeline.
      * **social-reach-chart**: Reach levels on each social media platform. Reach = how many views on posts created in the different social media platforms.
      * **topic-analysis**: Analysis of how popular a topic is over a timeline. Focus chart is provided to zoom in, out, and to navigate along the timeline.
      * **twitter-topic-chart**: Analysis of how popular a topic is over a timeline in the Twitter platform. Shows the different popularity levels within different Tweet categories (original, replies, retweets, friends).
    * **containers**: Full page containers
    * **domain**: Domain / business logic level code
      * **data**: Mock data for simulation
      * **models**: Models for typings
      * **services**: Services to handle http requests

## To-do List
- **Manipulate DOM to add and remove components** (instead of using if statements to hide and show components).
>> **Helpful Resources**:
>> * https://medium.com/front-end-hacking/dynamically-add-components-to-the-dom-with-angular-71b0cb535286

- **Enable drag and drop movements to relocate components.**
>> **Helpful Resources**:
>> * https://valor-software.com/ngx-bootstrap/#/sortable
>> * Using ngx-bootstrap sortable, each component can be stored as a model and a html template can be created to display the panels.

- **Immediate Interaction between different components.** Currently, selection on keyword component can update social activity component but data change does not happen immediately (requires re-rendering of the page, e.g. going to another page first and going back to the page).
>> **Helpful Resources**:
>> * https://angular.io/api/core/EventEmitter
>> * **this.nvd3.chart.update()** needs to be called everytime a data change is detected. Otherwise, chart will only be updated on page re-rendering.