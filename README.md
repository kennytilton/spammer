# SpamUX

How can we use a Web app to get the word out on healthy, effective herbal remedies without being detected by Big Pharma? SpamUX!

## Installation

In one terminal, `cd` to wherever you would like to clone this, then:
````bash
git clone https://github.com/kennytilton/spamux.git
cd spamux
lein ring headless-server
````
Make note of the port (3000? 3001?) on which the server starts. It will look like this:
````bash
Started server on port 3000
````
Now open another terminal and:

````bash
cd <wherever>/spamux/resources/webmx
scripts/build
````
That takes a minute to complete. Now open a browser and navigate to `localhost:3000` or whatever port was observed above. You should see the header "Hello, SpamUX!?" and a tiny "Start" below that. I will try harder on the graphic design next time.

Now keep an eye on the terminal where you ran Ring and click "Start". You should see that button turn to `Stop!` and if you are quick you can. Otherwise let it run. Either way some statistics appear in the terminal.

Baby steps.

## Usage

RSN

## Future work

## License

Copyright © 2018 Kenneth Tilton

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
