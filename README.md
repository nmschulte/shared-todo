shared task list application
========

Overview / Purpose
----
"Title is misleading!"  No, really, the project title is misleading: this is a shared task list application, but the
goals are much bigger than that.  This project is to serve as a sandbox for playing with the supervising presenter
pattern in front-end development with unopinionated/unprescriptive (MV*) toolkits/non-frameworky frameworks, like
Backbone.js and Ampersand.js.  So really, this project is about learning and should be seen as a tool to help convey
this knowledge.

Why the supervising presenter pattern?  This pattern deals with concerns that tend to only be an issue in "larger"
single page applications, beyond those needed to support a static version of a simple "todo list" application, like
Backbone.js's TodoMVC example.  The term "larger" is a loose one, and I suspect we/I really mean longer-lived, more
interactive/rich; *thick*.


(Use Case) Design Goals
----
As outlined above, it seems we first need a more complex example definition.  What kind of complexity?  Well, mainly,
data interaction, and specifically, interaction/updates that aren't from the browser's user via the DOM.  This could be
timed events from JS land or such, but my mind starts leaning toward video-game/render-loop territory when I think
about real applications that work that way (which likely have their own set of concerns dealing with renderloop ideas
and evented I/O).  Otherwise, network I/O from e.g. a multi-user system seems like it would fit the bill nicely.
Pairing that with a UX that emphasizes a rich/thick-client interaction, and I think we can expand the common todo list
editor example to suit while still keeping it approachable.

I've outlined a more complex shared task list application definition in the
[application_features](./application_features) file.  Below is the primary bit of the use case in diagram form (made
from yUML; see the application definition doc for more info).  I'm not sure I got the relations correct, but I think so.

![use_case_diagram.png](https://github.com/nmschulte/shared-todo/raw/master/use_case_diagram.png)


possible (clever?) project names
----

* Shared Tasking
* Task Sharing
* WeTask / TaskUs / TaskMe
* ShareTask


initial thoughts
----
I think if the application has features that deal with data in a "real-time" aspect, the real-time complexity should provide a
better sampling/basis to exemplify.  Updates to data from a source other than the DOM (the immediate user) are more
complex than can be easily (efficiently?) resolved with the simplified MV* patterns most smaller "todo example" (and
real applications in general) follow (where the View is overly concerned, if you will).

Looking at the "supervising presenter" (or "supervising controller", as Martin Fowler calls it) pattern, I think it's a
good candidate.  I'll be using this to see how that pattern works out, and perhaps make modifications as I see fit.

Help is welcome...
