# Exercise Group 1

[Important! These instructions may need help. Please file an Issue if you have any problems with these exercises, including not being able to solve an exercise. As a pedagogic goad answers will not be provided, but you will get help from the author.]

## The goal
Our goal in this first group of exercises is to give the reader a hands-on feel for data flow programming, a subcategory of reactive programming in which individual properties are declared as functional formulas that are re-evaluated whenever necessary. 

We are becoming more and more convinced that one must write data flow code to understand it, and it *is* fun, so here goes.

## The app we will enhance
This Spammer project includes a Web app front end in `resources/spamux` served by this Compojure back-end project. The back-end server includes a mock spam generation capability and a utility to check that output to see if it will get us blacklisted. Both capabilities can be driven by the front-end, which you can explore once you complete this prerequiste:

> Build and run Spammer by following the instructions in [the main README](https://github.com/kennytilton/spammer/blob/master/README.md).

## The RFE
We are getting reports that users are accidentally creating huge files because they do not notice that volume input is for *thousands* of emails. We want, as a warning, to preview for the user the size of the file they will be building, and give it a green or pink background if the size is below/above 100mb.

The first goal is an HTML \<p> tag with the content "Projected file size \<N>mb." We want this to dynamically update as the user edits the email volume input field, disappearing altogether if the field is blank. ANd we want it hidden until they enter a value.

Some help:
* File sizes are roughly one megabyte per ten thousand emails.
* The \<p> tag is already in place ready for you to replace "Your solutuion here" with a CLJS form returning "Projected file size \<N>mb.".
* The Matrix incarnation of the DOM volume \<input> is returned by `(fmo "email-volume")`. Trust us on this at this early stage.
* The current value of the DOM volume widget can be accessed as (<mget V :value), where V is the Matrix incarnation of the \<input>. Note that the value will be the string value as offered by the DOM element.
Some things you will get for free:
* We track `oninput` instead of `onchange` to satisfy "as the user edits". 
* The `mset!>` setter initiates propagation of any change to any dependents, so that id done.
* The `<mget` getter sets up the dependency that gets its containing formula re-executed as needed. 
* A so-called "observer" provided by the mxWeb framework will relay the string to the DOM as it changes.

You will find more help and instructions in the source code itself if you execute the second rerequisite:

> git checkout ex-1

Now open [job_control.cljs](https://github.com/kennytilton/spammer/blob/master/resources/spamux/src/spamux/job_control.cljs) in your favorite editor and look for the string "Start Here" at about line 70. The instructions there are meant to take you the rest of the way. Again, please file an Issue if you get stuck on the instructions or exercises.

See you at the pub when you are done!

