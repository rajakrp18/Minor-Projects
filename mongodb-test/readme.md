# MongoDB Test Project

This project demonstrates a simple setup for running a Node.js application with a MongoDB database using Docker and Docker Compose.

---

## 🧱 Project Structure

mongodb-test/
├── Dockerfile
├── docker-compose.yaml
├── index.js
└── node_modules/ (ignored)

yaml
Copy
Edit

---

## 🚀 Getting Started

### 🔧 Prerequisites

Make sure you have the following installed:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## ⚙️ Setup & Run

### 1. Clone the repository

```bash
git clone https://github.com/rajakrp18/Minor-Projects.git
cd Minor-Projects/mongodb-test
2. Build and start services
bash
Copy
Edit
docker-compose up --build
This will:

Build the Node.js application from the Dockerfile

Start a MongoDB container

Start the Node.js container and link it to MongoDB

📁 Files
Dockerfile
Defines the Node.js application container, installing dependencies and running index.js.

docker-compose.yaml
Defines two services:

mongo: Official MongoDB container

app: Node.js app, built using Dockerfile, with MongoDB connection

🧪 Example Use
Once the containers are running, your Node.js app should connect to MongoDB. You can edit index.js to test CRUD operations, schedulers, or other MongoDB features.

🛑 Stop Containers
To stop and remove containers:

bash
Copy
Edit
docker-compose down
📌 Notes
node_modules/ is ignored using .gitignore

Feel free to extend this project with REST APIs or data models

📜 License
This project is open source and available under the MIT License.

✍️ Author
Raj Poddar
GitHub: @rajakrp18