pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
        AWS_REGION = "us-east-2"
        ECR_REGISTRY = "274044230621.dkr.ecr.us-east-2.amazonaws.com"
        ECR_REPOSITORY = "fresh-smoothie"
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

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t fresh-smoothie:latest .'
            }
        }

        stage('Trivy Scan') {
            steps {
                sh 'trivy image --exit-code 0 --severity HIGH,CRITICAL fresh-smoothie:latest'
            }
        }

        stage('Push to ECR') {
            steps {
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'fresh-smoothie-aws']]) {
                    sh '''
                        aws ecr get-login-password --region $AWS_REGION | \
                        docker login --username AWS --password-stdin $ECR_REGISTRY

                        docker tag fresh-smoothie:latest \
                        $ECR_REGISTRY/$ECR_REPOSITORY:latest

                        docker push \
                        $ECR_REGISTRY/$ECR_REPOSITORY:latest
                    '''
                }
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
