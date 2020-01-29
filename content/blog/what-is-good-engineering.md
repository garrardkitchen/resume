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
- [Collaboration](#collaboration)
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

I have a fuller explanation can be found here - [Good Engineering - Principles](/blog/practices).

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

#### [Collaboration]()

TBC

#### [Agile]()

To keep you on track, you need a framework.  A framework that helps you as a team member, to stay focused and be reminded of that iterations goals.  As the name suggests, it has to be an agile framework, one that is robust enough to change assist the needs of the engineers.  One where the definition of done is reviewed as a matter of protocol and modified accordingly if the current definition does not cater for a new situation or observation.

An affective team will subscribe to the agile manefesto. This ensures the work that is embarked up on and completed, meets the needs of the stackholders (the people the POs capture the requirements from).  As a team member, you produce work that meets a specific requirement.  This requirement will have been captured (if business requirement) by a Product Owner interpretting the requiremnt from a/the stackholders.  The in theory ensures what was asked of from business is propagated accurately down to the worker bees (engineers in this case).

If for any reason requirements are not meet, the agile framework will be robust enough to capture these reasons so when the roll up reports are created, planned vs achieved will be obvious and so will the reason for why there was a low achieval percentage.  Having the capability is important.  Without it, you'll never known and by 'you' I mean the senior stakeholders (often business owners) why sh*t's not getting done.

It is also incredibly important to get your stakeholders involved in the process.  The idea of a stakeholder just planting a seed then disappearing, to reappearing in then 'rip your team a several new ones' because their vision was not actualised is unacceptable.  I'm not saying they need to be part of the process (inceptions or daily meetings). They just need to be present during the requirements stage.  You can't just take a single conversation and go off and deliver something.  It must be played backed and confirmed that this is the requirement(s). It is paramount to reply back to them constantly during the requirement phase how their requirements are being intepretted.  Once captured by the POs, it can be them be documented in a series of sprint stories (or wider - think epic and beyond).  My view however on an undertaking is quite simple.  You do the work necessary to get something that addresses part of the biggr picture. Some people call this the MVP (Minimum viable product).  Sometimes this can be too big and could potentially be a huge waste of time.  Whether you're providing solutions to the enterprise or external paying customers, you must release and test regulary to check if this is actually what your _customers_ want. I realise that this is common sense but if you take an age to create then release it and nobody is willing to use/pay for it then it's a massive of time and money and it could easily drive you out of business.  I've seen this play out too many times to mention.  If you release small features often, you keep the interest and ???? of your customers.

Recently, there was a situation that we as Engineers didn't like.  In short, the teams velocity wasn't being fairly reflected because of blockers and work rolling into the next sprint.  Story points would magically disappear.  This observation and evolution steared emoitions from several quarters.  Thankfully, we have a robust and Engineer ??? Head of Delivery whom happens to be the Scrum Master for a Team I'm currently assigned too.  He without be prompted instictly knew there was an issue and overnight came up with a solution which was the delight of the team's Tech Lead and associated team members.  At the same time, due to the framework we operate in, were able to come up with another solution to a situation that was getting out of hand.  As a team, we were getting thrashed by requirements.  We were completing more than planned meaning we'd dip into the backlog before the end of the current sprint.  Although perceived as kudos, it didn't leave time for engineers to get closure on itches they needed to scratch, space for education and other heuristic related activities or time to evaluate and address architecture improvements.  As a positive consquence having had a group discussion where everybodies voice was heard, we reach a positive resolution for both the business and the Engineering team.  In both of these situations explained here, the Definition of Done (DoD) was revised.

One thing I do feel strongly about and that is this.  A Scrum Master plays pivotal role.  It is a full time activity and this cannot be a role that in part is responsibility of a Tech Lead.  Knowing the importance of this roll during the sprint, you can't have an Engineer be an Engineer as well as a Scrum Master.  If you're doing Scrum right, then you need a dedicated Team SM. Otherwise, you're taking just way too much time away from your Tech Lead which isn't fair to them, the team or the business.

As part of the story creation process, after the story description (AS A, I WANT, SO THAT) we capture the Acceptance Criteria ('ACs' for short).  It is here where we detail what the story needs to satisfy into order for the story to be deemed completed by the Engineer.  A constant failing in this area is the lack of tests; or more appropriately, to omition of tests.  Let's say you're a newbee.  You have very little domain knowledge or understanding of the system you're now responsible for.  Tests added to the story would prove invaluable to this neebee.  It will also provide guidance on how to prove that your work fits the bill back creating adaquate unit tests as well as helping with furthering your domain and system orientation.  This is always an issue, wherever I have worked.   

I also find the framing the action and reason for a story helps. You start at that point to truly understand the implications of what you're encapsulating in this particular story. After all, to fully understand something to explain it to another, you need to write about it. More often than not, if you can't type this description out in ~30 seconds, it's going to be decomposed in two or more stories.

#### [The X factor]()

Engineers want to help each other.  They want to write code and solve problems.  They want their work to mean something to the business.  They want what they create to be used.  Everywhere I have worked, engineers come together when sh*t breaks; during working hours or out.  Recently ????

This phonomena is irrespective of whether the company you work for is a good company or a bad company.

TBC


