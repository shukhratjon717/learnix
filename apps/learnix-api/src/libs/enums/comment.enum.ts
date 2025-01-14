import { registerEnumType } from '@nestjs/graphql';

export enum CommentStatus {
	ACTIVE = 'ACTIVE',
	DELETE = 'DELETE',
}
registerEnumType(CommentStatus, {
	name: 'CommentStatus',
});

export enum CommentGroup {
	MEMBER = 'MEMBER',
	ARTICLE = 'ARTICLE',
	INSTRUCTOR = "INSTRUCTOR",
	LESSON = 'LESSON',
}
registerEnumType(CommentGroup, {
	name: 'CommentGroup',
});
