---
title: "Good Engineering - Practices"
date: 2020-01-27T11:49:14+01:00
draft: false
featured: false
tags: [Hugo, blogging, good engineering, practices]
---



In summary, good engineering practices look like this:

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
