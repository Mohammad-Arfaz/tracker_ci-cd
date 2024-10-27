pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Mohammad-Arfaz/tracker_ci-cd.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                bat 'your-windows-build-command' 
            }
        }
        stage('Test') {
            steps {
                bat 'your-windows-test-command' 
            }
        }
        stage('Deploy') {
            steps {
                bat 'your-windows-deploy-command' 
            }
        }
    }
}
