---
title: "Migrations"
date: 2019-04-28T17:16:53+01:00
featured: true
description: "Remove dependency of Silverlight and MSSQL"
tags: ["serverless", "ecs fargate", "lambda", "api gateway", "step functions", "silverlight", "mssql", "restful api", "asp.net mvc", "asp.net core", "aws aurora", "ux", "aws dms", "too expensive", "microsoft"]
image: ""
fact: ""
weight: 500
sitemap:
  priority : 0.8
---

- Migrate Coach product away from a monolyth to being 100% serverless.  Main web platform hosted via ECS Fargate and all features, RESTul APIs be Lambda backed API Gateways and Step Functions.  Data repositories used are dynamoDB, ElasticSearch, Amazon Aurora (mySQL), Redis and S3.

- Coach migrated from MSSQL to MySQL as costs were too high for Always-On capabilities. I was accepted onto Aurora MySQL Preview programme and contributed to this phase.  The product had a key dependency that required a specific version of MySQL. As a result we are now using Amazon Aurora and plan to migrate over to  Aurora Serverless when version 5.7 is supported.  

- To offer CXcoach to a greater audience, a web plug-in dependency had to be removed.  This plug-in being Silverlight.  Web service technology required for Silverlight had to be replaced with a more traditional RESTful API technology.  This, with an reimagined UX, helped deliver a new experience. 

- I orchestrated the entire migration of a solution away from all Microsoft product dependencies. This drastic step was born out of being fed up with (a) overpriced software (e.g. MSSQL, especially in a highly available configuration) and customers having to spend huge amounts to use our products, (b) misdirection of technology (e.g. Silverlight, need I say more?!) and (3) general lack of emphathy with IT professionals who prescribe to doctrine of the MS stack. I decided some time ago that if I get the opportunity too, I will in all respects, pivot away from MS.  The areas where it did not make sense to jump ship from is languages and development tools.  I am a huge fan of C# & F# and I believe we [subjective I know] are all better of with having VS & VSCode in our lives.