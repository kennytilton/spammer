# Spammer

How can we use a Web app to get the word out on healthy, effective herbal remedies without being detected by Big Pharma? SpamUX, the front-end for Spammer (ne SpamGen)!

### Come on
More seriously, we have in one repo not one but two Leiningen projects comprising a full stack application, with the CLJS mxWeb&trade; data flow driven, HTML-like Web framework on the front end and a Compojure-wrapped silly web service to filter spammy emails on the back end.

The back end project serves the front-end project, which provides a Web driver application to exercise the back end service.
#### The point
mxWeb provides a quicker way to author test/training/demp apps for normally invisible back-end services. 

Even better, although not demnstrated here, we have in the past built such front ends by [parsing YAML](https://github.com/lancepantz/clj-yaml) documentation of the service. We at once validate the YAML (how easily does doc get out of date?!) and provide a training/testing/debugging tool for a service.

Not sure how to shape a URI? Enter the parameters in a Web form and get back the corresponding URI. Then run it! But we are getting ahead of ourselves. Let us install the beast and see it run, then walk through the app and technology in detail.

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
