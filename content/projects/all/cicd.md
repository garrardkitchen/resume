---
title: "Continuous Integration, Continuous Deployment & Continuous Delivery"
date: 2019-04-28T15:35:31+01:00
featured: true
description: "The proliferation of CI/CD"
tags: ["continuous integration", "continuous deployment", "continuous delivery", "bitbucket pipelines", "codebuild", "codepipeLine", "codedeploy", "codecommit", "github", "azure devops"]
image: ""
fact: "CI/CD implemented across all projects"
weight: 500
sitemap:
  priority : 0.8
---

- CI has been a long term development responsibility. 
   
    Formally, for our client/server product, I would install and host TeamCity on office servers. Currently for a specific version of Coach, it is now hosted on an Azure instance.  The deployment package is delivered to S3 and at the appropriate time (major/minor/patch release) is added to a Confluence site for our customers to download.  

    All projects are now driven by CI/CD principals.  This is for both on-premise and cloud solutions.  Depending on the project and requirements, different tools have been used.  R&D into use and application of these tools was my responsibility including introducing the original idea to the business and implementing across all projects.  Tools used include Azure DevOps, BitBucket Pipelines, AWS CodePipeline, AWS CodeBuild, AWS CodeDeploy, Octopus Deploy, Jenkins and TeamCity.  All code is held in git repositories.  These repositories include BitBucket (default), GitHub and CodeCommit.  Each new feature, enhancement or defect is linked to a Jira issue.  

- I have architected several CI/CD solutions using the above listed technologies.  

    Knowing that as a company we needed to evolve and advance, I had to start automating a lot more of our activities, I investigated what could be done. I presented my research and delivered my recommendations to the company and embarked on this as being an important tenet to how we automate this space.  My original architecture started with Jenkins and Docker. I then promoted and embedded Azure DevOps and the company have used this for several years.  More recently, AWS has been used for related services but now mainly for serverless solutions BitBucket Pipelines is used.
