# weather-dashboard

# Weather Dashboard

## Description

My Weather Dashboard application can retrieve the current and five day forecast for any city in the world. I made this because as a lover of travel I know how imperitive it is for a traveller to be able to check forecast of where they currently are, or for where they are considering heading. 

When the user searches a city the application uses the OpenWeather API to return the forecast results. I learnt a lot about 

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

---

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Features] (#Features)
- [Credits](#credits)
- [License](#license)

---

## Installation

Ideally you have an up to date browser. You can run the application one of two ways. The first is by visiting the deloyed application link below:

The second is by cloning the repo using the SSH key onto your local machine and then launching it through your code editor. Please note you need to keep Bootstrap, jQuery and momentJS linked at the bottom of the HTML file for it to function as intended.

---

## Usage

On the landing page the user is met with a mainly empty page due to the results containers being hidden. The user enters a city in the input area and hits the "Search this City" button. They are then presented with the current day result and five day forecast for the city they have searched. The city is appended to a button so they can re-click and load the results if needed (this is still very buggy on loading, will be debugged at a late date due to time constraints). 

---

## Features

One feature of the weather dashboard is the appending of a weather icon to the five day forecasts, and current forecast so the user can get an idea of the weather at a glance. Note the icon for the first day result out of the five days does not appear due to a weird bug.  Have tried a lot of work arounds but for MVP had to let it go unquashed! To be worked on in future updates but had to comment it out of the HTML due to it breaking the rest of the div....

Second feature is the background of the UV index result background is coloured to align with the okay, not okay, very not okay levels of UV bearing down on peeps skin.

A third feature is the ability to click on a previously searched city and revisit that result. Although this feature is still buggy and needs to be edited before it functions properly.

---

## Credits

https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys
https://openweathermap.org/api/ (mainly the weather, forecast and UV ones)
https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon
https://stackoverflow.com/questions/5394951/adding-and-removing-style-attribute-from-div-with-jquery
https://api.jquery.com/ (for soooooo many bits and bobs)
https://getbootstrap.com/docs
https://momentjs.com/docs/
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
https://stackoverflow.com/questions/53384254/click-not-registering
https://www.kindpng.com/free/weather-icon/#google_vignette (for the favicon base design)

There's definitely some I missed... 

---

## License

This application has a standard MIT License which can be viewed here: https://github.com/RosemaryJF/weather-dashboard/blob/main/assets/LICENSE

---