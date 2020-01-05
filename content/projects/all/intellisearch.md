---
title: "IntelliSearch"
date: 2019-04-28T17:22:33+01:00
featured: true
description: "The evolution of a successful feature"
tags: ["step functions", "lambdas", "api gateway", "elasticsearch", "s3", "windows services", "akka.net", "nats", "performance improvements"]
image: ""
fact: ""
weight: 500
sitemap:
  priority : 0.8
---

- Coach has a long standing feature called IntelliSearch.  

    It is a feature that, at a specific time, for several set periods [daily, weekly, monthly, custom], it will submit queries to a Data Connector (conduit between our system and an external system) to match up randomly selected recordings for later evaluation.  The random algorithm implemented is there to ensure fairness of recording selection so apples and apples are compared and not apples to oranges. 

    This has evolved over time to manage demand and reduced traffic bandwidth.

- With CXcoach (cloud SaaS product), it was the prime candidate to be migrated to serverless.  I architected the system and with the team we implemented the solution.  The initial feature is designed for real-time processing so whenever there is a published event from the integrated system, the product obtains the latest information and at the appropriate time, it is loaded into ElasticSearch.  The entire process is orchestrated using Step Functions, Lambdas, API Gateway, ElasticSearch & S3.
