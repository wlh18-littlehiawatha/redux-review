# React Redux Review

## Description

This project is intended to provide another example of an implementation of React Redux. The master branch contains a project ready to implement React Redux. For a working version of the project, checkout to the `finished` branch.

## Instructions

Many people struggle to implement the redux pattern their first few times. The best way to become comfortable with it will be to repeat it several times. This repo will provide instructions walking through the process. For your information we have installed the following libraries from npm:

- redux
- react-redux
- redux-devtools-extension
- react-router-dom (already implemented)

### Step 1

Our first step will be to set up our reducer.

1. Inside of your `src` folder, create a `redux` folder. Inside of this folder create a file called `moviesReducer.js`.
2. Let's set up our reducer, it will contain 4 parts
   1. Our initial state which will need the following properties and default values: `title: ''`, `poster: ''`, `rating: null`, `movies: []`.
   2. An action constant called `"SET_MOVIE_INFO"`
   3. An action creator, a function called `setMovieInfo` that does the following:
      - Takes in title, poster, and rating as parameters
      - Returns an object containing two properties: type and payload
      - type will be our `SET_MOVIE_INFO` constant
      - payload will be an object containing our title, poster, and rating
      - Make sure to export this function
   4. Our reducer function which will take in state (this should default to initialState)and action. It will contain:
      - A switch statement that will switch on our action.type.
      - In that switch statement, set up a case for `SET_MOVIE_INFO` which will return an updated redux state with our title, poster, and rating properties updated (HINT: Use the spread operator to do this easily)
      - Don't forget to include a default case that will just return our state object
      - This function needs to be our default export from this file.

<details>
  <summary>moviesReducer.js</summary>

```js
```

</details>
