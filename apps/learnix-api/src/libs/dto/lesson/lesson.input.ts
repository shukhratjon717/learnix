import { Field, InputType, Int } from '@nestjs/graphql';
import { IsIn, IsInt, IsNotEmpty, IsOptional, Length, Min } from 'class-validator';
import { Direction } from '../../enums/common.enum';
import { ObjectId } from 'mongoose';
import {
    LessonType,
    LessonLevel,
    LessonCategory,
    LessonStatus,
    LessonDeliveryMethod,
} from '../../enums/lesson.enum';

@InputType()
export class LessonInput {
    @IsNotEmpty()
    @Field(() => LessonType)
    lessonType: LessonType;

    @IsNotEmpty()
    @Field(() => LessonCategory)
    lessonCategory: LessonCategory;

    @IsNotEmpty()
    @Length(3, 100)
    @Field(() => String)
    lessonTitle: string;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    isLive?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    isFeatured?: boolean;

    @IsNotEmpty()
    @Field(() => Number)
    lessonPrice: number;

    @IsOptional()
    @Field(() => LessonLevel, { nullable: true })
    lessonLevel?: LessonLevel;

    @IsOptional()
    @Field(() => LessonDeliveryMethod, { nullable: true })
    lessonDeliveryMethod?: LessonDeliveryMethod;

    @IsNotEmpty()
    @Field(() => String, { nullable: true })
    instructorName?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    lessonLanguage?: string;

    @IsNotEmpty()
    @Field(() => Int)
    lessonDuration: number;

    @IsOptional()
    @Field(() => String, { nullable: true })
    videoUrl?: string; // URL of the video

    @IsOptional()
    @Field(() => String, { nullable: true })
    videoThumbnail?: string; // URL of the video's thumbnail

    @IsOptional()
    @Field(() => Int, { nullable: true })
    videoDuration?: number; // Duration of the video in seconds

    @IsNotEmpty()
    @Field(() => [String])
    lessonMaterials: string[];

    @IsOptional()
    @Length(5, 500)
    @Field(() => String, { nullable: true })
    lessonDescription?: string;

    memberId?: ObjectId;

    @IsOptional()
    @Field(() => Date, { nullable: true })
    publishedAt?: Date;
}

@InputType()
export class PricesRange {
    @Field(() => Int)
    start: number;

    @Field(() => Int)
    end: number;
}

@InputType()
export class DurationsRange {
    @Field(() => Int)
    start: number;

    @Field(() => Int)
    end: number;
}

@InputType()
export class PeriodsRange {
    @Field(() => Int)
    start: number;

    @Field(() => Int)
    end: number;
}

@InputType()
class LessonSearch {
    @IsOptional()
    @Field(() => String, { nullable: true })
    memberId?: ObjectId;

    @IsOptional()
    @Field(() => [LessonCategory], { nullable: true })
    categoryList?: LessonCategory[];

    @IsOptional()
    @Field(() => [LessonType], { nullable: true })
    typeList?: LessonType[];

    @IsOptional()
    @Field(() => [LessonLevel], { nullable: true })
    levelList?: LessonLevel[];

    @IsOptional()
    @Field(() => [String], { nullable: true })
    languageList?: string[];

    @IsOptional()
    @Field(() => [String], { nullable: true })
    options?: string[];

    @IsOptional()
    @Field(() => PricesRange, { nullable: true })
    pricesRange?: PricesRange;

    @IsOptional()
    @Field(() => PeriodsRange, { nullable: true })
    periodsRange?: PeriodsRange;

    @IsOptional()
    @Field(() => DurationsRange, { nullable: true })
    durationsRange?: DurationsRange;

    @IsOptional()
    @Field(() => String, { nullable: true })
    text?: string;
}

@InputType()
export class LessonsInquiry {
    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    limit: number;

    @IsOptional()
    @Field(() => String, { nullable: true })
    sort?: string;

    @IsOptional()
    @Field(() => Direction, { nullable: true })
    direction?: Direction;

    @IsNotEmpty()
    @Field(() => LessonSearch)
    search: LessonSearch;
}

@InputType()
class ALessonSearch {
    @IsOptional()
    @Field(() => LessonStatus, { nullable: true })
    lessonStatus?: LessonStatus;

    @IsOptional()
    @Field(() => [LessonCategory], { nullable: true })
    lessonCategoryList?: LessonCategory[];
}

@InputType()
export class AllLessonsInquiry {
    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    limit: number;

    @IsOptional()
    @Field(() => String, { nullable: true })
    sort?: string;

    @IsOptional()
    @Field(() => Direction, { nullable: true })
    direction?: Direction;

    @IsNotEmpty()
    @Field(() => ALessonSearch)
    search: ALessonSearch;
}

@InputType()
export class OrdinaryInquiry {
    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    limit: number;
}
