pipeline {
    agent none
    stages {
        
        stage('Preparation') {
            agent { label 'master' }
            steps {
                script {
                    echo "Initialisation du pipeline avec les plugins Jenkins"
                }
            }
        }

        stage('Utilisation de Platform Labeler Plugin') {
            agent { label 'linux && amd64' }  // Exemple de plateforme spécifique, modifiez selon les étiquettes créées
            steps {
                echo "Étape exécutée uniquement sur un agent Linux avec une architecture amd64."
            }
        }

        stage('Utilisation de Notpool Agents Plugin') {
            agent {
                label 'not_pool'  // Exclure l'agent spécifique selon la configuration de Notpool
            }
            steps {
                echo "Cette étape s'exécute uniquement sur les agents non restreints par Notpool Agents Plugin."
            }
        }

        stage('Exécution de NodeJS Plugin') {
            agent any
            tools {
                nodejs 'NodeJS_14'  // Utilisez une version de Node.js configurée dans Jenkins (à configurer via NodeJS Plugin)
            }
            steps {
                script {
                    sh 'node -v'  // Vérifie la version de Node.js pour valider la configuration du plugin NodeJS
                    sh 'npm install'  // Installation des dépendances (assurez-vous que le package.json est dans le repo)
                    sh 'npm test'  // Exécution de tests pour montrer l'environnement NodeJS
                }
            }
        }
        
        stage('Démonstration du Node Sharing Executor Plugin') {
            agent { label 'shared_node' }  // Nécessite que le noeud soit partagé entre instances
            steps {
                echo "Cette étape s'exécute sur un nœud partagé, démontrant Node Sharing Executor Plugin."
            }
        }

    }
    post {
        success {
            echo "Pipeline exécuté avec succès, démonstration des plugins terminée."
        }
        failure {
            echo "Échec de l'exécution du pipeline."
        }
    }
}
