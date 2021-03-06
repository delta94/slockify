## [Slockify](https://slockify.herokuapp.com/#/)

![Screen Capture](https://media2.giphy.com/media/Ke2HDUYBNi5LA7KyE9/giphy.gif)

Slockify is a clone of slack with styling and branding inspiraction from spotify. It's core features are live chat and the ability to support direct messages, group messages, and channels. This "flavor" of slack has one very special feature - each channel comes with its own playlist allowing users to collaborate and listen together. Users can add songs directly to the playlist by typing `/add_song {songId}` into their chat box.

Authentication is handled by a combination of rails and react without and additional libraries and at the current time there are no plans to include google/facebook SSO. 

The app runs on a pub/sub pattern where the users will subscribe to conversations and have live changes pushed to them directly by the server through websockets. The workflow is illustrated below.

![Slockify dataflow](https://i.imgur.com/eKRUWpr.png)



## Technology used by this project:
* Ruby v2.5.1p57
* Rails vRails 5.2.4.2
* babel
* babel-loader
* react
* redux
* react-dom
* react-redux
* react-router-dom
* redux-logger
* redux-thunk
* webpack
* webpack-cli
* jquery
* Postgresql
* redis - for production through heroku
* RSpotify
* Spotify Api
* Font Awesome

## Deployment Instructions

Make sure you have postgresql installed and running and then clone the repository.

In the root directory, run
`npm install`
`bundle install`

To create and seed the database run
`rails db:create`

Create MasterUser prior to seeding. Login with spotify. You want the user with user_id 1 to be your master user. This is the user the system will use to create all playlists. Look at MasterChannel::create_playlist for more information.

If you want to reset the database, run
`rails db:reset`

Run
`rails s`

In a new terminal window, run
`npm start`

Navigate to localhost:3000 in your browswer


# slockify

Public Domain images used
https://www.pexels.com/photo/man-in-black-crew-neck-shirt-wearing-black-framed-eyeglasses-4212883/
https://www.pexels.com/photo/shallow-focus-photo-of-woman-wearing-black-beanie-3804725/
https://www.pexels.com/photo/woman-in-black-fur-coat-wearing-white-headphones-3786670/
https://www.pexels.com/photo/man-wearing-denim-jacket-singing-on-stage-894156/
