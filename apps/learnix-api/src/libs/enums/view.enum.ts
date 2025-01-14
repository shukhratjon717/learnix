import { registerEnumType } from '@nestjs/graphql';

export enum ViewGroup {
	MEMBER = 'MEMBER',
	INSTRUCTOR = "INSTRUCTOR",
	ARTICLE = 'ARTICLE',
	LESSON = 'LESSON',
}
registerEnumType(ViewGroup, {
	name: 'ViewGroup',
});
