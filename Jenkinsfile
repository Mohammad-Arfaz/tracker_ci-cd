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
                bat 'mvn clean install' 
            }
        }
        stage('Test') {
            steps {
                bat 'mvn test' 
            }
        }
        stage('Deploy') {
            steps {
                bat 'your-deploy-command' 
            }
        }
    }
}
