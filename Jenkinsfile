@Library('devops-library') _  // Load the shared library

pipeline {
  tools {
        nodejs 'Default NodeJS (v12.13.0)' // Use the name defined in Global Tool Configuration
    }
  agent any
  
  stages {
      stage('Hello') {
          steps {
              script {
                  hello()  // Calls vars/hello.groovy
              }
          }
      }
      stage('Install FE') {
            steps {
                script {
                    ngInstall()  // Calls vars/mvnInstall.groovy
                }
            }
        }
        stage('Start FE') {
            steps {
                script {
                    ngStart()  // Calls vars/mvnInstall.groovy
                }
            }
        }
      }
  }
