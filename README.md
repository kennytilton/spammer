# Spammer

How can we use a Web app to get the word out on healthy, effective herbal remedies without being detected by Big Pharma? SpamUX, the front-end for Spammer (ne SpamGen)!

### Come on
More seriously, we have in one repo not one but two Leiningen projects comprising a full stack application, with the CLJS mxWeb&trade; data flow driven, HTML-like Web framework on the front end and a Compojure-wrapped silly web service to filter spammy emails on the back end. The back end project serves the front-end project, which provides a Web driver application to exercise the back end service.
#### The point
mxWeb provides a quicker way to author test/training/demo apps for normally invisible back-end services. 

Even better, although not demonstrated here, we have in the past built such front ends by [parsing YAML](https://github.com/lancepantz/clj-yaml) documentation of the service. We at once validate the YAML (how easily does doc get out of date?!) and provide a training/testing/debugging tool for a service: not sure how to shape a URI? Enter the parameters in a Web form and get back the corresponding URI. Then run it! But we are getting ahead of ourselves. Let us install the beast and see it run, then walk through the app and technology in detail.

## Installation

In one terminal, `cd` to wherever you would like to clone this, then:
````bash
git clone https://github.com/kennytilton/spammer.git <wherever>
cd <wherever>/resources/spamux
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

Also, on the whole, no I am not a graphic designer.
### The Un-framework
If you look at the code of the nested SpamUX project, you will see that the mxWeb API looks and work just like HTML/CSS. A design imperative for mxWeb is that it be accessible to graphics designers. Even the embedded code is plain CLJS, not a novel creation such as JSX. 

A clear indication of the thinness of this stack is that the ClojureScript compile to JS is the only pre-processing step required. Speaking of which, if you want to hack on Spamux, do `scripts/watch` istead of `scripts/build` in a terminal and you will get automatic rebuilds (but not hot loads, and before you try, last we looked `figwheel` has trouble with mxWeb macrology).
### Declarative and fast
mxWeb code is declarative and fast, but not via ReactJS. In fact, mxWeb is *more* declarative because the data flow framework covers everything, not just the view. And because Matrix is *true* reactivity at the property level, state propagation (including to the DOM) is minimal without the cost of VDOM generation and diffing.

We note that Facebook engineers now explicitly reject the reactive paradigm, specifically because of its eagerness which they feel gets in the way of optimizations they have planned. Our take is that the hard art of UI programming is managing state, and reactive programming does that. Mileage does vary on this.
### Single Source of Behavior
Contrary to the erector set "separation of concerns" approach popular today, mxWeb deliberately joins all concerns in one block of code. Want to know how a widget works, or is failing to work? Just look at its definition, where everything from HTML to CSS to the model will be apparent. Because these objects communicate via data flow, identifying each other with something like CSS descriptors, they are eminently composable and movable. An example is the complex [`job-status` component](https://github.com/kennytilton/spammer/blob/master/resources/spamux/src/spamux/component.cljs) used in two places to track two different operations conducted against the service.

Important to note here is that this SSB covers everything from model, to view, to callbacks, to database operations -- well, you get it. As [Buddha](https://en.wikipedia.org/wiki/Prat%C4%ABtyasamutp%C4%81da) and [Fred Brooks](http://worrydream.com/refs/Brooks-NoSilverBullet.pdf) noted, everything is connected. We find Web development much easier with tools embracing that.
### Transparent reactivity
You cannot really "notice" transparent reactivity because Matrix&trade; subscribe and notify are indeed transparent. Dependencies are automatically detected at run-time and state change is automatically propagated according to the resulting dependency graph. This one feature constitutes a complete paradigm shift.

Well, those who have coded pub/sub manually may notice its absence, but it is there. MobX, binding.scala, CLJS Javelin, and good old Garnet KR are other good examples of transparent data flow.
### Callback Heaven
Speaking of things you cannot see, peruse the Spamux code for `send-xhr`. What you will not see are any callback handlers. The [XHR library](https://github.com/kennytilton/xhr) handles those and converts them into data flow "pulses", the normal data change mechanism of Matrix.

The XHR library is a good example of how a little bit of glue code than get a challenging tool playing nicely in the data flow paradigm. When we say Matrix data flow covers everything, this is why: a one-time effort wraps any tool in the code needed to work within Matrix as a reactive component.

## Future work
The YAML integration, and someday The Grail: using data flow across Web sockects to simply even the simple XHR library.

## License

Copyright © 2018 Kenneth Tilton

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
