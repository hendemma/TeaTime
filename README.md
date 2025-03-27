# Tea Time
A website for tea drinkers to discover new tea, rate tea and write messages.

## Built With
Tea Time uses microservice architecture and is built with the following:
* JavaScript
* Node.js
* Express.js
* MySQL
* SQL
* ZeroMQ
* Handlebars
* CSS
* HTML

## Functionality

### Main Program
* Provides the UI.
* Displays teas, organized into categories (type, caffeine and flavor).
* Has functionality to receive tea suggestions based on user preferences.

### Messages Microservice
* Receives a message entry about a tea from the main program.
* Sends all messages about that tea back to the main program.

### Ratings Microservice
* Receives a rating about a tea from the main program.
* Sends the average rating for that tea back to the main program.

### Moods Microservice
* Receives a mood from the main program.
* Sends back a tea suggestion based on that mood to the main program.
