---
title: "Good Engineering - Practices"
date: 2020-01-27T11:49:14+01:00
draft: false
featured: false
tags: [Hugo, blogging, good engineering, practices]
---

Good practices covers a miriad of challenges and possibilities. To infuse practices, it requires dedication, persistence, patience, exceptional planning, leadership and belief in you and your team's abilities.  Some of which I see as virtues.  This is not a one person journey. 

In summary, good engineering practices look like this:

_This list is not the complete list, there will be a few things I have negated to include_
- `devops` All application and infrastructure as code capturing in a DVCS (eg git)
- `observability` Capture metrics that provide realtime statistics on both application and infrastructure performance (latency, errors, service saturation, etc...) & alerting (slack, sms, email). _observability:metrics_
- `agile` change/issue management
- `observability` Error management (adopting products similar to sentry.io to aggregate and provide succint information in the run up to an error. Cross SoC tracing) _observability:logging and tracing_
- `devops` documenting RCA (reasons for a failure)
- `devops` Runbooks (actions required to deal effectively with a known situation)
- `devops` Automate everything!
- `communication` Share Technical roadmaps, progress & changes
- Documented Roles & Responsibilities of all team members
- `devops` Release management (hassle free rollback & scheduled release when needed)
- `testing` Testing (unit, functional, stress)
- `testing` In production testing (core features are constantly tested so issues or outages are discovered before the users observe them)
- `devops` Never push directly to master branch - PR review prior to branch merge to master
- `observability` Dashboards - builds/releases/commits & insights/issue management/error management/business KPIs (impact to business)
- `devops` Code coverage
- `devops` All Code additions and changes must be accommpanied by tests
- `agile` No issue management blockers (work not being able to be released because there is a human dependency)
- `devops` All DVCS Pull Requests reivewed ~24 hrs
- `communication` Shared documentation that includes - business domain, systems and their decomposition (think microservices), repositories and dependency, documentation failures, Runbooks (what to do if a scenario presents itself)
- `agile` Team velocity for informed planning
- `agile` Definition of Done (and the review of during the sprint retrospective)
- `observability` Reporting of failures acros several channels (slack, email, sms, dashboard, etc...)
- `communication` Happy stakeholders
- `communication` Happy Engineers
- `communication` Engineer development path (this will include, but not limited to, [Good Engineering - Principles](/blog/principles))
- `communication` Engineer days
- `communication` Roles & responsibilities - know your own sphere of engagement and this will help mitigate any blockers  
- `communication` Openess to share knowledge and information
- `communication` Regular updates on roadmap and changes. This includes the stakeholder's vision
- `agile` Celebrate releases
- `communication` Keep connected (especially important when working with distribute teams)
- `communication` A common approach to working
- `devops` All infrastructure is created by an Infrastructure as Code (IAC) strategy 
- `devops` Practice your DR drills, executing Runbooks and Chaos
- `devops` CI/CD pipelines with regular builds and deployments (not necessarily regular _continue delivery_) (with feature branches and canary, blue-green, A/B, other)
- `communication` To feel managed so regular contact with line manager is a must. At least one 1-2-1 session each week.  Line Manager must be accessible and approachable.
- `devops` Visibile DevOps advocacy - teams must be responsible for their domain services; you build it, you ship it, and you fix it 
- `devops` Continuous iterations of DevOps principles - Principles of Flow, Feedback, continually learning & experimentation 
- `trust` Assign responsilibity - most rewarding experience when totally responsible for something; give a little bit of your sole to it. Pride
- `trust` Encourage SME
- `communication` Teams must be aligned with core business capabilities (think Conway's Law)
- `observability` Status page - one place to notify customers, integration partners, when there's an issue. This also needs to be reflected in responses to API calls.  Presents opportunity to whomever to raise issue too  

_I drill down into more detail in the sections below of some of the bullet points above._

`agile`, `devops`, `observability`, `testing`, `communication`, `cicd`, `trust`


# 3 Pillars of Observability

Logging, metrics and tracing.  You'll see many references to observability here and across everything I post.  It's been a huge part of my working life for as far back as I can remember.  For your business to survive, you must capture pertinent information.  This will inform on well your system(s) are performing well and how to discover reaons(s) why it might not be. Without this, your engineers will have zero visibility and establishing where to start looking is a case of fumbling around int the dark.  Not to mention the latency this induces when there is either no or little substance to your observabiliity strategy.

## Examples & situations of interest

I won't go into too much detail here but here's a few snippets from my most recent experience:

### **Datadog meetings regarding serverless**

One platform I was responsible for as 100% serverless.  Two of the main protagonists in this archicture were AWS Fargate and AWS Lamba.

As Fargate was a containerization service, I was able to capture logging, metrics and trace information by utilisation a sidecar pattern and include a Datadog container with each Task.

Lamba, on the other hand was a different kettle of fish.  I spent months in weekly meetings with Datadog, reporting on progress and doing my utmost to convince them they need a serverless solution. Eventually they released Cloud Functions.  It's a nice solution and it fits well with their realestate.  I was included on their preview programme for Cloud Functions and broke the news of their immenent release (by accident ... doh!).

One important thing to note here with services that offer power visualization based on metrics and logging as this is, in most cases they need to constantly ping your services and as such, if you're using a cloud platform, this cost can rack up. So beware!

### **Power of tracing across SoCs**

There are various techniques you can employ here to establish the journey of a request or similar (e.g. passing value around in http header). Which ever approach you take, you must forward this correlation id to called services.  If you don't, your error management solution will not be able to highlight where (this could be anyway across 100's of services) and what the issue is.

### **Capturing all events leading up to an exception**

If you've chosen well, you will have an error management solution that will harvest all logs and present to you a succint history of what has happened in the lead up to the error.  This makes it a no brainer then to know where to go to address the error.

A key feature you need to look for from the platform is support for multiple languages and frameworks across both frontend and backend paradigms.  This will give you a complete picture.

### **Aggregation of error and integration with issue management (Jira bugs)**

Most error management systems offer intergrations.  I recommend chosing one that can integrate with your current issue management system (think Jira).  The best integrations offer bi-directional updates so both systems reflect an up to date picture of the progress being made with the issue.

Another important feature you must look for is aggregation of errors.  This will reduce the noise and at the same time, illuminate the frequency of an error.  Some error management systems suggest why there's an issue when connected to your DVCS or event remind you when you experienced this issue previously.  

It is also important to take advantage of the APIs that your error management system offers.  For instance, some offer visibility into a timeline visualization of when a new release was made. This can be a powerful tool when correlating errors with releases as well as confirming the reduction of issues post a release.

### **kibana, prometheus & grafana**

I hadn't used Prometheus or Grafana before I'd started in my latest role.  Prometheus is a time series Db and Grafana is a powerful visualization, analytics and monitoring platform.  It is used purely for metrics and not logging or tracing.  I like it.  Prometheus is a no brainer as there's a 3rd party library we can use for or server language technology - .NET Core (Webhost).  

### **Moving now to InfluxDB because of push model; prometheus only supports pull model**

Sometimes your current observability strategy include products that don't operate in the way you need them too.  Prometheus is one example of this.  Prometheus only supports a pull model which means it needs to hit endpoints declared by your application and scrap metric information from there.  

_A word of warning with regards to pull models, if you are including paramters as tags in metrics types, be careful that you don't include values that constantly change. This can result in a huge (Megabytes) payload being scrapped._

We have looked at replacements and have decided on InfluxDB and associate suite products. InfluxDB being the time series Db, it supports a push model.  Their visualizations look more appealing than Grafana's too. 

_I will be posting my take on observability strategies soon. When it's available, I'll include link here._

# In production testing

One of the most powerful visualisation I ever saw was statistics showing in realtime all the different testing and their success in the company's *production* public facing website. The trust and reassurance this instills is incalculable.  Another powerful visual I often see is aggregated business metrics included, again, in publically accessible websites (think number of deals being propositioned, number of visits today).  This is brave though for obvious reasons.   

# Serverless

I'm an advocate of Serverless technologies.  As such, I've tried many observabilities platforms to get best picture of the platform I was developing at the time.  I once spent months having regular meetings with Datadog to explore how to integrate with their platform across a serverless solution (AWS Fargate, Lambda, API Gateway, etc...).  I couldn't stress enough the importance of them offering observability that spanned into the serverless space.  A few months later I was invited to preview their **Cloud Functions** service.  I'm a fan of Datadog.  For **Fargate** observability, I adopted the **sidecar pattern** and deployed their container to each Fargate Task and harvested metrics and logs. Cloud provider service API calls costs can creep up on you though, so beware!

# DevOps

I've been an advocate of DevOps for several years.  I have implemented several solutions to this fun and challenging space.

It is vital for teams to be self sufficent here as they will be responsible for development, build and deploying of services in their given bounded context.  It's common place for mulitple CI/CD solutions be in place; deliberately or a case of supporting while dependent services are migrated away to the newer shiny solution.

It's not just about building and deploying stuff to different environments.  I am of course referring to the DevOps Principles AKA The Three Ways or as I like to call them the **guiding principles of DevOps**.  I can almost guarantee that what your opinion of DevOps is now, will be different after you read up on the **Three Ways**

# DVCS

I use git.  Most do.  As to not pollute the master branch, we create a new branch in line with a branching strategy which will come with it's own naming convention.  When we're ready, we create a PR (if you're not already using a draft PR), along with instructions (normally templates and subsequently redacted) for the reviewers for when they review code.

When the minimum number of reviewers have accepted the PR, the code will be merged into master.

If you've configured things properly, when the PR is created, a test build will be actioned.  This can include deploying to an environment where unit tests and functional tests are performed.  Again, if configured properly, code coverage and code analysis as well as vulnerability scans.  All of which will be reflected back into the PR branch and may halt the PR process.  Take vulnerability scans for instance. If a scan results in uncovering a vulnerability then this will fail the PR process.  Some code analysis / vulnerability solutions can raise PRs automatically in your repo detailing what need to be done.

One of the failings of the PR process IMO is that you can ask a question and still approve the PR. Or that you can ask a question but the author is not forces to answer before merge.

Another huge failing of the PR process is not the mechanics but how people view there role.  It is common place to see petty comments or comments that just make the author feel dumb and are not at all constructive.  People also forget to give praise, e.g. great use of x in situation y.  It is therefore a sign of good engineering practices when someone moderates / reviews the comments and acts accordingly if violates the principles of good PRs.