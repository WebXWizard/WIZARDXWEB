# WizardX Web

WizardX Web is a full-stack web project built with Next.js, Tailwind CSS, Express.js, and MongoDB. It includes a public user-facing website, user authentication, product browsing for a laptop catalog, contact enquiry submission, and an admin area for managing users and adding products.

## Project Description

This project demonstrates a complete web application workflow with a modern React frontend and a Node.js backend API. Users can sign up, log in, browse laptop products, filter/search products by category or name, view product details, and submit contact enquiries. Administrators can access dashboard-style pages, manage registered users, and add new products to the MongoDB database.

The repository also includes a `Section1` folder with standalone HTML, Tailwind, Preline, and JavaScript practice files used for learning frontend layout and JavaScript fundamentals.

## Features

- User signup and login
- Form validation with Formik and Yup
- Product listing, searching, filtering, and detail pages
- Admin dashboard UI
- User management with update and delete actions
- Product creation from the admin panel
- Contact/enquiry form submission
- MongoDB database integration with Mongoose
- Tailwind CSS and Preline-based UI components
- Practice files for HTML, Tailwind CSS, Preline, and JavaScript basics

## Tech Stack

### Frontend

- Next.js 14
- React 18
- Tailwind CSS
- Preline UI
- Axios
- Formik
- Yup
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv
- nodemon

## Folder Structure

```text
WIZARDXWEB-AUG/
|-- Backend/
|   |-- index.js
|   |-- connection.js
|   |-- models/
|   |   |-- contact.js
|   |   |-- product.js
|   |   `-- user.js
|   `-- routers/
|       |-- contact.js
|       |-- product.js
|       `-- user.js
|-- Frontend/
|   |-- public/
|   `-- src/
|       |-- app/
|       |   |-- admin/
|       |   |-- productListing/
|       |   `-- user/
|       `-- context/
`-- Section1/
    |-- JavaScript/
    `-- *.html
```

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js
- npm
- MongoDB Atlas account or local MongoDB database

## Backend Setup

1. Go to the backend folder:

```bash
cd Backend
```

2. Install dependencies:

```bash
npm install
```

3. Configure MongoDB:

The backend currently connects to MongoDB from `connection.js`. For a production-ready setup, move the MongoDB connection string into a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. Start the backend server:

```bash
npm run dev
```

The backend runs on:

```text
http://localhost:5000
```

## Frontend Setup

1. Go to the frontend folder:

```bash
cd Frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend development server:

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:3000
```

## API Routes

### User Routes

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/user/add` | Register a new user |
| POST | `/user/authenticate` | Login/authenticate user |
| GET | `/user/getall` | Get all users |
| GET | `/user/getbyid/:id` | Get user by ID |
| GET | `/user/getbyemail/:email` | Get user by email |
| PUT | `/user/update/:id` | Update user |
| DELETE | `/user/delete/:id` | Delete user |

### Product Routes

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/product/add` | Add a new product |
| GET | `/product/getall` | Get all products |
| GET | `/product/getbyid/:id` | Get product by ID |
| DELETE | `/product/delete/:id` | Delete product |

### Contact Routes

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/contact/add` | Submit a contact enquiry |
| GET | `/contact/getall` | Get all contact enquiries |

## Main Pages

| Page | Path |
| --- | --- |
| Home | `/` |
| User Home | `/user` |
| Signup | `/user/signUp` |
| Login | `/user/login` |
| Browse Products | `/user/browse` |
| Product Details | `/user/view/[id]` |
| Contact | `/user/contact` |
| Admin Dashboard | `/admin/dashboard` |
| Manage Users | `/admin/manageUser` |
| Add Product | `/admin/addProduct` |

## Available Scripts

### Frontend

```bash
npm run dev
npm run build
npm run start
npm run lint
```

### Backend

```bash
npm run dev
```

## Notes

- The frontend expects the backend API to run on `http://localhost:5000`.
- The backend CORS configuration allows requests from `http://localhost:3000`.
- Product images are stored as image URLs.
- Passwords are currently stored as plain text in the database. Before production use, add password hashing with bcrypt and proper JWT-based authentication.
- The MongoDB connection string should not be committed directly in source code. Use environment variables for safer configuration.

## Future Improvements

- Add secure password hashing
- Add JWT authentication middleware
- Move API base URL to environment variables
- Fix admin route redirects after user updates
- Add validation to the product form
- Add image upload support for products
- Improve product router route structure
- Add loading and error states on frontend pages

## Author

WizardX Web project for full-stack web development practice.
