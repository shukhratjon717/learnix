import { Schema } from "mongoose";
import { LessonCategory, LessonDeliveryMethod, LessonLevel, LessonStatus, LessonType } from "../libs/enums/lesson.enum";

const LessonSchema = new Schema(
    {
        lessonType: {
            type: String,
            enum: LessonType,
            required: true,
        },

        lessonStatus: {
            type: String,
            enum: LessonStatus,
            default: LessonStatus.PUBLISHED,
        },

        lessonCategory: {
            type: String,
            enum: LessonCategory,
            required: true,
        },

        lessonTitle: {
            type: String,
            required: true,
        },

        lessonPrice: {
            type: Number,
            required: true,
        },

        lessonLevel: {
            type: String,
            enum: LessonLevel,
        },

        lessonDeliveryMethod: {
            type: String,
            enum: LessonDeliveryMethod,
			default: LessonDeliveryMethod.HYBRID
        },

        lessonInstructor: {
            type: String,
            required: true,
        },

        lessonDuration: {
            type: Number,
            required: true,
        },

        lessonViews: {
            type: Number,
            default: 0,
        },

        lessonLikes: {
            type: Number,
            default: 0,
        },

        lessonComments: {
            type: Number,
            default: 0,
        },

        lessonRating: {
            type: Number,
            default: 0,
        },

        lessonMaterials: {
            type: [String],
            required: true,
        },

        lessonDescription: {
            type: String,
        },

        isFeatured: {
            type: Boolean,
            default: false,
        },

        isLive: {
            type: Boolean,
            default: false,
        },

        memberId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Member',
        },

        publishedAt: {
            type: Date,
        },

        archivedAt: {
            type: Date,
        },

        createdAt: {
            type: Date,
        },
    },
    { timestamps: true, collection: 'lessons' },
);

export default LessonSchema;