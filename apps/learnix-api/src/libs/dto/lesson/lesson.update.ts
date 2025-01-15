import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, Length, Min } from 'class-validator';
import { ObjectId } from 'mongoose';
import {
  LessonStatus,
  LessonCategory,
  LessonType,
  LessonLevel,
  LessonDeliveryMethod,
} from '../../enums/lesson.enum';

@InputType()
export class LessonUpdate {
  @IsNotEmpty()
  @Field(() => String)
  _id: ObjectId;

  @IsOptional()
  @Field(() => LessonType, { nullable: true })
  lessonType?: LessonType;

  @IsOptional()
  @Field(() => LessonCategory, { nullable: true })
  lessonCategory?: LessonCategory;

  @IsOptional()
  @Field(() => LessonStatus, { nullable: true })
  lessonStatus?: LessonStatus;

  @IsOptional()
  @Length(3, 100)
  @Field(() => String, { nullable: true })
  lessonTitle?: string;

  @IsOptional()
  @Field(() => Number, { nullable: true })
  lessonPrice?: number;

  @IsOptional()
  @Field(() => LessonLevel, { nullable: true })
  lessonLevel?: LessonLevel;

  @IsOptional()
  @Field(() => LessonDeliveryMethod, { nullable: true })
  lessonDeliveryMethod?: LessonDeliveryMethod;

  @IsOptional()
  @Field(() => String, { nullable: true })
  lessonInstructor?: string;

  @IsOptional()
  @Field(() => [String], { nullable: true })
  lessonImages?: string[];

  @IsOptional()
  @Length(5, 500)
  @Field(() => String, { nullable: true })
  lessonDesc?: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  videoUrl?: string; // Video URL for the lesson

  @IsOptional()
  @Field(() => String, { nullable: true })
  videoThumbnail?: string; // Thumbnail URL for the video

  @IsOptional()
  @Field(() => Int, { nullable: true })
  videoDuration?: number; // Duration of the video in seconds

  @IsOptional()
  @Field(() => Date, { nullable: true })
  soldAt?: Date;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  constructedAt?: Date;
}
