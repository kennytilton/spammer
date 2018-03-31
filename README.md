# Spammer

How can we use a Web app to get the word out on healthy, effective herbal remedies without being detected by Big Pharma? SpamUX, the front-end for Spammer (ne SpamGen)!

## Installation

In one terminal, `cd` to wherever you would like to clone this, then:
````bash
git clone https://github.com/kennytilton/spammer.git <wherever>
cd <wherever>/spamer/resources/spamux
scripts/build
````
## Usage
To bring up the Web page UX for SpamGen:
````
cd <wherever>/spamux
lein ring headless-server
````
Make note of the port (3000? 3001?) on which the server starts. It will look like this:
````bash
Started server on port 3000
````
Now open a browser and navigate to `localhost:3000` or whatever port was observed above. You should see the header "Hello, SpamUX!?" and a "Start" button below that.
### Caution!
Clicking start causes it to run forever. And the button to turn to Stop! That is a hint.

Anyway, click Start!. Now click "watch progress" to see running stats. [But look fast -- they disappear when the batch completes. Re-doing all that now.] Should look like this (except I will be changing things all the time):

![Spamgen UX screenshot](https://github.com/kennytilton/spamux/blob/master/resources/images/sshot-1.png)

Now keep an eye on the terminal where you ran Ring and click "Start". You should see that button turn to `Stop!`.

## Future work
User control over sampling rate.

## License

Copyright © 2018 Kenneth Tilton

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
