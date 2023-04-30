// 1. Pulls the latest code from the GitHub repository.
// 2. Builds the Docker image using the Dockerfile.
// 3. Pushes the Docker image to Docker Hub.
// 4. Deploys the Docker image to an EC2 instance using SSH and Docker commands.
// 5. Sends a notification to a Slack channel when the deployment is complete.

node{
    stage('checkout') {
            git \
                credentialsId: 'github-creds', \
                url: 'https://github.com/KPiatigorskii/hangman-exam-review.git', \
                branch: 'main'
        }

    stage('Build Docker image') {
        sh 'pwd'
        sh 'ls -al'
        // sh 'docker build . -t hangman_app'
    }

    stage('Pushes the Docker image to Docker Hub'){
        echo 'Hello'
    }
}