---
title: "What is good Engineering?"
date: 2020-01-27T11:49:14+01:00
draft: false
featured: true
tags: [Hugo, blogging, good engineering, practices, principles]
---

I was asked recently, "What is good Engineering?"  It's a great questions.  One that instantly conjures up a plethora of visuals and emotions as after all, your answer has to come from your experience, which by definition, will be subjective.  

I'd like to share with you how I see 'good engineering'.  I am currently employed as a Principal Engineer. I will use this perspective to help frame most of my answers.  Prior to this I was a CTO. It's fair to say, I've seen what both good and bad looks like and in many cases I've had the opportunity to make what is bad, be good.

This is how I decompose good Engineering. Each area links through to a summary explanation and in each summary, there is a link to a fuller explanation. This explanation is captured in another blog post. So, if you just want the _skinny_, just stay on this page:

- [Principles](#principles)
- [Practices](#practices)
- [Culture and Collaboration](#culture-and-collaboration)
- [Agile](#agile)
- [The X factor](#the-x-factor)

#### [Principles]()

A more detailed explanation can be found here - [Good Engineering - Principles](/blog/principles).  In essence, I feel good engineering principles are about ensuring all teams share a common foundation. This baseline will include a common approach to writing quality code, code that is efficient, code that does exactly what is required and nothing more.  What I consider as the core engineering principles are listed below.  I go into more detail in the above ^^^ post:

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

As I have said, I see these the baseline.  And if you're not quite there yet, that's ok too. People in roles like Principal Engineer will help you; that's if a colleague hadn't get to you first (see the x factor section). A core responsibilities is also to educate & share.  This means to help engineers to understand concepts and approaches in many areas of computing, including cloud, microservices and serverless architecture.

But it doesn't stop here.  We all forget _stuff_. This can be a piece of technical detail, a concept, coding technique, ... the list continues. As such, this journey is a continuous one.  It's constant cycle of reminding, and education on the _new shiny things_. 

#### [Practices]()

I go into more depth here - [Good Engineering - Principles](/blog/practices).  Good practices covers a huge expanse. It requires dedication, patience and exceptional planning. 

In the above ^^^ post, I provide a extensive list on what I believe are good engineering practices.  I have included the top 10 of these practices:

- All application and infrastructure as code capturing in a DVCS (eg git)
- Capture metrics that provide realtime statistics on both application and infrastructure performance (latency, errors, service saturation, etc...) & alerting (slack, sms, email)
- change/issue management
- Error management (adopting products similar to sentry.io to aggregate and provide succint information in the run up to an error. Cross SoC tracing)
- documenting RCA (reasons for a failure)
- Runbooks (actions required to deal effectively with a known situation)
- Automate everything!
- Share Technical roadmaps, progress & changes
- Documented Roles & Responsibilities of all team members
- Release management (hassle free rollback & scheduled release when needed)

#### [culture-and-Collaboration]()

I go into more depth here - [Good Engineering - Culture and Collaboration](/blog/culture-and-collaboration). 

TBC

#### [Agile]()

I go into more depth here - [Good Engineering - Agile](/blog/agile). 

TBC

#### [The X factor]()

Engineers want to help each other.  They want to write code and solve problems.  They want their work to mean something to the business.  They want what they create to be used.  Everywhere I have worked, engineers come together when sh*t breaks; during working hours or out.  Recently ????

This phonomena is common, irrespective of whether the company you work for is a good company or a bad company. 

TBC


