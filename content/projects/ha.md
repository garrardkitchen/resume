---
title: "Streamline deployment of HA app"
date: 2019-04-28T15:56:30+01:00
featured: true
description: "High Availability"
tags: ["nats.io", "high availability", "aws", "single-server", "multi-server", "CI/CD"]
image: ""
fact: "Using multiple cloud vendor tools to continuously deliver solution"
weight: 500
sitemap:
  priority : 0.8
---

- The Coach product started as an on-prem application, installed behind the firewall on a single server.  

    A partner made a request for the product [Coach] to be made highly available.  Initially the product was hosted via an active/passive configuration.  This was superseded by a load balanced active/active configuration through the application of Akka.NET throughout all components. This enabled an application cluster that could load balance the demands across all components.  Based on specific feedback, I later re-architected the messaging driven solution and replaced Akka.NET with NATS.  

- I have previous experience of NATS with projects/research I have accomplished with Docker [Windows] and felt confident that this work could be completed in a limited timeframe.  This previous research included both the use of C# and F#.  
- The HA solution for Coach is permanently on in a HA configuration on AWS (RDS, Redis, EC2 [windows], ALB, ACM, Route53).  
- Development work is conducted via AWS Workspaces [Windows] as and when required.
