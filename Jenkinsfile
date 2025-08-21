pipeline {
    agent any
    environment {
        DOCKER_REGISTRY = "hashir313"
        IMAGE_NAME = "node-app"
    }
    stages {
        stage("Build Image"){
            steps {
                script {
                    sh "docker build -t $DOCKER_REGISTRY/$IMAGE_NAME:${env.BRANCH_NAME} ."
                }
            }
        }

        stage("Push Image"){
            when {
                expression {
                    env.BRANCH_NAME == 'production'
                }
            }
            steps {
                script {
                    sh "echo $DOCKER_PASSWORD | docker login -u $DOCKER_REGISTRY --password-stdin"
                    sh "docker push $DOCKER_REGISTRY/$IMAGE_NAME:${env.BRANCH_NAME}"
                }
            }
        }

        stage("Run Dev Container") {
            when {
                expression {
                    env.BRANCH_NAME == 'develop'
                }
            }
            steps {
                script {
                    sh "docker compose up -d"
                }
            }
        }
    }
}
