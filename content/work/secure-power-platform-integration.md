---
title: "Connecting Power Platform to cloud-native .NET securely"
description: "An identity-led application and API architecture delivered with its infrastructure."
date: 2024-08-01
featured: true
weight: 40
area: "Application architecture"
problem: "A business application needed to combine the speed of Power Platform with a controlled backend API and an enterprise-ready identity and deployment model."
contribution: "I designed and built a Power App connected through a custom connector to a .NET API running in Azure Container Apps. OAuth 2.0 and Microsoft platform identity protected the flow, while API Management performed JWT validation and pre-authorisation. Azure DevOps and AZD managed the infrastructure and application lifecycle."
outcome: "The solution paired low-code delivery with a governed cloud-native backend, giving the team a repeatable deployment path and clear security boundaries across the complete request flow."
tags: ["Power Apps", ".NET", "Azure Container Apps", "API Management", "OAuth 2.0", "AZD"]
---

## The problem

Low-code delivery can accelerate the user-facing part of a solution, but the integration path still needs robust identity, API controls, application hosting and lifecycle management.

## My contribution

I designed and implemented the complete path from Power App to a .NET backend. A custom connector used OAuth 2.0 and Microsoft platform identity; API Management validated tokens and applied pre-authorisation; Azure Container Apps hosted the API. Azure DevOps and the Azure Developer CLI connected application and infrastructure delivery.

## The outcome

The finished architecture preserved the speed of Power Platform without bypassing enterprise security or operational needs. The result was a clearer, repeatable route for both infrastructure and application change.
