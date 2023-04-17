pipeline {
    agent any
    stages {
        stage('Verify .sh files') {
            steps {
                sh 'docker build --target verify-sh .'
            }
        }
        stage('Restore') {
            steps {
                sh 'docker build --target restore .'
            }
        }
        stage('Verify Format') {
            steps {
                sh 'docker build --target verify-format .'
            }
        }
        stage('Test') {
            steps {
                sh 'docker build --target test .'
            }
        }
    }
}
