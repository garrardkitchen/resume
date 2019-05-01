---
title: "Health of the SaaS product"
date: 2019-04-28T17:09:54+01:00
featured: true
description: "Ensuring a positive CX"
tags: ["cx", "cloudwatch trigger", "lambda", "alb", "python", "lambda load balancer target", "elasticsearch", "http", "amazon aurora", "s3", "redis"]
image: ""
fact: ""
weight: 500
sitemap:
  priority : 0.8
---

- For me, CX (Customer Experience) is paramount.  
- Even if there is an outage, the CX doesn’t have to suffer.  In my current project, there are key AWS services, as well as the CXcoach product, that are required to be running for the application to function.  I have architected both full systems and application features in such a way for them not to fail because of transient outages or worse and furthermore to provide instant feedback to users.  This also includes not losing anything that has yet to be persisted.
- I architected and implemented a serverless solution to check at regular intervals the state of key application services and other endpoints (e.g. app health check).  If an outage is experienced the ALB is switched to a Lambda backed LB where the user is provided with information up until the time the service(s) is back online.  This is all hooked into Slack and OpsGenie.
