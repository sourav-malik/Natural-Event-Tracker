# Natural Event Tracker

> A browser-based Natural Event Tracker using React and the NASA EONET API to fetch data and plot events onto Google maps. Once events have been plotted onto the Google
> maps API, users can toggle which events they want to see (wildfires, storms,icebergs or active volcanos). Users are also able to click on event icons to see a box with additional information.

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Features](#features)

## General info

This project takes advantage of React to plot events fetched from NASA EONET API gathered from the Earth observatory onboard the International Space Station (ISS).

When the page is loaded the user is presented with a loading screen allowing the data to be fetched in the background.

Once the data is fetched the loader is replaced with the Google maps component.


## Technologies

- React
- JavaScript
- EONET API
- Google Maps React
- HTML5

## Features

List of features

- Data fetched using Javascript Fetch method.
- Working error catching.
- Buttons to toggle events
- useContext hook used to manage states globally.
- Google maps React implementation
