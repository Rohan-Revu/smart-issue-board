# Smart Issue Board

Smart Issue Board is a web-based issue tracking application that allows users to report, view, and manage issues efficiently.  
The application also helps reduce duplicate issue submissions by detecting similar issues before they are created.

---

## 🚀 Live Demo

🔗 **Deployed URL:**  
[https://smart-issue-board-ecru-seven.vercel.app/]

---

## 📌 Project Overview

This project was built as part of an assignment to demonstrate frontend development, authentication, database usage, and basic problem-solving logic.  
Users can sign up, log in, create issues, and view existing issues through a clean and responsive interface.

---

## 1️⃣ Why did you choose the frontend stack you used?

I chose **Next.js with React and TypeScript** for the following reasons:

- **Next.js (App Router)** provides a simple file-based routing system without needing a separate `index.html`.
- **React** allows component-based development, making the UI modular and reusable.
- **TypeScript** improves reliability by catching errors at compile time.
- Built-in optimizations such as fast routing and easy deployment with **Vercel** made Next.js ideal.
- The stack integrates smoothly with **Firebase Authentication and Firestore**.

---

## 2️⃣ Explain your Firestore data structure

Firestore is used as a NoSQL database to store issue data.

### 📂 Collection: `issues`

Each issue is stored as a document with the following structure:

```json
{
  "title": "...................",
  "description": "...................",
  "priority": "...................",
  "status": "...................",
  "createdBy": "...................",
  "createdAt": "..................."
}
```
---
## 3️⃣ Explain how you handled similar issues
To reduce duplicate issue creation, I implemented a similar issue detection mechanism.

🧠 Approach:

When a user submits an issue, its title and description are compared with existing issues
- A text similarity function calculates how closely the new issue matches existing ones.
- If similarity crosses a defined threshold, a modal displays possible duplicates.
- The user can choose whether to proceed or cancel submission.
  
This helps keep the issue board clean and prevents repeated reports.

---
## 4️⃣ What was confusing or challenging?
Some challenges I faced during development:

- Understanding Next.js App Router structure initially.
- Implementing authentication-protected routes.
- Handling Firestore reads and writes efficiently.
- Managing Git conflicts and deployment issues while pushing to GitHub and deploying on Vercel.

These challenges helped improve my understanding of real-world application development.

---
## 5️⃣ What would you improve next?

With more time, I would add:

- Role-based access (Admin / User)
- Issue comments and activity history
- Issue assignment to specific users
- More advanced similarity detection using NLP
- UI improvements such as dark mode and notifications

---
## 🛠️ Tech Stack

- Frontend: Next.js (App Router), React, TypeScript
- Backend / Services: Firebase Authentication, Firestore
- Styling: CSS
- Deployment: Vercel
---


## 🔽 Clone the Repository
## 👉 Clone from GitHub
```
git clone https://github.com/Rohan-Revu/smart-issue-board.git
```
## 👉 Move into the project directory
```
cd smart-issue-board
```
## 👉 Install dependencies
```
npm install
```
## 👉 Create environment file
```
touch .env.local
```
Add your Firebase keys inside .env.local:
```

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```
## 👉 Run the development server
```
npm run dev
```
## 👉 Open in browser
```
http://localhost:3000
```


