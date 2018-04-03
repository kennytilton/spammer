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
Now open a browser and navigate to `localhost:3000` or whatever port was observed above. Select a file from the drop-down menu and click "Start". You should see something like this:

![Spamgen UX screenshot](https://github.com/kennytilton/spammer/blob/master/resources/images/spammer-ux.jpg)

## Future work
RSN a complete walkthrough of features and underlying technology.

## License

Copyright © 2018 Kenneth Tilton

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
