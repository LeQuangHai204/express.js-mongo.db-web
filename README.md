# expressjs-mongodb-ssr-web

My small project to practice on backend development. This is a SSR website that implement the best practice of using an MVC model in design

### Technology stack

-   Express JavaScript library
-   Mongo database engine

### Getting Started

1. **Installation**:
    ```bash
    npm install
    ```
2. **Database Setup**:

    - Modify the connection string in the `.env` file to point to your MongoDB database.
    - In the database, create a collection named `courses`.
    - Import the `courses.json` file into the `courses` collection.

3. **Running the Application**:
    ```bash
    npm start
    ```
    This will start the application and you can access it in your browser at `http://localhost:3000`, or you can change the port in `.env` file.
