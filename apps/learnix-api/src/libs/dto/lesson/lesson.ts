import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { LessonCategory, LessonStatus, LessonLevel, LessonDeliveryMethod } from '../../enums/lesson.enum';
import { Member } from '../member/member';

@ObjectType()
export class Lesson {
    @Field(() => String)
    _id: ObjectId;

    @Field(() => LessonCategory)
    lessonCategory: LessonCategory;

    @Field(() => LessonStatus)
    lessonStatus: LessonStatus;

    @Field(() => String)
    lessonTitle: string;

    @Field(() => Number)
    lessonPrice: number;

    @Field(() => LessonLevel, { nullable: true })
    lessonLevel?: LessonLevel;

    @Field(() => LessonDeliveryMethod, { nullable: true })
    lessonDeliveryMethod?: LessonDeliveryMethod;

    @Field(() => Int)
    lessonDuration: number;

    @Field(() => String, { nullable: true })
    videoUrl?: string;

    @Field(() => String, { nullable: true })
    videoThumbnail?: string;

    @Field(() => Int, { nullable: true })
    videoDuration?: number; // Duration of the video in seconds

    @Field(() => Int)
    lessonViews: number;

    @Field(() => Int)
    lessonLikes: number;

    @Field(() => Int)
    lessonComments: number;

    @Field(() => Number)
    lessonRating: number;

    @Field(() => [String])
    lessonMaterials: string[];

    @Field(() => String, { nullable: true })
    lessonDesc?: string;

    @Field(() => Boolean)
    isFeatured: boolean;

    @Field(() => Boolean)
    isLive: boolean;

    @Field(() => String)
    memberId: ObjectId;

    @Field(() => Date, { nullable: true })
    publishedAt?: Date;

    @Field(() => Date, { nullable: true })
    archivedAt?: Date;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;

    /** from aggregation **/

    @Field(() => Member, { nullable: true })
    memberData?: Member;
}

@ObjectType()
export class Lessons {
    @Field(() => [Lesson])
    list: Lesson[];
}
