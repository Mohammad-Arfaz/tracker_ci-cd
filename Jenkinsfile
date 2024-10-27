pipeline {
    agent any 

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/your-repo.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                // Add your build commands here
                sh 'make build'
            }
        }
        stage('Test') {
            steps {
                // Add your testing commands here
                sh 'make test'
            }
        }
        stage('Deploy') {
            steps {
                // Add your deployment commands here
                sh 'make deploy'
            }
        }
    }

