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
        stage('Install') {
            steps {
                sh 'npm config set legacy-peer-deps true'
                sh 'npm install --registry https://registry.npmjs.org'
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
