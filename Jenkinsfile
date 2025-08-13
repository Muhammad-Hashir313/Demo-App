pipeline {
    agent any
    stages {
        stage("dependency-install") {
            when {
                branch 'develop'
            }
            steps {
                echo "Installing dependencies for develop"
            }
        }
        stage("dependency-install") {
            when {
                branch 'production'
            }
            steps {
                echo "Installing dependencies for production"
            }
        }
    }
}
