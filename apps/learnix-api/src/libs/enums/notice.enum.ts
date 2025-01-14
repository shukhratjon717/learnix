import { registerEnumType } from '@nestjs/graphql';

export enum NoticeCategory {
	FAQ = 'FAQ',
	TERMS = 'TERMS',
	INQUIRY = 'INQUIRY',
}
registerEnumType(NoticeCategory, {
	name: 'NoticeCategory',
});

export enum NoticeStatus {
	HOLD = 'HOLD',
	ACTIVE = 'ACTIVE',
	DELETE = 'DELETE',
}
registerEnumType(NoticeStatus, {
	name: 'NoticeStatus',
});

export enum NoticeType {
    FEATURE_UPDATE = 'FEATURE_UPDATE',
    NEW_COURSE = 'NEW_COURSE',
    PLATFORM_MAINTENANCE = 'PLATFORM_MAINTENANCE',
    SECURITY_ALERT = 'SECURITY_ALERT',
    POLICY_CHANGE = 'POLICY_CHANGE',
    GENERAL_NOTICE = 'GENERAL_NOTICE',
}

registerEnumType(NoticeType, {
	name: 'NoticeType',
});
