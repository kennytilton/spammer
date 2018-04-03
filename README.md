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

## Things to Notice
Here are some quick highlights to look out for in understanding what we saw above. Come back in a day or two to see this all fleshed out.
### Remaining work
I took this exercise a *lot* further than planned, but called a halt before providing running statistics during builds and better formatting/less flashing for the diplayed cleaning "fails".

Missing is the much ballyhooed YAML integration using CircleCI's parser, but we have done that before. Thanks to the parser and the declarative authoring mxWeb supports, this is a straightforward task in which the real work is getting the YAML documentation right. Nothing wrong with that as a constraint.

Also, on the whole, no I am not a graphic designer. And it shows.
### The Un-framework
If you look at the code of the nested SpamUX project, you will see that the mxWeb API looks and work just like HTML/CSS. A design imperative for mxWeb is that it be accessible to graphics designers. Even the embedded code is plain CLJS, not a novel creation such as JSX. 

A clear indication of the thinness of this stack is that the ClojureScript compile to JS is the only pre-processing step required. Speaking of which, if you want to hack on Spamux, do `scripts/watch` istead of `scripts/build` in a terminal and you will get automatic rebuilds (but not hot loads -- last we looked, `figwheel` is not as capable ad the `lein mies` scripts at compilation and cannot handle mxWeb macrology0.
### Single Source of Behavior
Contrary to the erector set "separation of concerns" approach popular today, mxWeb deliberately joins all concerns in one block of code. Want to know how a widget works, or is failing to work? Just look at its definition, where everything from HTML to CSS to the model will be apparent. Because these objects communicate via data flow, identifying each other with something like CSS descriptors, they are eminently composable and movable.
### Transparent reactivity
You cannot really "notice" transparent reactivity because Matrix&trade; subscribe and notify are indeed transparent. Dependencies are automatically detected at run-time and state change is automatically propagated according to the resulting dependency graph. But this one feature changes everything. 

MobX, binding.scala, and CLJS Javelin are other good examples of transparent data flow.
### Callback Heaven
Speaking of things you cannot see, peruse the Spamux code for `send-xhr`. What you will not see are any callback handlers. The [XHR library](https://github.com/kennytilton/xhr) handles those and converts them into data flow "pulses", the normal data change mechanism of Matrix.

## Future work


## License

Copyright © 2018 Kenneth Tilton

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
