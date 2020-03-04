---
title: "What is good Engineering?"
date: 2020-01-27T11:49:14+01:00
draft: false
featured: true
tags: [Hugo, blogging, good engineering, practices, principles]
---

I was asked recently, "What is good Engineering?"  It's a great question.  One that instantly conjures up a plethora of visuals and emotions as, after all, your answer has to come from your experience, which by definition, will be subjective.  

I'd like to share with you how I see 'good engineering'.  I am currently employed as a Principal Engineer. I will use this perspective to help frame most of my answers.  Previous to this I held the position of was a CTO. It's fair to say, I've seen what both good and bad looks like and in many cases I've had the opportunity to make what is bad, good.

This is how I decompose good Engineering. Each area links through to a summary explanation and in each summary, there is a link to a fuller explanation. This explanation is captured in another blog post. So, if you just want the _skinny_, just stay on this page:

- [Principles](#principles)
- [Practices](#practices)
- [Culture and Collaboration](#culture-and-collaboration)
- [Agile](#agile)
- [The X factor](#the-x-factor)

#### [Principles]()

The more detailed explanation can be found here - [Good Engineering - Principles](/blog/principles).  In essence, I feel good engineering principles are all about ensuring all teams share a common foundation. This baseline will include a common approach to writing quality code, code that is efficient, code that does exactly what is required and nothing more.  Listed below are what I consider as core engineering principles.  I will go into more detail about the above ^^^ post:

- DRY (don't repeat yourself), YAGNI (you ain't going to need it), KISS (keep it simple silly)
- SOLID principles (SRP, OCP, etc...)
- Refactor (, refactor, refactor), as you go and not only done as the last task
- Composition over inheritance (avoid class tree explosion! - think Strategy pattern - GoF)
- Separation of Concerns (think MVC, CQRS, bounded context, etc...)
- Avoid premature optimization (futile task until you have metrics to inform you better) 
- Clean and readable code is always better than clever code (ask any engineer who has to extend or maintain a _clever_ piece of code!)
- Defensive coding (guard against invalid class method parameters and accidental null assignment to class properties instead of an equality condition!)
- Do no more, do no less (thank you XP!)
- Coding standards (provide a template of core standards then stand back and let the team thrash out the rest - wear protection!)
- Code reviews - Should only contain helpful and constructive comments and/or implementation questions. Not there to caress egos (that's for your mother to do)
- Testing (unit/functional, and proficient with concepts like TDD & BDD)

At the risk of repeating myself, I see these the baseline.  And if you're not quite there yet, that's ok too. People in roles like the Principal Engineer will help you; that's if a mentoring colleague hadn't got to you first (see the x-factor section). A core responsibility is also to educate & share.  This means to help Engineers to understand concepts and approaches in many areas of computing, including cloud, microservices and serverless architecture.

But it doesn't stop here.  We all forget _stuff_. This can be a piece of technical detail, a concept, coding technique, ... the list continues. As such, this journey must a continuous one.  It's constant cycle of re-enforcing and education on the _new shiny things_. 

#### [Practices]()

I go into more depth here - [Good Engineering - Practices](/blog/practices).  Good practices cover a huge expanse. It requires dedication, patience and exceptional planning. 

In the above link, I provided an extensive list covering what I believe are good engineering practices.  I have included the top 10 of these practices:

- All application and infrastructure as code capturing in a DVCS (eg git)
- Capture metrics that provide real-time statistics on both application and infrastructure performance (latency, errors, service saturation, etc...) & alerting (slack, sms, email)
- change/issue management
- Error management (adopting products similar to sentry.io to aggregate and provide succinct information in the run-up to an error. Cross SoC tracing)
- documenting RCA (reasons for a failure)
- Runbooks (actions required to deal effectively with a known situation)
- Automate everything!
- Share Technical rd maps, progress & changes
- Document Roles & Responsibilities of all team members
- Release management (hasslefree rollback & scheduled release when needed)

#### [Leadship]()

I go into more depth here - [Good Engineering - Leadership](/blog/leadership). 

Management, communicates and trust; the three tenets of 

#### [Culture-and-Collaboration]()

I go into more depth here - [Good Engineering - Culture and Collaboration](/blog/culture-and-collaboration). 

Integrity, Emotional Intelligence & wellbeing

TBC

#### [Agile]()

I go into more depth here - [Good Engineering - Agile](/blog/agile). 

TBC

