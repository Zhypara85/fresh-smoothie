pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
    }

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

        stage('Push to ECR') {
            steps {
                sh '''
                    aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 779685156685.dkr.ecr.us-east-2.amazonaws.com
                    docker tag fresh-smoothie:latest 779685156685.dkr.ecr.us-east-2.amazonaws.com/fresh-smoothie:latest
                    docker push 779685156685.dkr.ecr.us-east-2.amazonaws.com/fresh-smoothie:latest
                '''
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
