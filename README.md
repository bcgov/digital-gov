---
title: Jenkins Github Flow Pipeline
description: A guide to setting up the BC Gov Jenkins OCP-CI/CD Pipeline
author: patricksimonian
---
## OCP-CI/CD Pipeline

### Background
The OCP-CI/CD Pipeline is a Github Flow pipeline. All deployments are PR based. 

### Getting Started

For the purpose of these instructions it is assumed you have some familiarity with Openshift Console
as well as the Openshift CLI. In addition some knowledge in configuring groovy scripts as well as JenkinsFile(s).
Lastly, you have a github repository set up, there is an __orphan__ branch called __'tools'__.


#### Steps
1. Ensure you have a project space in openshift, if you do not, please view https://pathfinder-faq-ocio-pathfinder-prod.pathfinder.gov.bc.ca/OCP/StartingANewProject.html
for details on aquiring one.

2. Create your tools setup in the github repo
   This is what your directory should look like, a version of this can be found within the [digital-gov repository](https://github.com/bcgov/digital-gov/tree/tools). You will of course need to modify the contents of some of these files so that they match your open shift project as well as github repo.
   ```
        ├── Jenkinsfile
        ├── README.md
        └── jenkins
                ├── base
                │   ├── Dockerfile
                │   └── configuration
                │       └── jobs
                │           └── [your-repos-name]
                │               └── config.xml
                ├── build.sh
                ├── config.groovy
                ├── deploy.sh
                └── templates
                        ├── jenkins.bc.yaml
                        └── jenkins.dc.yaml
   ```  
   a. Modify the config.xml file lns 34, 35
   ```xml
          <repoOwner>[your org]</repoOwner>
          <repository>[your repo name]</repository>
   ```
   b. Modify the config.groovy file
    ```groovy
        app {
        name = 'jenkins-[your project or repo name]'
        namespaces {
                'build'{
                        namespace = '[your openshift namespace that will hold the jenkins instance]'
                        disposable = true
                }
    ```


3. __Ensure__ you are logged into oc. Go to your favourite terminal and enter `oc whoami`. This should return your username if you are logged in.

4. Navigate to the `jenkins` folder in your command terminal.

5. Run the build config process `./build.sh`
> Didn't work? Are you sure your config.groovy is correct?
Are you logged in?

6. __Jenkins__ requires some secrets to already exist inside the namespace prior to deploying. It uses those secrets as a __base__ to create the jenkins slave and jenkins github secrets. 

Create the following secrets...

Jenkins Slave secret example
```json
{
    "apiVersion": "v1",
    "data": {
        "username": "amVua2lucy1zbGF2ZQ=="
    },
    "kind": "Secret",
    "metadata": {
        "creationTimestamp": "2018-09-20T16:54:17Z",
        "labels": {
            "template": "true"
        },
        "name": "template.[your config.groovy app.name value]-slave-user",
        "namespace": "[your oc namespace]",
        "resourceVersion": "565132167",
        "selfLink": "/api/v1/namespaces/[your oc namespace]/secrets/template.[your config.groovy app.name value]-slave-user",
        "uid": "cfaafa61-bcf5-11e8-862b-005056832285"
    },
    "type": "kubernetes.io/basic-auth"
}
```
Jenkins Github Secret example
```json
{
    "apiVersion": "v1",
    "data": {
        "password": "[github service account password HASHED]",
        "username": "[github service account username HASHED]"
    },
    "kind": "Secret",
    "metadata": {
        "creationTimestamp": "2018-09-20T16:54:24Z",
        "labels": {
            "template": "true"
        },
        "name": "template.[your app name found in config.groovy]-github",
        "namespace": "[openshift namespace name]",
        "resourceVersion": "565226844",
        "selfLink": "/api/v1/namespaces/[openshift namespace name]/secrets/template.[your app name found in config.groovy]-github",
        "uid": "d3ddbece-bcf5-11e8-862b-005056832285"
    },
    "type": "kubernetes.io/basic-auth"
}
```
7. After creating those base secrets run the command `./deploy.sh`

8. You should be done! 

## How does it all work?

When a pull request is made in your repo, Jenkins pick it up via a web hook. Jenkin's will look for your `JenkinsFile` within your pull request (NOT to be confused with the jenkins file in the `tools` branch..more on that later), and run the jenkins job accordingly. Of course your repo must be correctly configured to allow the jenkins file to build and deploy your project. Examples of how this works can be found at https://github.com/bcgov/devhub-app-web.

### Considerations

- Code goes into Production before it goes into master. If this doesn't make sense then you don't understand __Github Flow__ and need to read up on it:)

- NEVER merge pull requests manually. The `Jenkinsfile` has a stage to accomplish this. 


## The Big Gotchya
> I lost my feature in prod or test!!

Because of how code 'goes into master' (or test for that matter), it is imperative you have a good understanding of __rebasing__ in git. Why? It all has to do with the flow...


The __OCP-CD-Pipeline__ has 5 main stages (more can be added via your `Jenkinsfile`)

- build: builds your application image in openshift
- deploy dev: runs your deploy config and creates a container in the dev namespace
- deploy test: (promote y/n?): deploys to the test name space
- deploy prod: (promote y/n?): deploys to the prod name space
- cleanup: (promote y/n) cleans the dev instance of the container and merges the pr.

Let's say two features are being worked on at the same time, they were branched off of master at the same commit.

- Feature A: Add a search function to the app

- Feature B: Add a new page to the application

Feature A is completed first and runs through the Jenkinsfile stages, is deployed to prod and then merged. 

Feature B is finally completed and runs through the Jenkinsfile and then quickly finds that in test/prod the search feature is missing! 

This is because __builds are based on the code within the pr and not off of another base branch__. 

Feature B does not have Feature A's code.

To resolve this issue, prior to promoting code to a shared namespace (tools/prod) Feature B should make sure that it is __0 commits behind master__, in other words it should make sure it __rebases off of the latest version of master__. This will have it contain feature A's code. 

An example flow is
```bash
git checkout master
git pull
git checkout featureB
git rebase master
git push featureB
```

This ofcourse may not work if there are merge commits between feature A and feature B.

---

## What about the jenkins file in `tools`?

When making PR's to the tools branch, to update the pipeline for instance. This particular `Jenkinsfile` will spawn a new jenkins instance in the tools namespace to redeploy the Original Jenkins instance + changes from the PR. 

__WARNING!__ During this process, all prs that are being handled by the original Jenkins instance will not work. The new jenkins instance that is 'redeploying' the original instance must resolve first.