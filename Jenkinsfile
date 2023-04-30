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
        sh 'docker build -t kpiatigorskii/hangman-app:hangman .'

    }

    stage('Pushes the Docker image to Docker Hub'){
        sh 'docker login -u kpiatigorskii -p dckr_pat_6whSoke9x4b7XCwQjpztIE3QnOg'
        //sh 'docker tag ${imageId} kpiatigorskii/hangman-app:hangman'
        sh 'docker push kpiatigorskii/hangman-app:hangman'
    }

    stage('Deploy'){
            sshagent(['my-creds']) {
                // ssh -o StrictHostKeyChecking=no ubuntu@${ec2_instanse} "rm -rf /home/ubuntu/hangman"
                // scp -o StrictHostKeyChecking=no -r ${WORKSPACE}  ubuntu@${ec2_instanse}:/home/ubuntu/hangman/
                sh """
                echo "${WORKSPACE}"
                ls -l

                ssh -o StrictHostKeyChecking=no ubuntu@${ec2_instanse} 'sudo docker login -u kpiatigorskii -p dckr_pat_6whSoke9x4b7XCwQjpztIE3QnOg'
                ssh -o StrictHostKeyChecking=no ubuntu@${ec2_instanse} 'sudo docker pull kpiatigorskii/hangman-app:hangman'
                ssh -o StrictHostKeyChecking=no ubuntu@${ec2_instanse} 'sudo docker run -d kpiatigorskii/hangman-app:hangman'
                """
                }
    }
}