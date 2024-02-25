# CareNow Take Home Assignment 2024

**By: Nadya Djojosantoso**

## Project Overview

Create a basic web application that includes a front-end form using React.js (any UI framework such as ChakraUI, Antd, etc.) and a back-end API. The application's purpose is for medical providers to input details of treatments and medications for patients.

### Front-End Requirement

- Develop the user interface utilizing React.js.
- The form should include the following fields:
  - Patient Name (String)
  - Patient ID (Numeric or Alphanumeric)
  - Date of Treatment (Date)
  - Treatment Description (Array of Strings)
    - Dropdown list that allow multiple selection
  - Medications Prescribed (Array of Strings)
    - Dropdown list that allow multiple selection
  - Cost of Treatment (Float/Decimal)
- Include fundamental validations for the form.
- Ensure the form data can be submitted to the backend API.

### Back-End Requirement

- Build a RESTful API to manage the form's data submission.
- You’re free to use any Node.JS-based backend framework.
- The use of Firestore data store is encouraged but not required.

## Getting Started

### Pre-installation

1. Make sure you have the latest Node.js and NPM versions installed.
2. Create a Firebase project with an empty Firestore database set up. [Follow this instruction.](https://firebase.google.com/docs/firestore/quickstart)
3. Create a service account for the project. [Follow this instruction.](https://cloud.google.com/iam/docs/service-accounts-create#iam-service-accounts-create-console)
4. If you used "Locked mode" for Firestore, add the roles "Cloud Datastore User" and "Firestore Service Agent" to the service account.

### Installation

1. Clone the repository and install the necessary packages.

```bash
git clone https://github.com/nadyafebi/carenow-takehome.git
cd carenow-takehome
npm install
```

2. From your service account details, create a new key and download it as `servicekey.json`. Put this file in the root of the project folder.

3. Run the project. This will build the React app first and then run the server.

```bash
npm start
```

## Tech Stack

- Node.js
- Express
- React.js
- Chakra UI
- Firebase Firestore
