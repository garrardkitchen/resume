---
title: "Observability"
date: 2020-01-02T12:49:14+01:00
draft: true
featured: true
tags: [3 pillars of observabiity, logging, metrics, tracing, error management, blog]
---

TBC

Observability ... life is good is the systems [applications & infrastructure] you support are reporting information to a central repository that gives you a 360 update to date view.  Life is not so sweet if you're missing any of the 3 [logging, metrics & tracing] pillars of observability.

I can think of 2 system configurations where these pillars had been different to add; docker & serverless.  Luckily, with the sidecar pattern for containers and closer integrations with Serverless services, make this less of on issue.  Anybody who(m) is involved in maintaining a system that is using docker will no the challenges involved when it comes to tracking down issues.  You can exec into containers but serverless, you can't.  Their are variaous debug options out there (think dev teams with AKS) that enable you to perform live debug and of course, you can debug containers in your own development environment.  You are now too able to debug your Serverless solutions too locally; this has been possible for some time with Azure Functions but really on recently for AWS Lambda.  Google Cloud has their Serverless options to but the debug story there isn't so developer friendly.

I've had the fortune to work with many observability tools.  I've listed these below:
- Datadog 
- X-Ray
- Application Insights
- AWS CloudWatch 
- Jaeger
- Prometheus
- Grafana
- InfluxDB 
- Stackify
- Kibana
- Elasticsearch
- sentry.io
- Epsagon
- New Relic

They're all great tools and have excel in specific areas.  You won't find a _one to fit all_ solution but my advice to you is define a strategy around technology (application & infrastrcutre) first.  This will give you the space to explore options and see what works well together as well as how you're going to get in amongst it and start producing dashboards that cross multiple boundaries.  I am yet to find one solution that spans everything as well as giving you the opportunity to be customisably grangular with the information you need in order to build powerful visualisation. 

## Strategies

**Guiding principles**:
 - _what systems are important to your business; and what (and where) infrastructure is critical for your core business capabilities?_
 - _what info do I need to give me advanced warning to mitigate a disaster?_
 - _How can you mitigate against observability platform outages?_

TBC 

- Separate Observability per platform (separating cloud & self hosted environments)
- Observability per core tech (separate containeration & servleress)
- Harvest all data feeds and provide your own visualization platform (Grafana / InfluxDB)