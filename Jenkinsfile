pipeline {
    agent {
        kubernetes {
            yaml '''
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: node
    image: timbru31/node-alpine-git
    command:
    - sleep
    args:
    - infinity
'''
        defaultContainer 'node'
        }
    }
    stages {
        stage('Configure') {
            steps {
                withCredentials([file(credentialsId: 'my-lodash-npm-config', variable: 'npm_config')]) {
                    writeFile file: '.npmrc', text: readFile(npm_config)
                }
            }
        }
        stage('Install') {
            steps {
                sh 'npm config set legacy-peer-deps true'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm publish'
            }
        }
    }
}
