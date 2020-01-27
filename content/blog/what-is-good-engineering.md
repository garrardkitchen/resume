---
title: "What is good Engineering?"
date: 2020-01-27T11:49:14+01:00
draft: false
featured: true
tags: [Hugo, blogging, good engineering, practices, principles]
---

I was asked recently, "What is good Engineering?"  It's a great questions.  One that instantly conjures up a plethora of visuals and emotions as after all, your answer has to come from your experience, which by definition, will be subjective.  

I'd like to share with you how I see 'good engineering'.  My current role is a Principal Engineer which will help me frame some of my answers.  Prior to this I can a CTO so it's fair to say, I've seen what both good and bad looks like and in I've had the opportunity to make bad, good.

This is how I categorise good Engineering. Each category links through to a summary explanation and in each summary, there is a link to a fuller explanation which is captured in another blog post. So, if you just want the _skinny_, stay on this page:

- [Principles](#principles)
- [Practices](#practices)
- [Collaboration](#collaboration)
- [Agile](#agile)
- [The X factor](#the-x-factor)

#### [Principles]()

I have a fuller explanation here - [Good Engineering - Principles](/blog/principles) - but in essence it about ensuring all teams share an aligned standard of coding. This will include foundational knowledge of how to code.

Here's a list of concepts that make up Engineering principles:
- DRY, YAGNI, KISS
- SOLID principles (SRP, OCP, etc...)
- Rafactoring (refactoring refactoring) as you go
- Composition over inheritance (avoid class tree explotion! - Strategy pattern)
- Separation of Concerns (think MVC, domains)
- Avoid premature optimization
- Clean readable code is better than clever code
- Defensive coding
- Do no more, do no less
- Coding stadards (provide a template and general guidelines and let the team thrash out the rest)
- Code reviews (git PR reviews)
- Testing (unit/functional as well as concepts TDD & BDD)

As a Prinipal Engineer I categorise the above as the foundations.  I use the above as the base line, a starting point. It's objective is not to be critical or dismissive of someones approach/education but instead to act as a reminder and steer.  This then can be built up on.  It's all about ensuring that good engineering is shared by all team members, possibily by osmosys. An important part of this practice is heuristic - enabling a person to discover or learn something by themself.  So, how do I go about dong this?

- Share blog posts
- Group conversations
- 1-2-1
- Pushing learning on demand services like Pluralsight or Udemy.  Youtube is another favourite of mine. With Youtube you are able to tag recordings, therefore building up a catalouge of materials
- Workshops
- Brown bags
- Capture How To Dos in wikis or similar
- Coding advice/tips (e.g. when to use Task instead of an Async method)

The coding advice/tip aboue is an interesting one. As professionals we always want to improve and in doing so we want our colleauges to improve as well.  I recently become reaquainted with katas.  As a black belt in Ju-Jitsu I am well versed in what a kata is.  Katas can also be used to remind, stretch and improve you capability.  The last time I used a kata in programming was years ago. This was when I was first introduced to TDD.  A favourite development book of mine is 'The Art of Unit testing' by Roy Osherove. It was the first edition so we're going back quite a few years now.  For many years I had it as a click thru purchase option on an old blog site (wouldn't really have classed my old site as a blog site though!). I've not really participated in many kata's since.  I have written a few though but not having been reintroduced to them and their power, as a Principal Engineer, it's a great tool for assessing and building an engineers skill when used with pair programming.

Pair programming is a another invaluable tool.  Generally, one only gets to pair program in one of two situations.  (1) if the subject you're investigating is new (important to shared the knowledge) or (2) when you're dealing with a challenging problem.  You know what they say? ...a problem shared is a problem halved!  I'm sure I'm not alone here when I say, having the time available for 2 engineers to code together for skills transfer etc is a challenging one.  An agile sprint doesn't really accommodate this.  This is something that I often refer to as having the 'space to learn'.  The pressures of a sprint works against this.  This is doubly as difficult if your sprint is made up of technical debt, BAU, Ad hoc etc...  Timeboxing effort into percentages doesn't present the obvious education path for your Engineers.  Having a day (developer day) dedicated to learning never quite works out the way it's meant too plus, 'a day'?!  In my experience this and cramming 'genius' into a timebox never quite works. After all, you can't plan genius, like you can't ensure the best engineers are in your locality or that the best time for engineers to work is from 9-5.  Whenever I speak about this I inevitably continue the conversation into the topic of not providing the appropriate tools (software and hardware) that the engineers need so they can do their job to the best of their abilities.  I once gave an anology of, not giving engineers the right kit is like giving a roller brush and a pogo stick to Michelangelo to paint the Sistine Chapel ceiling.  He'll manage it ... eventually but the attention to detail and accuracy will be woefully poor needing it to be redone at a later (much sooner) date. 

#### [Practices]()

I have a fuller explanation here - [Good Engineering - Principles](/blog/practices).

In summary, good engineering practices look like this:
- consistent observability (unified approach to the 3 pillars of observabiity) - metrics, log & tracking
- change/issue management
- error management
- testing (unit / functional / load)
- in production testing (core features are constantly tested so issues / outages are discovered before the users observe them)
- Never push directly to master branch - PR review prior to branch merge to master
- Dashboards - builds/releases/issue management/error management/business KPIs
- Code coverage
- Code changes must be accommpanied by tests
- No issue management blockers
- PR reivewed ~24 hrs
- Shared documentation that includes - business domain, systems and their decomposition (think microservices), repositories and dependency, documentation failures, Runbooks (what to do if a scenario presents itself)
- Team velocity for planning
- Definition of Done (and the review of during the sprint retrospective)
- Regular builds and deployments
- Reporting of failures to several channels (slack, email, sms, dashboard, etc...)
- Happy stakeholders
- Happy Engineers
- Engineer development path
- Engineer days
- Roles & responsibilities - know your own sphere of engagement and this will help mitigate any blockers  
- Openess to share knowledge and information
- Continual sharing / vision reminder
- Celebrate releases
- Keep connected (especially important when working with distribute teams)
- Common approach to working
- Infrastructure as Code (IAC)
- CI/CD pipelines (with feature branches and canary, blue-green, A/B, other)
- Managed


#### [Collaboration]()

#### [Agile]()

To keep you on track, you need a framework.  A framework that helps you as a team member, to stay focused and be reminded of that iterations goals.  As the name suggests, it has to be an agile framework, one that is robust enough to change assist the needs of the engineers.  One where the definition of done is reviewed as a matter of protocol and modified accordingly if the current definition does not cater for a new situation or observation.

An affective team will subscribe to the agile manefesto. This ensures the work that is embarked up on and completed, meets the needs of the stackholders (the people the POs capture the requirements from).  As a team member, you produce work that meets a specific requirement.  This requirement will have been captured (if business requirement) by a Product Owner interpretting the requiremnt from a/the stackholders.  The in theory ensures what was asked of from business is propagated accurately down to the worker bees (engineers in this case).

If for any reason requirements are not meet, the agile framework will be robust enough to capture these reasons so when the roll up reports are created, planned vs achieved will be obvious and so will the reason for why there was a low achieval percentage.  Having the capability is important.  Without it, you'll never known and by 'you' I mean the senior stakeholders (often business owners) why sh*t's not getting done.

It is also incredibly important to get your stakeholders involved in the process.  The idea of a stakeholder just planting a seed then disappearing, to reappearing in then 'rip your team a several new ones' because their vision was not actualised is unacceptable.  I'm not saying they need to be part of the process (inceptions or daily meetings). They just need to be present during the requirements stage.  You can't just take a single conversation and go off and deliver something.  It must be played backed and confirmed that this is the requirement(s). It is paramount to reply back to them constantly during the requirement phase how their requirements are being intepretted.  Once captured by the POs, it can be them be documented in a series of sprint stories (or wider - think epic and beyond).  My view however on an undertaking is quite simple.  You do the work necessary to get something that addresses part of the biggr picture. Some people call this the MVP (Minimum viable product).  Sometimes this can be too big and could potentially be a huge waste of time.  Whether you're providing solutions to the enterprise or external paying customers, you must release and test regulary to check if this is actually what your _customers_ want. I realise that this is common sense but if you take an age to create then release it and nobody is willing to use/pay for it then it's a massive of time and money and it could easily drive you out of business.  I've seen this play out too many times to mention.  If you release small features often, you keep the interest and ???? of your customers.

Recently, there was a situation that we as Engineers didn't like.  In short, the teams velocity wasn't being fairly reflected because of blockers and work rolling into the next sprint.  Story points would magically disappear.  This observation and evolution steared emoitions from several quarters.  Thankfully, we have a robust and Engineer ??? Head of Delivery whom happens to be the Scrum Master for a Team I'm currently assigned too.  He without be prompted instictly knew there was an issue and overnight came up with a solution which was the delight of the team's Tech Lead and associated team members.  At the same time, due to the framework we operate in, were able to come up with another solution to a situation that was getting out of hand.  As a team, we were getting thrashed by requirements.  We were completing more than planned meaning we'd dip into the backlog before the end of the current sprint.  Although perceived as kudos, it didn't leave time for engineers to get closure on itches they needed to scratch, space for education and other heuristic related activities or time to evaluate and address architecture improvements.  As a positive consquence having had a group discussion where everybodies voice was heard, we reach a positive resolution for both the business and the Engineering team.  In both of these situations explained here, the Definition of Done (DoD) was revised.

One thing I do feel strongly about and that is this.  A Scrum Master plays pivotal role.  It is a full time activity and this cannot be a role that in part is responsibility of a Tech Lead.  Knowing the importance of this roll during the sprint, you can't have an Engineer be an Engineer as well as a Scrum Master.  If you're doing Scrum right, then you need a dedicated Team SM. Otherwise, you're taking just way too much time away from your Tech Lead which isn't fair to them, the team or the business.

As part of the story creation process, after the story description (AS A, I WANT, SO THAT) we capture the Acceptance Criteria ('ACs' for short).  It is here where we detail what the story needs to satisfy into order for the story to be deemed completed by the Engineer.  A constant failing in this area is the lack of tests; or more appropriately, to omition of tests.  Let's say you're a newbee.  You have very little domain knowledge or understanding of the system you're now responsible for.  Tests added to the story would prove invaluable to this neebee.  It will also provide guidance on how to prove that your work fits the bill back creating adaquate unit tests as well as helping with furthering your domain and system orientation.  This is always an issue, wherever I have worked.   

#### [The X factor]()

Engineers want to help each other.  They want to write code and solve problems.  They want their work to mean something to the business.  They want what they create to be used.  Everywhere I have worked, engineers come together when stuff is broken.  Whether this be during working hours or out.  Recently

This phononima is irrespective of whether the company you work for is a good company or a bad company.


