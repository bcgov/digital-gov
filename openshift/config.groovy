
app {
    name = 'digital-gov'
    namespaces {
        'build'{
            namespace = 'zklvz6-tools'
            disposable = true
        }
        'dev' {
            namespace = 'zklvz6-dev'
            disposable = true
        }
        'test' {
            namespace = 'zklvz6-test'
            disposable = false
        }
        'prod' {
            namespace = 'zklvz6-prod'
            disposable = false
        }
    }

    git {
        workDir = ['git', 'rev-parse', '--show-toplevel'].execute().text.trim()
        uri = ['git', 'config', '--get', 'remote.origin.url'].execute().text.trim()
        ref = opt.'branch'?:"refs/pull/${opt.'pr'}/head"
        commit = ['git', 'rev-parse', 'HEAD'].execute().text.trim()
    }

    build {
        env {
            name = "build"
            id = "pr-${opt.'pr'}"
        }
        version = "${app.build.env.name}-v${opt.'pr'}"
        name = "${opt.'build-name'?:app.name}"
        suffix = "-pr-${opt.'pr'}"
        id = "${app.name}${app.build.suffix}"
        namespace = app.namespaces.'build'.namespace
        timeoutInSeconds = 60*20 // 20 minutes
        templates = [
            [
                'file':'openshift/bc.yaml',
                'params':[
                    'NAME': app.build.name,
                    'SUFFIX': app.build.suffix,
                    'VERSION': app.build.version,
                    'SOURCE_REPOSITORY_URL': app.git.uri,
                    'SOURCE_REPOSITORY_REF': app.git.ref
                ]
            ], [
                'file':'openshift/bddstack.bc.json',
                'params':[
                    'NAME':"bdd-stack",
                    'SUFFIX': app.build.suffix,
                    'VERSION': app.build.version,
                    'SOURCE_CONTEXT_DIR': "functional-tests",
                    'SOURCE_REPOSITORY_URL': app.git.uri,
                    'SOURCE_REPOSITORY_REF': app.git.ref
                ]
            ]
        ]
    }

    deployment {
        env {
            name = vars.deployment.env.name // env-name
            id = vars.deployment.env.id
        }
        version = "${vars.deployment.version}" //app-version  and tag
        name = "${vars.deployment.name}" //app-name   (same name accross all deployments)
        suffix = "${vars.deployment.suffix}"
        id = "${app.deployment.name}${app.deployment.suffix}" // app (unique name across all deployments int he namespace)
        namespace = "${vars.deployment.namespace}"
        host = "${vars.deployment.host}"
        ssoURL = "${vars.deployment.ssoURL}"
        ssoClient = "${vars.deployment.ssoClient}"
        ssoRealm = "${vars.deployment.ssoRealm}"

        timeoutInSeconds = 60*20 // 20 minutes
        templates = [
                [
                    'file':'openshift/dc.yaml',
                    'params':[
                        'NAME':app.deployment.name,
                        'SUFFIX':app.deployment.suffix,
                        'VERSION': app.deployment.version,
                        'HOST': app.deployment.host,
                        'SSO_BASE_URL_VALUE': app.deployment.ssoURL,
                        'SSO_CLIENT_ID_VALUE': app.deployment.ssoClient,
                        'SSO_REALM_NAME_VALUE': app.deployment.ssoRealm
                    ]
                ]
        ]
    }
}

environments {
    'dev' {
        vars {
            deployment {
                env {
                    name ="dev"
                    id = "pr-${opt.'pr'}"
                }
                host = ""
                suffix = "-dev-${opt.'pr'}"
                name = "${opt.'deployment-name'?:app.name}"
                namespace = app.namespaces[env.name].namespace
                version = "${vars.deployment.name}-${vars.deployment.env.name}-v${opt.'pr'}"
            }
        }
    }
    'test' {
        vars {
            deployment {
                env {
                    name ="test"
                    id = "pr-${opt.'pr'}"
                }
                host = ""
                suffix = '-test'
                name = "${opt.'deployment-name'?:app.name}"
                namespace = app.namespaces[env.name].namespace
                version = "${vars.deployment.name}-${vars.deployment.env.name}" //app-version  and tag
            }
        }
    }
    'prod' {
        vars {
            deployment {
                env {
                    name ="prod"
                    id = "pr-${opt.'pr'}"
                }
                host = "digital.pathfinder.gov.bc.ca"
                suffix = ''
                id = "${app.name}${vars.deployment.suffix}"
                name = "${opt.'deployment-name'?:app.name}"
                namespace = app.namespaces[env.name].namespace
                version = "${vars.deployment.name}-${vars.deployment.env.name}" //app-version  and tag
            }
        }
    }
}
