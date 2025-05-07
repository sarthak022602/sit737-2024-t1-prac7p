# SIT737 Task 9.1P - Cloud-Native Node.js Microservice (Student Reflection Style)

## 📘 Introduction

Hello Professor,

This README documents all the steps I personally followed to complete Task 9.1P for SIT737 - Cloud-Native Application Development. It includes details on how I created, containerized, and deployed a Node.js microservice with MongoDB integration using Kubernetes. Each part reflects my own understanding and effort throughout the task.

---

##  Step-by-Step Breakdown

###  1. Initial Setup

* I began by creating a new project folder `sit737-task9p-app` and initialized a Node.js project using `npm init -y`.
* Installed required dependencies: `express`, `mongodb`, and `dotenv`.


npm install express mongodb dotenv


* I created an `index.js` file that sets up a basic Express server with the following routes:

  * `/` for a welcome message
  * `/data` (POST) to insert a document into MongoDB
  * `/data` (GET) to fetch all documents

---

###  2. Dockerization

* I wrote a `Dockerfile` to containerize the Node.js app using the official Node Alpine image.
* The app was built into a Docker image named `sit737-node-app`:


docker build -t sit737-node-app .


---

###  3. Kubernetes Deployment

* I wrote multiple YAML files to deploy both the application and the MongoDB database on Kubernetes.

#### a. MongoDB Setup

* `mongodb-deployment.yaml`: Defines a Deployment and Service for MongoDB.
* `mongodb-storage.yaml`: Defines Persistent Volume and PVC for MongoDB.
* `mongodb-secret.yaml`: Stores MongoDB root username and password securely.

#### b. Application Setup

* `node-deployment.yaml`: Deploys the Node.js app using the Docker image.
* Set `imagePullPolicy: Never` to use the locally built image.
* The app was exposed via `NodePort` service.



### 🌐 4. Accessing the App

* I ran `kubectl get svc` to get the NodePort for the Node.js app.
* Accessed the app in the browser at:


http://localhost:3000


* I saw: `Welcome to SIT737 Task 9.1P Microservice!`

---

###  5. Verifying MongoDB Integration

* I used `curl` to test the `/data` POST and GET endpoints:


curl -X POST http://localhost:<NodePort>/data -H "Content-Type: application/json" -d '{"name":"Sarthak","task":"9.1P"}'

http://localhost:32719/


* The inserted document was successfully returned, confirming MongoDB connection.

---

##  Final Folder Structure

```
sit737-task9p-app/
├── index.js
├── .env
├── Dockerfile
├── package.json
├── node-deployment.yaml
├── mongodb-deployment.yaml
├── mongodb-secret.yaml
├── mongodb-storage.yaml
├── README.md
```

---

## Completion Status (As mentioned in the tasksheet)

* Node.js microservice ✔️
* MongoDB integration ✔️
* Kubernetes deployment ✔️
* Docker image + Kubernetes YAML files ✔️
* Secrets + PVCs ✔️
* Working GET/POST functionality ✔️

---

##  Final Notes

This task helped me get hands-on experience in building a microservice, containerizing it, and orchestrating its deployment using Kubernetes. I also learned how to securely manage credentials using Secrets and store persistent data using PVCs.

Thank you for reviewing my work!

Sincerely,
**Sarthak Dutta**
