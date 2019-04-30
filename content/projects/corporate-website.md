---
title: "Corporate Website"
date: 2019-04-28T17:31:27+01:00
featured: true
description: "Remove unnecessary costs due to stack dependency"
tags: ["serverless", "aws api gateway", "aws sam", "ci/cd"]
image: ""
fact: ""
weight: 500
sitemap:
  priority : 0.8
---

- Used mainly static content and ported new copy/layout to SAM Serverless Application C# .NET Core Razor Pages solution. Originally WP was in place, so removing MySQL reduced the cost. I created a CI/CD Pipeline using BitBucket.  It is now hosted via API Gateway & Lambda and not via an Azure Website.
