---
description: This is the primary repository for the CSI Labs
author: gh:patricksimonian
---

# Digital Gov Web App
 
 This is the primary repository for the BC Gov CSI Labs web presence.

## Technology Stack Used


## Third-Party Products/Libraries used and the the License they are covered by

- GatsbyJS  
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/gatsbyjs/gatsby/blob/master/LICENSE)

## Project Status
In Development

## Security

### Authentication, Authorization, Policies, etc

Currently, CSI Labs is a statically generated site (generated using GatsbyJS) and served using [Caddy Server](https://caddyserver.com/) and has no concept of users, authentication, or authorization. This will likely change in the future at which point this documentation will be updated to reflect details in those areas.

## Code Management

### Workflow

This project follows the [GitHub Flow workflow](https://guides.github.com/introduction/flow/) for managing code branches and releases.  Details and more specifics of how features are developed and rolled out are described below.

#### Feature Lifecycle and Release Process

As indicated above, the team follows the GitHub approach for managing code and releases.  Accompanying this general approach the team has implemented some specific structures, tools and practices that are described in this section.

##### Branch Structure

In the repo, at any given time, several to many branches may exist, and these can be categorized into a few "types" of branches, used for specific purposes.  Each is outlined below.

* `master` branch: code that has been deployed an accepted in production ends up here.  It is the source from which new feature branches are created.
* `feature/<#>-<issue-or-user-story-description>` branch: branches named following a similar format to the one shown are "feature branches" and created for the purpose of capturing work related to a single feature, often corresponding to a single, specific user story or issue.  This type of branch is created based on the lastest contents of `master`.
* `hotfix/<#>-<issue-description>`: a "hotfix" branch for a change required to remediate an urgent problem found in the production instance of the application.  This type of branch would be based on the state of the master branch at the point the code in production was merged into it.

##### Lifecycle

Feature lifecycle is as follows: 

* developer syncs local git repo with latest from `mster` in GitHub
* developer creates local feature branch following the naming scheme `feature/<#>-<issue-or-user-story-description>` or similar
* developer implements feature locally and commits new and modified code to feature branch in local repo
* at any point during their feature development process, the developer may push their feature branch to GitHub
* throughout their feature development process, developer should rebase or merge from master to ensure a more streamlined experience when the feature is complete or close to completion
* when the feature is ready to be deployed in the development environment for testing and review by others, the developer pushes their feature branch and creates a GitHub pull request with the feature branch as the source, targeting `master`. 
* when the pull request is created, the Jenkins pipeline will "kick in", triggering a build of the application incorporating the feature changes. Jenkins will create a "check" in the pull request, corresponding to the executing pipeline.  A link to the pipeline in Jenkins will be included as part of the check displayed in the pull request. 
* if the build stage completes successfully, a new "dev" instance of the application will be deployed in OpenShift with a unique URL. This URL can be derived based on the pull request number and the following convention: `https://devhub-static-dev-<pull request number>-devhub-dev.pathfinder.gov.bc.ca/`.  At the appropriate time, the pipeline and/or Git will also execute any configured automated checks or tests (code scans; unit, functional, or accessibility tests).
* if it is determined that the feature is acceptable based on reviewing the feature at the new dev URL, it can be deployed to test or prod using the Jenkins pipeline.
* once deployed to prod, the feature should be reviewed again at the prod URL.  If accepted, the "cleanup" stage   

## Files in this repository
> cmd to update tree (from project root) `tree -I 'node_modules|coverage|.cache|app-web/public' -d -L 3`
```
├── app-web
│   ├── __fixtures__
│   ├── __mocks__
│   ├── __tests__
│   │   ├── components
│   │   ├── pages
│   ├── config
│   │   └── jest
│   ├── gatsby
│   ├── public
│   │   └── static
│   ├── shell-scripts
│   └── src
│       ├── assets
│       ├── components
│       ├── constants
│       ├── hoc
│       ├── pages
├── docs
├── functional-tests
│   ├── gradle
│   │   └── wrapper
│   └── src
│       └── test
├── openshift
└── pipeline
    ├── gradle
    │   └── wrapper
    └── src
        └── groovy
```

## Getting Started

## Deployment (Local Development For App-Web)

* Requires **Node 8** and **npm 6**
* Clone this repo
* Change into app-web project directory
* run: `npm install`
* replace relevant environment variables (for local dev only)
* *it may be* beneficial to have the gatsby cli package `npm install -g gatsby-cli`
* to start development server run: `npm run dev`
* to build a production version run: `npm run build`
* to view production build run (requires gatsby-cli to be installed globally): `gatsby serve`
* to run prettier: `npm run prettify`
* to run test suites: `npm test`

## Deployment (Docker for Local Development)

* Requires **Docker**
* move into `app-web` directory
* build image `docker build -t digital-gov-client .`
* run image as container with the following volumes (until a better solution is found) 
```
docker run -v `pwd`/src:/usr/src/app/src -v `pwd`/plugins:/usr/src/app/plugins -v `pwd`/__tests__:/usr/src/app/__tests__ -v `pwd`/__fixtures__:/usr/src/app/__fixtures__ -v `pwd`/__mocks__:/usr/src/app/__mocks__ -v `pwd`/source-registry:/usr/src/app/source-registry -p 8000:8000 devhub-client
```
* **Note** `npm run develop` calls gatsby develop and sets the host with `-H 0.0.0.0`. This is so docker can correctly
listen for requests on your local machines localhost.

## Deployment (OpenShift)

See (openshift/Readme.md)

## Getting Help or Reporting an Issue

To report bugs/issues/feature requests, please file an [issue](https://github.com/bcgov/devhub-app-web/issues/).

## How to Contribute

If you would like to contribute, please see our [CONTRIBUTING](CONTRIBUTING.md) guidelines.

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). 
By participating in this project you agree to abide by its terms.

## Issues/Suggestions
Make Suggestions/Issues [here!](https://github.com/bcgov/devhub-app-web/issues/new)
Issues are [markdown supported](https://guides.github.com/features/mastering-markdown/).

## License

    Copyright 2019 Province of British Columbia

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
