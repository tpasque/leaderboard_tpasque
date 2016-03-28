# leaderboard_tpasque
Custom built leaderboard option for TrainHeroic Code Challenge.

This is my take on a leaderboard from the data object provided in the code challenge.

A leaderboard should be clear and concise with visually pleasing UI/UX to engage the users.  The leaderboard should display 6 athletes at a time and then interval through to the next set of athletes, based on rank.  The leaderboard cycles every 7 seconds (including the very first load on the page, so please excuse the first delay - past this, it will render as expected).

#Deployed URL
https://leaderboardtpasque.firebaseapp.com/#/

#Deploying on local machine and local environment

1. Clone this repository to your local machine - https://github.com/tpasque/leaderboard_tpasque
2. This application is built using Angular.js.  In order to test the application locally, I set up a free URL through Firebase with the following steps:
  1. Create a new App in your Firebase account
  2. In the folder you created your git clone, do "firebase init" and follow the prompts.  My public environment is "./"
  3. Do "firebase serve" in the project folder.  My machine creates a localhost:5000 environment to view the application on.
