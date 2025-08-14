pipeline {
    agent any
    stages {
        stage("dependency-install-dev") {
            when { 
                expression { 
                    env.BRANCH_NAME == 'develop'
                }
            }
            steps {
                echo "Installing dependencies for develop"
                sh "npm install"
            }
        }

        stage("dependency-install-prod") {
            when { 
                expression {
                    env.BRANCH_NAME == 'production'
                }
            }
            steps {
                echo "Installing dependencies for production"
                sh "npm install"
                sh "npm build"
            }
        }
    }
}
