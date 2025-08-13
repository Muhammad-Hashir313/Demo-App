pipeline {
    agent any
    stages {
        stage("dependency-install-dev") {
    when { expression { env.BRANCH_NAME == 'develop' } }
    steps { echo "Installing dependencies for develop" }
}

stage("dependency-install-prod") {
    when { expression { env.BRANCH_NAME == 'production' } }
    steps { echo "Production is working it means." }
}
    }
}
