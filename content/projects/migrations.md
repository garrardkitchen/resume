---
title: "Migrations"
date: 2019-04-28T17:16:53+01:00
featured: true
description: "Remove dependency of Silverlight and MSSQL"
tags: ["silverlight", "mssql", "restful api", "asp.net mvc", "asp.net core", "aws aurora", "ux", "aws dms"]
image: ""
fact: ""
weight: 500
sitemap:
  priority : 0.8
---

- Coach migrated from MSSQL to MySQL as costs were too high for Always-On capabilities. I was accepted onto Aurora MySQL Preview programme and contributed to this phase.  The product had a key dependency that required a specific version of MySQL. As a result we are now using Amazon Aurora and plan to migrate over to  Aurora Serverless when version 5.7 is supported.  

- To offer CXcoach to a greater audience, a web plug-in dependency had to be removed.  This plug-in being Silverlight.  Web service technology required for Silverlight had to be replaced with a more traditional RESTful API technology.  This, with an reimagined UX, helped deliver a new experience. 
