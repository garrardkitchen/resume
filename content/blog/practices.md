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
- Capture metrics that provide realtime statistics on both application and infrastructure performance (latency, errors, service saturation, etc...) & alerting (slack, sms, email). One of the 3 pillars of observability
- change/issue management
- Error management (adopting products similar to sentry.io to aggregate and provide succint information in the run up to an error. Cross SoC tracing)
- documenting RCA (reasons for a failure)
- Runbooks (actions required to deal effectively with a known situation)
- Automate everything!
- Share Technical roadmaps, progress & changes
- Documented Roles & Responsibilities of all team members
- Release management (hassle free rollback & scheduled release when needed)

TBC ... 

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


I'm an advocate of Serverless technologies.  As such, I've tried many observabilities platforms to get best picture of the platform I was developing at the time.  I once spent months having regular meetings with Datadog to explore how to integrate with their platform across a serverless solution (AWS Fargate, Lambda, API Gateway, etc...).  I couldn't stress enough the importance of them offering observability that spanned into the serverless space.  A few months later I was invited to preview their **Cloud Functions** service.  I'm a fan of Datadog.  For **Fargate** observability, I adopted the **sidecar pattern** and deployed their container to each Fargate Task and harvested metrics and logs. Cloud provider service API calls costs can creep up on you though, so beware!
