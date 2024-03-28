# startup

A fun idea I had for my application is to make a fun cookie clicker game. There's nothing too crazy about it, just keep on clicking the center object and leveling up the more you do it to gain points faster and earn the highest spot on the scoreboard. It's very useful when you have nothing else to do and you want to find an easy way to be the best. Styles of this type of game, such as make it rain, were very popular back in the day and would be a fun idea to bring it back today!

<img width="296" alt="CookieClickerImage" src="https://github.com/ecra2001/startup/assets/150180720/a717fd29-bf28-437d-bf58-b006fcb98356">

## Key Features
You start of basic with a point per click on the cookies. As you rack up more points, you can upgrade your cookie with the points you have to earn more points per click or you can use your points to buy items that with automatically add to your point counter every second. You can see if you've made it to the leaderboard by checking the highscores.

## Representing All Technologies
### Authentication
Before playing the game, the user will be asked to create a new account or log in to a previous account.
### Database Data 
Data is stored into the highscore data base and is published for others to see.
### WebSocket Data
A rendering of data is received to the server when a new game is being playing or the highscore updates in real time.

## HTML Deliverable
- Created HTML pages for login, cookie clicker game, cookie clicker shop, and scoreboard
- Added links to navigate on any page and a link to github repository at the bottom of each page
- There is textual descriptions for the scoreboard and for each upgrade
- Haven't decided what images I wanted yet, but I have a cookie image for the cookie clicker button
-  Input box and submit button for login. More buttons for clicking cookie and upgrading in the shop
- The highscores in the scoreboard will be displayed in real time

## CSS Deliverable
- Header, footer, and main content body added
- Navigation links are located within the header of the page
- Window sizing looks good from large to small screens
- Page has consistent coloring and good white space
- Fonts and text colors are consistent
- As far as images, I still have a cookie button to represent the giant cookie, but I will replace it with an image soon

## JavaScript Deliverable
- When you press enter or login, it will take you to the play page.
- Tried to set up database for scoreboard, but this will be fixed with the database data later.
- I used the setInterval function to periodically increase score announcements. This will be replaced with WebSocket messages later.
- Score increases when the user clicks cookie, however, I'm having trouble figuring out an error where the upgrades in the shop don't increase the counter.

## Service Deliverable
- Node.js/Express HTTP service - done!
- Static middleware for frontend - done!
- Calls to thrid party endpoints - Displays random quotes under scoreboard.
- Backend service endpoints - Placeholders for login that stores the current user on the server.
- Frontend calss service endpoints - Used fetch function.

## Login Deliverable
- MongoDB Atlas database created - done!
- Stores data in MongoDB - done!
- User registration - Successfully creates a new account in the database.
- existing user - Stores the points under the same user if the user already exists.
- Use MongoDB to store credentials - Stores both user and their points.
- Restricts functionality - You cannot play cookie clicker until you've logged in.

## WebSocket Deliverable
- Backend listens for WebSocket connection - done!
- Frontend makes WebSocket connection - done! there seems to be an error in my game however that doesn't find the user's score. I didn't have time to fix that sadly.
- Data sent over WebSocket connection - done!
- WebSocket data displayed - All scores display in realtime.