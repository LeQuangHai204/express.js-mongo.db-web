import mongoose, { Schema, model } from "mongoose";
import slug from "mongoose-slug-updater";

// Apply the slug plugin to mongoose schema
mongoose.plugin(slug);

// Create course model SUB CLASS based on the schema
const CoursesModel = model(
    "courses",
    new Schema(
        {
            name: { type: String, maxLength: 255, required: true },
            description: { type: String, maxLength: 600, default: "" },
            image: { type: String, maxLength: 255 },
            video_id: { type: String, maxLength: 255 },
            slug: { type: String, slug: "name", unique: true },
        },
        { timestamps: true }
    )
);

export default CoursesModel;
