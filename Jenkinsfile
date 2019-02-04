pipeline {
  agent none
  options {
    disableResume()
  }

  parameters {
    string(name: 'RUN_FUNCTIONAL_TESTS', defaultValue: 'FALSE', description: 'used for when statement in functional test stage?')
  }

  environment {
    OCP_PIPELINE_CLI_URL = 'https://raw.githubusercontent.com/BCDevOps/ocp-cd-pipeline/v0.0.5/src/main/resources/pipeline-cli'
    OCP_PIPELINE_VERSION = '0.0.5'
  }
  stages {
    stage('Build') {
      agent { label 'build' }
      steps {
        echo "Aborting all running jobs ..."
        script {
          abortAllPreviousBuildInProgress(currentBuild)
        }
        echo "Building ..."
        sh "curl -sSL '${OCP_PIPELINE_CLI_URL}' | bash -s build --config=openshift/config.groovy --pr=${CHANGE_ID}"
      }
    }
    stage('Deploy (DEV)') {
      agent { label 'deploy' }
      steps {
        echo "Deploying ..."
        sh "curl -sSL '${OCP_PIPELINE_CLI_URL}' | bash -s deploy --config=openshift/config.groovy --pr=${CHANGE_ID} --env=dev"
        echo "NOT Creating SSO Client at this time, please view Jenkinsfile for more details!"
        // digital.gov is not using sso at this time, so we will avoid creating clients for the dev name space
        // as a note, the reason we are dynamically creating clients for sso is because the dev name space's route is
        // based on the pr number and therefor is constantly changing. 
        // once sso is required this code may be uncommentefd (some changes may need to be done permissions wise to allow)
        // dev to access the tools namespaces' secrets. 
        // in addition the caddy file may need modifying to allow for front end code to reference the dynamic uri for an sso client
        // see the devhub-app-web repo and or the signing-web repo for details on that. 
        // echo "Creating sso client ..."
        // sh "openshift/keycloak-scripts/kc-create-client.sh ${CHANGE_ID}"
      }
    }
    
    stage('Functional Test (DEV)') {
      // functional tests are currently broken as homepage has been redesigned.
      // for now this stage is being skipped. All of this has been documented
      // see https://taiga.pathfinder.gov.bc.ca/project/lukegonis-developergovbcca/issue/309
      // Oct 18 2018 Patrick Simonian
      when {
        expression { params.RUN_FUNCTIONAL_TESTS == 'TRUE'}
      }
      agent { label 'deploy' }
      steps {
        echo "Functional Test (DEV) ..."
        sh "unset JAVA_OPTS; pipeline/gradlew --no-build-cache --console=plain --no-daemon -b pipeline/build.gradle cd-functional-test -Pargs.--config=openshift/config.groovy -Pargs.--pr=${CHANGE_ID} -Pargs.--env=dev"
      }
    }

    stage('Deploy (TEST)') {
      agent { label 'deploy' }
      when {
        environment name: 'CHANGE_TARGET', value: 'master'
      }
      steps {
        script {
          def IS_APPROVED = input(message: "Deploy to TEST?", ok: "yes", parameters: [string(name: 'IS_APPROVED', defaultValue: 'yes', description: 'Deploy to TEST?')])
          if (IS_APPROVED != 'yes') {
            currentBuild.result = "ABORTED"
            error "User cancelled"
          }
        }
        echo "Deploying ..."
        sh "curl -sSL '${OCP_PIPELINE_CLI_URL}' | bash -s deploy --config=openshift/config.groovy --pr=${CHANGE_ID} --env=test"
      }
    }

    stage('Deploy (PROD)') {
      agent { label 'deploy' }
      when {
        environment name: 'CHANGE_TARGET', value: 'master'
      }
      steps {
        script {
          def IS_APPROVED = input(message: "Deploy to PROD?", ok: "yes", parameters: [string(name: 'IS_APPROVED', defaultValue: 'yes', description: 'Deploy to PROD?')])
          if (IS_APPROVED != 'yes') {
            currentBuild.result = "ABORTED"
            error "User cancelled"
          }
        }
        echo "Deploying ..."
        sh "curl -sSL '${OCP_PIPELINE_CLI_URL}' | bash -s deploy --config=openshift/config.groovy --pr=${CHANGE_ID} --env=prod"
      }
    }
    stage('Verification/Cleanup') {
      agent { label 'deploy' }
      input {
        message "Should we continue with cleanup, merge, and close PR?"
        ok "Yes!"
      }
      steps {
        echo "Cleaning ..."
        sh "curl -sSL '${OCP_PIPELINE_CLI_URL}' | bash -s cleanup --config=openshift/config.groovy --pr=${CHANGE_ID}"
        script {
          String mergeMethod=("master".equalsIgnoreCase(env.CHANGE_TARGET))?'merge':'squash'
          echo "Merging (using '${mergeMethod}' method) and closing PR"
          bcgov.GitHubHelper.mergeAndClosePullRequest(this, mergeMethod)
        }
        echo "Cleaning sso client ..."
        // uncommented for reasons described in dev stage!
        // sh "openshift/keycloak-scripts/kc-delete-client.sh ${CHANGE_ID}"
      }
    }
  }
}