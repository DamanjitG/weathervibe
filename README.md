# weathervibe
A website that builds a Spotify playlist for you, based on the weather at your location. 

This project works completely in the front end; that is, it's just a website with HTML, CSS, and pure JavaScript. We use implicit grant flow in order to be able to securely call the Spotify API without exposing our secret key; this requires the user to log in to spotify. 

The weather API we use is [7timer.info](http://7timer.info/index.php?lang=en); however, 7timer unfortunately does not support HTTPS. We're able to avoid mixed content issues and stay secure thanks to an [HTTPS proxy provided by GitHub user ptdien.](https://gist.github.com/ptdien/3aa8cc3102e0a9ab0fa6bf29d44ffc86).

This project was completed during Hack the North 2020++.


