---
title: "Good Engineering - Principles"
date: 2020-01-27T11:49:14+01:00
draft: false
featured: false
tags: [Hugo, blogging, good engineering, principles]
---

Most Engineers are fully versed in the foundations of writing quality, efficient, succint and testable code.  As a Principal Engineer, one of my responsibilities is to ensure that this baseline is (1) understood and (2) adhered to by all engineers. 

Here's a list of concepts that to me make up good engineering principles:
- DRY, YAGNI, KISS
- SOLID principles (SRP, OCP, etc...)
- Rafactor (refactor refactor), as you go and not only done as the last task
- Composition over inheritance (avoid class tree explotion! - think Strategy pattern - GoF)
- Separation of Concerns (think MVC, CQRS, bounded context, etc...)
- Avoid premature optimization (futile task until you've metrics to hand)
- Clean and readable code is always better than clever code (ask any engineer whom has to extend or maintain a _clever_ piece of code!)
- Defensive coding (guard against invalid class method parameters and accidental null assignment to class properties instead of an equality condition!)
- Do no more, do no less (thank you XP!)
- Coding stadards (provide a template of core standards then stand back and and let the team thrash out the rest - wear protection")
- Code reviews - Should only contain helpful and constructive comments and / or implementation questions. Not there to curess egos (that's for your mother to do)
- Testing (unit/functional, and proficient with concepts like TDD & BDD)

As a Prinipal Engineer I consider he above as the foundations to writing quality code.  The objective of this list and the message I push with this list in my role is one of reminder and commitment.  As with all foundations, it forms the base from which more advanced concepts or approaches can be consumed.  An important part of this practice is heuristic - enabling a person to discover or learn something by themself.  So, how do I go about dong this?

- Share blog posts
- Group conversations
- 1-2-1
- advocate online learning platforms such as Pluralsight or Udemy.  For the more keen Engineer, I also recommend certification. Youtube is another favourite of platform of mine. With Youtube you are able to tag recordings, therefore building up a catalouge of materials.
- Workshops
- Brown bags
- Capture _How To Do's_ in wikis or similar
- Coding advice/tips (e.g. when to use Task instead of an Async method)
- Take the time to explain questions about implementation reasons in DVCS Pull Requests

The coding advice/tip aboue is an interesting one. As professionals we always want to improve and in doing so we want our colleauges to benefit from our knowledge too.  I recently became reaquainted with coding katas.  As a black belt in Ju-Jitsu I am well versed in what a kata is.  Katas can also be used to remind, stretch and improve our capabilities.  The last time I used a kata in programming was 10+ years ago. This was when I was first introduced to TDD.  A favourite development book of mine is **'The Art of Unit Testing'** by Roy Osherove. It was the first edition.  For many years I had it as a click thru purchase option on a previous site of mine. I've not really participated in many kata's since.  I have written a few though and now having been reintroduced to them and their potential, as a Principal Engineer I can see it as invaluable tool for both providing the framework to assess an Engineer's current capability and as an aid to building an engineers skills when used with **pair programming**.

**Pair programming** is another technique for propagating skills.  Quite often, I find I only gets into pair programming in one of two use cases.  (1) if the subject I'm investigating is new (important to shared the knowledge) or (2) when I'm helping an engineer to overcome a esoteric issue.  You know what they say? ...a problem shared is a problem halved!  A 3rd use case is to share or exchange knowing.  

I'm sure I'm not alone here when I say, having the time available for 2 engineers to code together for skills transfer etc is a challenging one.  An agile sprint doesn't really facilitate this.  This is something that I often refer to as having the 'space to learn'.  The pressures of a sprint often works against this.  This is doubly as difficult if your sprint is made up of technical debt, BAU, Ad hoc etc...  Timeboxing effort into percentages doesn't always present an obvious education path for your Engineers.  Having a day (developer day) dedicated to learning also never quite works out the way it's meant too plus, 'a day'?!  In my experience this and trying to cram _genius_ into a timebox never quite works.  After all, you can't schedule _genius_, in the same way you can't guarantee that the best engineers are in your locality, or that the best time for engineers to work is between 9-5.  

When I do speak out regarding the above, I inevitably lead this conversation into Engineering not having the kit [hardware & software] they need.  Engineers need the software and hardware they deem as necessary to be effective in their role.  I once gave an anology of, not giving engineers the right kit is like giving a roller brush and a pogo stick to Michelangelo to paint the Sistine Chapel ceiling.  He'll manage it ... eventually, but the attention to detail and accuracy will be woefully inadaquate.
