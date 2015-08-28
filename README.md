shared task list application
========

Getting Started
----
1. First, read [this document](./README.md) (sorry, it's a bit scatter-brained at the moment).
2. Next, look at [the use case design detals](./application_features) and the associated [use case
rendering](./use_case_diagram.png).

Overview / Purpose
----


(Use Case) Design Goals
----
* works in real-time as much as possible
* a more complex "todo list demo" application, making it a better candidate to exemplify solutions to complex problems
generally only exposed in larger single page applications (thick-client).


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
