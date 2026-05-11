pipeline {
    agent any

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
    }
}