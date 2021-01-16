# weathervibe
A website that builds a Spotify playlist for you, based on the weather at your location. 

This project works completely in the front end; that is, it's just a website with HTML, CSS, and pure JavaScript. This is made possible by a combination of [JMPerez's spotify web API javascript wrapper](https://github.com/JMPerez/spotify-web-api-js), as well as a tool called [Browserify](http://browserify.org/) that lets JavaScript modules run solely in the browser, which allows us to use the wrapper browser side. 

The weather API we use is [7timer.info](http://7timer.info/index.php?lang=en); however, 7timer unfortunately does not support HTTPS. We're able to avoid mixed content issues and stay secure thanks to an [HTTPS proxy provided by GitHub user ptdien.](https://gist.github.com/ptdien/3aa8cc3102e0a9ab0fa6bf29d44ffc86).


