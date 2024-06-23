# Password Keeper

Password Keeper is a web application for securely storing and managing your passwords. This project integrates a RESTful API to handle CRUD operations for password management.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)


## Introduction

Password Keeper allows users to store, view, search, update, and delete passwords in a secure and user-friendly interface. The application uses a RESTful API for backend operations and is built with HTML, JavaScript, and Axios for making HTTP requests.

## Features

- Add new passwords with a title and password.
- View all stored passwords.
- Search passwords by title.
- Update existing passwords.
- Delete passwords.

## Technologies Used

- **HTML**: For structuring the web page.
- **JavaScript**: For adding functionality and interactivity.
- **Axios**: For making HTTP requests to the RESTful API.
- **RESTful API**: Provided by [crudcrud.com](https://crudcrud.com) for handling CRUD operations.

## Installation

To get started with Password Keeper, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/Password-Keeper.git
- Navigate to the project directory:

- Copy code
- cd Password-Keeper
## Usage
To use the Password Keeper application:

- Open the password.html file in your web browser.
- Add a new password by entering a title and password, then click the "ADD" button.
- View the list of stored passwords under "ALL PASSWORDS".
- Use the search bar to filter passwords by title.
- Update or delete passwords using the "Edit" and "Delete" buttons respectively.
## API Endpoints
The application interacts with the following API endpoints provided by crudcrud.com:

- GET /api/48432301cefe457392e5e9f0484818ea/password: Retrieve all stored passwords.
- POST /api/48432301cefe457392e5e9f0484818ea/password: Add a new password.
- DELETE /api/48432301cefe457392e5e9f0484818ea/password/{id}: Delete a specific password by ID.
- PUT /api/48432301cefe457392e5e9f0484818ea/password/{id}: Update a specific password by ID.
## Contributing
Contributions are welcome! To contribute:

- Fork the repository.
- Create a new branch:
- Copy code
- git checkout -b feature/your-feature-name
- Make your changes.
- Commit your changes:
- Copy code
git commit -m 'Add some feature'
- Push to the branch:
- Copy code
- git push origin feature/your-feature-name
- Open a pull request.
