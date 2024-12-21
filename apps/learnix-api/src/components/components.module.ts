import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [MemberModule, CourseModule]
})
export class ComponentsModule {}
