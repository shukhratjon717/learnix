import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { LessonModule } from './lesson/lesson.module';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { ViewModule } from './view/view.module';
import { FollowModule } from './follow/follow.module';
import { BoardArticleModule } from './board-article/board-article.module';
import { NoticeModule } from './notice/notice.module';
import { FaqModule } from './faq/faq.module';
import { NotificationModule } from './notification/notification.module';

@Module({
	imports: [
		MemberModule,
		AuthModule,
		LessonModule,
		BoardArticleModule,
		CommentModule,
		LikeModule,
		ViewModule,
		FollowModule,
		NoticeModule,
		FaqModule,
		NotificationModule,
	],
})
export class ComponentsModule {}
