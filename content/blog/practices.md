---
title: "Good Engineering - Practices"
date: 2020-01-27T11:49:14+01:00
draft: false
featured: false
tags: [Hugo, blogging, good engineering, practices]
---

Good practices covers a huge expanse. To infuse practices it requires dedication, persistence, patience, exceptional planning, leadership and belief in you and your teams abilities.  Some of which I see as virtues.  This is not a one person journey. 


In summary, good engineering practices look like this:


- All application and infrastructure as code capturing in a DVCS (eg git)
- Capture metrics that provide realtime statistics on both application and infrastructure performance (latency, errors, service saturation, etc...) & alerting (slack, sms, email). _observability:metrics_
- change/issue management
- Error management (adopting products similar to sentry.io to aggregate and provide succint information in the run up to an error. Cross SoC tracing) _observability:logging and tracing_
- documenting RCA (reasons for a failure)
- Runbooks (actions required to deal effectively with a known situation)
- Automate everything!
- Share Technical roadmaps, progress & changes
- Documented Roles & Responsibilities of all team members
- Release management (hassle free rollback & scheduled release when needed)
- Testing (unit, functional, stress)
- In production testing (core features are constantly tested so issues or outages are discovered before the users observe them)
- Never push directly to master branch - PR review prior to branch merge to master
- Dashboards - builds/releases/commits & insights/issue management/error management/business KPIs (impact to business)
- Code coverage
- All Code additions and changes must be accommpanied by tests
- No issue management blockers (work not being able to be released because there is a human dependency)
- All DVCS Pull Requests reivewed ~24 hrs
- Shared documentation that includes - business domain, systems and their decomposition (think microservices), repositories and dependency, documentation failures, Runbooks (what to do if a scenario presents itself)
- Team velocity for informed planning
- Definition of Done (and the review of during the sprint retrospective)
- Reporting of failures acros several channels (slack, email, sms, dashboard, etc...)
- Happy stakeholders
- Happy Engineers
- Engineer development path (this will include, but not limited to, [Good Engineering - Principles](/blog/principles))
- Engineer days
- Roles & responsibilities - know your own sphere of engagement and this will help mitigate any blockers  
- Openess to share knowledge and information
- Regular updates on roadmap and changes. This includes the stakeholder's vision
- Celebrate releases
- Keep connected (especially important when working with distribute teams)
- Common approach to working
- Infrastructure as Code (IAC)
- CI/CD pipelines with regular builds and deployments (not necessarily regular _continue delivery_) (with feature branches and canary, blue-green, A/B, other)
- To feel managed so regular contact with line manager is a must. At least one 1-2-1 session each week.  Line Manager must be accessible and approachable. 

### 3 Pillars of Observability

Logging, metrics and tracing.  You'll see many references to observability here and across everything I write.  It's been a huge part of my working life for as far back as I can remember.  It is critical for your business, for engineering to have visibility of everything that it is responsible for.

Examples & situations of interest:

- datadog meetings re serverless
- power of tracing across SoCs
- capturing all events leading up to an exception
- aggregation of error and integration with issue management (Jira bugs)
- kibana, prometheus & grafana
- Moving now to InfluxDB because of push model; prometheus only supports pull model

### In production testing

One of the most powerful visualisation I ever saw was statistics showing in realtime all the different testing and their success in company's *production* public facing website. The trust and reassurance this instilled is incalculable.  Another powerful visual I often see is business metric aggregations included, again, in publically accessible websites.  This is brave though for obvious reasons.   

### Serverless

I'm an advocate of Serverless technologies.  As such, I've tried many observabilities platforms to get best picture of the platform I was developing at the time.  I once spent months having regular meetings with Datadog to explore how to integrate with their platform across a serverless solution (AWS Fargate, Lambda, API Gateway, etc...).  I couldn't stress enough the importance of them offering observability that spanned into the serverless space.  A few months later I was invited to preview their **Cloud Functions** service.  I'm a fan of Datadog.  For **Fargate** observability, I adopted the **sidecar pattern** and deployed their container to each Fargate Task and harvested metrics and logs. Cloud provider service API calls costs can creep up on you though, so beware!
