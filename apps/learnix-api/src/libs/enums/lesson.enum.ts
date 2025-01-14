import { registerEnumType } from '@nestjs/graphql';

export enum LessonType {
    VIDEO = 'VIDEO',
    ARTICLE = 'ARTICLE',
    QUIZ = 'QUIZ',
    ASSIGNMENT = 'ASSIGNMENT',
    LIVE_SESSION = 'LIVE_SESSION',
}
registerEnumType(LessonType, {
    name: 'LessonType',
});

export enum LessonStatus {
    PUBLISHED = 'PUBLISHED',
    DRAFT = 'DRAFT',
    ARCHIVED = 'ARCHIVED',
}
registerEnumType(LessonStatus, {
    name: 'LessonStatus',
});

export enum LessonCategory {
    TECHNOLOGY = 'TECHNOLOGY',
    BUSINESS = 'BUSINESS',
    DESIGN = 'DESIGN',
    PERSONAL_DEVELOPMENT = 'PERSONAL_DEVELOPMENT',
    HEALTH = 'HEALTH',
    MUSIC = 'MUSIC',
    LANGUAGES = 'LANGUAGES',
}
registerEnumType(LessonCategory, {
    name: 'LessonCategory',
});

export enum LessonLevel {
    BEGINNER = 'BEGINNER',
    INTERMEDIATE = 'INTERMEDIATE',
    ADVANCED = 'ADVANCED',
    ALL_LEVELS = 'ALL_LEVELS',
}
registerEnumType(LessonLevel, {
    name: 'LessonLevel',
});

export enum LessonDeliveryMethod {
    ON_DEMAND = 'ON_DEMAND',
    LIVE = 'LIVE',
    HYBRID = 'HYBRID',
}
registerEnumType(LessonDeliveryMethod, {
    name: 'LessonDeliveryMethod',
});