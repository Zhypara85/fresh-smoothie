pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t fresh-smoothie .'
            }
        }
    }

    post {
        success {
            echo 'Fresh Smoothie pipeline completed successfully!'
        }
        failure {
            echo 'Fresh Smoothie pipeline failed.'
        }
    }
}
