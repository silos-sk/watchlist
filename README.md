## React Web App: <br/>My Dramas Collection

This is a simple personal web application that features a collection of Korean dramas that I have watched or planning to watch in the future. My aim in creating this app was to learn the fundamentals of React, refresh my other tech stack skills, along with meeting a need to have an app to track my growing Korean drama watchlist and share my recommendations to my social circle.

## Tech stack used
MERN (MongoDB, Express, React, NodeJS)

## Starting the web app locally
Clone the repository<br />
Install dependencies:<br/>
npm install<br/>

<b>Start the backend:</b> <br/>
cd watchlist/api <br />
npm run start <br />
Success message should read: 'MongoDB database connected. Server running on port 8082'<br />

<b>Start the frontend:</b><br/>
cd watchlist/ui/watchlist-app<br />
npm run dev<br />
Success message should read:  <br />
  ➜  Local:   http://localhost:5173/<br />
  ➜  Network: use --host to expose<br />
  ➜  press h + enter to show help<br />

To see the working app, use the browser to open http://localhost:5173/ <br />

## Demo Video
This is a video where I walk through the working app.
[Software Demo Video](http://youtube.link.goes.here)

## Web Pages
### Home - Dramas Collection
This page contains my current drama watch list which is dynamically created from a collection in a MongoDB database.

### Add Drama Page
This page allows to create a new drama to add to the collection into the database.

### Drama Detail Page
This page displays the information about a certain drama. This is also where the 'Edit' and 'Delete' features can be accessed to either update the current drama information or delete the entry.

### Edit Drama Page
This page is where the information can be updated on a specific drama.

# Development Environment

On the frontend, I used React along with the React Router library to allow the multi-page navigation experience.

For the backend, I used NodeJS, Express, and MongoDB, along with libraries such as body-parser, axios, dotenv, mongoose, mongodb, mongoclient,cors, and validatorjs.

# Useful Websites

{Make a list of websites that you found helpful in this project}
* [React Tutorial App](https://react.dev/)
* [React Tutorial App](https://react-tutorial.app/)
* [Freecodecamp - Learn React](https://www.freecodecamp.org/news/how-to-learn-react-step-by-step/)
* [LogRocket - React topics](https://blog.logrocket.com/dev)
* [TheMovieDB - Drama info](https://blog.logrocket.com/dev)

# Future Work

{Make a list of things that you need to fix, improve, and add in the future.}
* Use React Form library to improve forms to include validation and update form field data types
* Include a Star Rating system
* Include 'Adding to favorites' feature
* Include Reviews feature 
* Extend creating user authentication for multiple user integration