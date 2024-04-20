import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

// local modules
import route from "./routes/index.js";
import connectToDb from "./config/db.js";

// load environment variables
dotenv.config();
const port = process.env.PORT || 3000;
const dbConnStr = process.env.DB_CONNECTION_STRING;

// get current directory
const __dirname = dirname(fileURLToPath(import.meta.url));

/********************************************************************/

// connect to database
connectToDb(dbConnStr);

// create express app
const app = express()
    .use(
        // set path for static files
        express.static(path.join(__dirname, "public")),
        // parse application/x-www-form-urlencoded (form post)
        express.urlencoded({ extended: true }),
        // parse application/json (fetch, xmlhttprequest, axios, ...)
        express.json(),
        // http logger
        morgan("combined")
    )
    // configure handlebars
    .engine(
        "hbs",
        engine({
            extname: ".hbs",
            helpers: {
                sum: (a, b) => a + b,
                shortText: (text, maxLen) =>
                    text.length > maxLen
                        ? text.substring(0, maxLen) + "..."
                        : text,
            },
        })
    )
    // set view engine
    .set("view engine", "hbs")
    // set views directory
    .set("views", path.join(__dirname, "app", "views"));

// initialize routes
route(app);

// open tcp http port
app.listen(port, () =>
    console.log(`Server listening at http://localhost:${port}`)
);
