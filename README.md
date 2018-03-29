# SpamUX

How can we use a Web app to get the word out on healthy, effective herbal remedies without being detected by Big Pharma? SpamUX!

## Installation

In one terminal, `cd` to wherever you would like to clone this, then:
````bash
git clone https://github.com/kennytilton/spamux.git <wherever>
cd <wherever>/spamux/resources/webmx
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

Anyway, click Start!. Now click "watch progress" to see running stats. They drop back down periodically because I have rigged the thing to keep processing the same small 300k batch repeatedly. Should look like this:

![Spamgen UX screenshot](https://github.com/kennytilton/spamux/blob/master/resources/images/sshot-1.png)

Now keep an eye on the terminal where you ran Ring and click "Start". You should see that button turn to `Stop!`.

## Future work
Actual updates during a batch.

User control over sampling rate.

User choice of a file to process

User option to create a new file.

## License

Copyright © 2018 Kenneth Tilton

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
