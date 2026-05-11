pipeline {
    agent any

    triggers {
        githubPush()
    }

    tools {
        nodejs 'react-build-job'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy React App') {
            steps {
                bat 'xcopy /E /I /Y build D:\\deployments\\react-app'
            }
        }

    }
}