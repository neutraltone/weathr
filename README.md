# Weathr

A simple HTML5 Weather app with a clichéd name (because weather.bitbucket was taken).

## Notes

Weathr takes advantage of the Geolocation API, due to this it is currently recommended that you view this app in a modern browser with the latest support such as [Chrome](https://www.google.com/chrome/), [Canary](http://www.google.co.uk/intl/en/chrome/browser/canary.html) or [Firefox](http://www.mozilla.org/en-US/firefox/new/) (until the kink has been ironed out).

## Setup

There are a few simple steps steps to follow in order to install Weathr.

### Fireshell

Weathr is built on FireShell [![Build Status](https://travis-ci.org/toddmotto/fireshell.png)](https://travis-ci.org/toddmotto/fireshell) by [Todd Motto](http://toddmotto.com/)

* Fireshell Source: [github.com/toddmotto/fireshell](http://github.com/toddmotto/fireshell)
* Fireshell Homepage: [getfireshell.com](http://getfireshell.com)
* Fireshell Twitter: [@getfireshell](http://twitter.com/getfireshell)

### Installation steps

1. Install [Node.js](http://nodejs.org/download), [Sass](http://sass-lang.com/tutorial.html) and [Git](http://git-scm.com) on your machine. If you're a Windows user you'll also need to install [Ruby](http://rubyinstaller.org/downloads).
2. [Install Grunt](http://gruntjs.com/getting-started) using `npm install -g grunt-cli`. You may need to use `sudo` in front of the Grunt install command to give it permissions. For Windows tips with Grunt checkout their [FAQs](http://gruntjs.com/frequently-asked-questions).
3. Fork/Clone/Download the Weathr repository into your machine, you should hopefully see all the files and folders.
4. Navigate to the `grunt-dev.command` file and double-click it. This will open the Terminal and install the necessary `node_modules` folder, which are FireShell's dependencies. The `grunt-dev.command` file includes a `sudo` prefix so you'll need to enter your password to install.
5. The `grunt-dev.command` should install all the dependencies, which you can check back to see in your folder, and then run the commands associated with FireShell, and automatically open a new FireShell project running on `localhost:9000`.
6. From now on, just double-click the `grunt-dev.command` file to automatically run FireShell's Grunt tasks, it's setup using the following script to automatically `cd` you into the correct directory and run the necessary commands:

````sh
cd "$(dirname "$0")"
if [ ! -d node_modules ];then
    sudo npm install
fi
grunt
````

more information about fireshell can be found in the [documentation](https://github.com/toddmotto/fireshell/blob/master/docs/DOCS.md).

## Roadmap

Future updates Weathr.

* Convert all jQuery into vanilla JavaScript.
* Integrate current location map. Use 3D flip transitions to make map appear to be on the back of the weather information screen.
* Enable location lookup via input box.
* Choose a suitable open source license.

## Acknowledgements

### Frameworks
* [Fireshell](https://github.com/toddmotto/fireshell/) by [Todd Motto](https://github.com/toddmotto/).
* [Bourbon](https://github.com/thoughtbot/bourbon) by [Thought Bot](https://github.com/thoughtbot/).

### Fonts
* [Weather Icons](https://github.com/erikflowers/weather-icons) by [Erik Flowers](https://github.com/erikflowers/).

### Photography

* [Unsplash](http://unsplash.com/)
* [GunnerVV](http://www.flickr.com/photos/44861310@N03/)
* [Mike Lewinski](http://www.flickr.com/photos/ikewinski/)
* [S Marcu](http://www.flickr.com/photos/silent-shot/)
* [Cyron Ray Macey](http://www.flickr.com/photos/cyron/)
* [Horia Varlan](http://www.flickr.com/photos/horiavarlan/)
* [Zengame](http://www.flickr.com/photos/zengame/)
* [UrPic2](http://www.flickr.com/photos/ontcopper/)
* [Zoriah](http://www.flickr.com/photos/zoriah/)
* [Becky](http://www.flickr.com/photos/this_amuses_me/)

## License

Copyright (c) Tony Phipps 2014