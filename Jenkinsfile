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
                echo 'build' 
            }
        }
        stage('Test') {
            steps {
                echo 'test' 
            }
        }
        stage('Deploy') {
            steps {
                echo 'deploy' 
            }
        }
    }
}
