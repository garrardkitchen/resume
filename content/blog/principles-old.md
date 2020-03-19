---
title: "Good Engineering - Principles"
date: 2020-01-27T11:49:14+01:00
draft: true
featured: false
tags: [Hugo, blogging, good engineering, principles]
---

Most Engineers are fully versed in the foundations of writing quality, efficient, succinct and testable code.  As a Principal Engineer, one of my responsibilities is to ensure that this baseline is (1) understood and (2) adhered to by all engineers. 

Here's a list of concepts that for me, make up good engineering principles:
- DRY (don't repeat yourself), YAGNI (you ain't going to need it), KISS (keep it simple, silly)
- SOLID principles (SRP, OCP, etc...)
- Refactor (refactor refactor), as you go and not only done as the last task
- Composition over inheritance (avoid class tree exploitation! - think Strategy pattern - GoF)
- Separation of Concerns (think MVC, CQRS, bounded context, etc...)
- Avoid premature optimisation (futile task until you've metrics to better inform you)
- Clean and readable code is always better than clever code (ask any engineer who has to extend or maintain a _clever_ piece of code!)
- Defensive coding (guard against invalid class method parameters and accidental null assignment to class properties instead of an equality condition!)
- Do no more, do no less (thank you XP!)
- Coding standards (provide a template of core standards then stand back and let the team thrash out the rest - wear protection!)
- Code reviews - Should only contain helpful and constructive comments and / or implementation questions. Not there to caress egos (that's for your mother to do!!)
- Testing (unit/functional, and proficient with concepts like TDD & BDD)

As a Principal Engineer, I consider the above as the foundation to writing quality code.  The objective of this list, in conjunction with the message I propagate via this list, during discussions, evidence from my own work and by leading from the front  within my role, is one of reminder to me and my colleagues of best practice and commitment to quality and good practice. As with all foundations, it forms the base from which more advanced concepts or approaches can be learned.  An important part of this practice is heuristic - enabling a person to discover or learn something by themselves.  So, how do I go about dong this?

These are some of the activities I execute to embed good engineering principles:

- 1-2-1
- Group conversations
- Advocate online learning platforms such as Pluralsight or Udemy.  For the more keen Engineer, I also recommend certification. YouTube is another favourite of mine. With YouTube, you are able to tag recordings, therefore building up a catalogue of materials that you can make public
- Workshops
- Brown bags
- Capture _How To Do's_ in wikis or similar
- Coding advice/tips (e.g. when to use Task instead of an Async method)
- Take the time to explain questions about implementation reasons in DVCS Pull Requests
- Share blog posts & other materials across multiple channels
- Compile a learning profile for an individual

The coding advice/tips above are interesting ones. As professionals we always want to improve our ability to code etc and in doing so we want our colleagues to benefit from our knowledge too.  I recently became reacquainted with coding katas.  As a black belt in Ju-Jitsu I am well versed in what a kata is.  Katas can also be used to remind, stretch and improve our core coding capability.  The last time I used a kata in programming was 10+ years ago. This was when I was first introduced to TDD.  A favourite development book of mine is **'The Art of Unit Testing'** by Roy Osherove. It was the first edition.  For many years I had it as a click thru purchase option on a previous site of mine. I've not really participated in many kata's since.  I have written a few though and now having been reintroduced to them and their potential, as a Principal Engineer I can see it as an invaluable tool for both providing the framework to assess an Engineer's current capability and as an aid to building an Engineer's skills when used with **pair programming**.

**Pair programming** is a wonderful technique for propagating skills.  Quite often, I find I only participate in pair programming in one of two use cases.  (1) if the subject I'm investigating is new (important to have shared knowledge) and (2) when I'm helping an Engineer to overcome a esoteric issue.  You know what they say? ...a problem shared is a problem halved!  However, now, I'll be including **Pair Programming** as part of my techniques to stretch the Engineer's muscle memory (including mine!).  

_Discussion point ..._

I'm sure I'm not alone here when I say, having the time available for 2 Engineers to code together for skills transfer etc is a challenging one.  An agile sprint doesn't really facilitate this.  This is something that I often refer to as having the 'space to learn'.  The pressures of a sprint often, sadly, works against this.  This is doubly as difficult, if your sprint is made up of technical debt, BAU, Ad hoc etc...  Time boxing 'effort' into percentages doesn't always present an obvious education path for your Engineers either.  Having a day (developer day or similar) dedicated to learning also never  really quite works out the way it's meant too, plus, 'a day'?!  In my experience this, and trying to cram _genius_ into a time box also never quite works either.  After all, you can't schedule _genius_, in the same way you can't guarantee that the best Engineers are in your locality, or that the best time for Engineers to work is between 9-5. 

_What is the answer? A mixture of all the above, at hock and as scheduled times, to ensure quality and advancement of skills._

When I do speak out regarding the above, I inevitably also lead this conversation into Engineering not having the kit [hardware & software] they need.  Engineers require the software and hardware they deem as necessary to be effective in their role.  I once gave an analogy of, not giving Engineers the right kit is like giving a roller brush and a Pogo stick to Michelangelo to paint the Sistine Chapel ceiling.  He'll manage it ... eventually, but the attention to detail and accuracy will be woefully inadequate.
