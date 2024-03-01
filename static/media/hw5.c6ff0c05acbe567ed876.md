# HW 5: OpenWeatherMap API: Help Ddoski with his code!

## Ddoski needs your help!
Ddoski made this cool app that lets you find the weather in a certain city/country using the OpenWeatherMap API.

<video width="100%" controls>
  <source src="/assets/hw5/finished-app.mp4" type="video/mp4">
</video>

But he lost some parts of his code in a storm!

_[Help him. (Download skeleton code here.)](assets/hw5/sp24-hw5-skeleton.zip)_
**Note: Only edit script.js.**

## Some Notes on Homework
If you need help with the homework, make a post on Ed or pull up to office hours (second half of lab).

# CLUE 0
_Create an [OpenWeatherMap](https://openweathermap.org/) account. Use the default API Key or generate a new one by navigating to your profile and "My API Keys". Input your API Key into scripts.js as a <mark>string</mark>._
<img src="/assets/hw5/api-key.png" style="width: 130%; padding: 20px 0;"/>

# CLUE 1
_How do you access HTML elements in the DOM? Reference Slide 27 of [Lab 3 Slides](https://docs.google.com/presentation/d/1EiH2TaVNuTlPSAgVICgpqxkasS5FHBkQJEB_OgLjZGA/edit#slide=id.g283ffe34518_0_9)_

# CLUE 2
_Here is the format of the URL for an API call to get coordinates from a location name. Everything in orange text are query parameters. <mark>Ignore state code, country code, and limit.</mark> Be sure to set the <b>q</b> parameter to the <i>city</i> argument that's passed into getLatLon and set the <b>appid</b> parameter to your unique apiKey._
<img src="/assets/hw5/geocoder-api.PNG" style="padding: 20px 0;"/>

# CLUE 3
_What built-in JavaScript function and keyword do we use? Check out Slide 21 of the [Lecture 5 Slides](https://docs.google.com/presentation/d/1ha5HZkX6n1dUgOoSL7OravcbBiPFDkwXZZjLxDOp7Ho/edit#slide=id.g248caee9932_0_8)_

# CLUE 4
_Try this URL in Postman: **http://api.openweathermap.org/geo/1.0/direct?q=Berkeley&appid=YOURAPIKEYHERE** after inserting your API key to get the coordinates of Berkeley and check what the response looks like. The response object is contained in the variable <b>data</b> on Line 32 of the skeleton code. In Lines 36 and 47, index into the  <b>data</b> variable, access its "lat" and "lon" properties, and assign them to "lat" and "lon"!_

_Hint: JavaScript arrays are enclosed in square brackets []. You'll have to index into an array!_

Here is a reminder on how to index into arrays.
```javascript
// Here, we've created a list:
const crazyList = [{myDog: "poodle"}, "G", 3.14, ["three figs", true], "CLK-to-q"]

// Let's index into that list:
const firstElement = crazyList[0];
console.log(firstElement) //This prints the object {myDog: "poodle"} to the console.
```

Here's a reminder on how to access properties from JavaScript objects.
```javascript
// Here, we've created an object:
const person = {
  firstName: "John",
  lastName : "Doe",
  age: 33
};

// Let's access properties from that object:
const fullName = person["lastName"] + ", " + person["firstName"];
console.log(fullName) // This prints "Doe, John" to the console
```

# CLUE 5
_Do the same thing here for the second API call, except now you have to make a new URL that will get current weather data from the latitude and longitude coordinates! Reference the documentation below._
<img src="/assets/hw5/current-weather-api.PNG" style="padding: 20px 0;"/>

# CLUE 5.5
_Try this URL in Postman: **https://api.openweathermap.org/data/2.5/weather?lat=37&lon=-122&appid=YOURAPIKEYHERE** after inserting your API key and check what the response looks like. This url will get the weather at lat=37 and lon=-122. Then, set "main" and "description" in the return object to be the appropriate values by accessing properties from <b>data</b>._
_Hint: Once again, look closely at the brackets! Arrays are enclosed by square brackets [] and objects are enclosed by curly brackets {}._

# CLUE 6
_Look at the data type of the return value of the getLatLon function that you wrote earlier. Hint: it returns an object! In your code, access the appropriate properties from the <b>coordinateData</b> object._

# CLUE 7
_Access properties of the <b>weatherData</b> object and display them in your HTML. Here is an example of the innerHTML property._

```javascript
// Selecting an element from the DOM
const htmlElement = document.getElementById("thisID");
// Setting that element's text to "Updated Text!"
htmlElement.innerHTML = "Updated Text!";
```

# Submission
To submit the homework folder, you have to zip it first.

**To zip a folder:**
_**Windows:** Right-click the folder **hw5-skeleton**, select (or point to) Send to, and then select Compressed (zipped) folder._
_**macOS:** Control-click the folder **hw5-skeleton** or tap it using two fingers, then choose Compress from the shortcut menu._

Upload the .zip file to [Gradescope](https://www.gradescope.com/) :)
