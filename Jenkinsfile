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
                    sh "echo Running production branch"
                    sh "docker-compose up --build -d"
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
                    sh "echo Running develop branch"
                    sh "docker-compose up -d"
                }
            }
        }
    }
}
