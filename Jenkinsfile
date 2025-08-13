pipeline {
    agent any
    stages {
        stage("dependency-install-dev") {
            when {
                branch 'develop'
            }
            steps {
                echo "Installing dependencies for develop"
            }
        }
        stage("dependency-install-prod") {
            when {
                branch 'production'
            }
            steps {
                echo "Installing dependencies for production"
            }
        }
    }
}
