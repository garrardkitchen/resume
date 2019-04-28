---
title: "Observability"
date: 2019-04-28T16:24:21+01:00
featured: true
description: "Researched logging, tracing and metric options to use with serverless technology"
tags: ["datadog","epsagon","sentry.io","opsgenie", "cloudwatch", "CX", "serverless"]
image: ""
fact: ""
weight: 500
sitemap:
  priority : 0.8
---

- The 3 pillars of observability (logging, metrics and tracing) presents new challenges for serverless solutions.  

    Having experienced this first hand, I set about looking for a solution that will enable rapid root cause analysis to ultimately greatly reduce or even better, mitigate [think runbooks] known undesirable scenarios.  

- I believe in positive Customer Experience (CX) and apply this philosophy across everything I do.  

    I spent time with Datadog [a few months of meetings] discussing ways to help this serverless space to improve observability.  I was accepted onto a few of their beta programmes.  Coach’s cloud solution is 100% serverless which presents a unique challenge for tracing and logging.  I liked what Datadog additionally had to offer.  The company now uses their new APM for .NET Core and their Cloud Functions feature. Since then, I have, with the rest of the team, adopted a streamlined approach which is more workflow orientated. Using Epsagon for the lambda based solutions, Sentry.io for client-side and server-side error management.  All observability solutions were researched and implemented by me.  The company’s morning DSU, when necessary, use both Epsagon and Sentry.io to review priorities and where necessary, assign somebody to deal with an issue.  

- All work - greenfield, enhancements and defects - are managed through Jira. All project work and documentation is captured in Confluence. Confluence, like Jira, is very much an important productivity tool embedded into our working protocols. 
- Further applications I use in this area are: Datadog, Epsagon, Sentry, CloudWatch, OpsGenie.
