import { ObjectId } from 'bson';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { T } from './types/common';

export const availableAgentSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberViews', 'memberRank'];
export const availableMembersSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberViews'];

export const availableOptions = ['lessonLive', 'lessonFeatured'];
export const availableProductSorts = [
	'createdAt',
	'updatedAt',
	'lessonikes',
	'lessonViews',
	'lessonRank',
	'lessonPrice',
];

export const availableBoardArticles = ['createdAt', 'updatedAt', 'articleLikes', 'articleViews'];
export const availableFaqs = ['createdAt', 'updatedAt', 'faqLikes', 'faqViews'];
export const availableNotice = ['createdAt', 'updatedAt', 'noticeLikes', 'noticeViews'];

export const availableCommentSorts = ['createdAt', 'updatedAt'];
export const availableMessageSorts = ['createdAt', 'updatedAt'];
/**  IMAGE CONFIGURATION (config.js) **/

export const validMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];
export const getSerialForImage = (filename: string) => {
	const ext = path.parse(filename).ext;
	return uuidv4() + ext;
};

export const shapeIntoMongoObjectId = (target: any) => {
	return typeof target === 'string' ? new ObjectId(target) : target;
};

export const lookupAuthMemberLiked = (memberId: T, targetRefId: string = '$_id') => {
	return {
		$lookup: {
			from: 'likes',
			let: {
				localLikeRefId: targetRefId,
				localMemberId: memberId,
				localMyFavorite: true,
			},
			pipeline: [
				{
					$match: {
						$expr: {
							$and: [{ $eq: ['$likeRefId', '$$localLikeRefId'] }, { $eq: ['$memberId', '$$localMemberId'] }],
						},
					},
				},
				{
					$project: {
						_id: 0,
						memberId: 1,
						likeRefId: 1,
						myFavorite: '$$localMyFavorite',
					},
				},
			],
			as: 'meLiked',
		},
	};
};

interface LookupAuthMemberFollowed {
	followerId: T;
	followingId: string;
}
export const lookupAuthMemberFollowed = (input: LookupAuthMemberFollowed) => {
	const { followerId, followingId } = input;
	return {
		$lookup: {
			from: 'follows',
			let: {
				localFollowerId: followerId,
				localFollowingId: followingId,
				localMyFavorite: true,
			},
			pipeline: [
				{
					$match: {
						$expr: {
							$and: [{ $eq: ['$followerId', '$$localFollowerId'] }, { $eq: ['$followingId', '$$localFollowingId'] }],
						},
					},
				},
				{
					$project: {
						_id: 0,
						followerId: 1,
						followingId: 1,
						myFollowing: '$$localMyFavorite',
					},
				},
			],
			as: 'meFollowed',
		},
	};
};

export const lookupMember = {
	$lookup: {
		from: 'members',
		localField: 'memberId',
		foreignField: '_id',
		as: 'memberData',
	},
};

export const lookupMessage = {
	$lookup: {
		from: 'messages',
		localField: 'messageRefId',
		foreignField: '_id',
		as: 'memberMessage',
	},
};

export const lookupLesson = {
	$lookup: {
		from: 'lesson',
		localField: 'memberId',
		foreignField: '_id',
		as: 'lessonData',
	},
};

export const lookupNotice = {
	$lookup: {
		from: 'notices',
		localField: 'memberId',
		foreignField: '_id',
		as: 'noticeData',
	},
};

export const lookupFaq = {
	$lookup: {
		from: 'faq',
		localField: 'memberId',
		foreignField: '_id',
		as: 'faqData',
	},
};

export const lookupFollowingData = {
	$lookup: {
		from: 'members',
		localField: 'followingId',
		foreignField: '_id',
		as: 'followingData',
	},
};

export const lookupFollowerData = {
	$lookup: {
		from: 'members',
		localField: 'followingId',
		foreignField: '_id',
		as: 'followerData',
	},
};

export const lookupFavorite = {
	$lookup: {
		from: 'members',
		localField: 'favoriteProduct.memberId',
		foreignField: '_id',
		as: 'favoriteProduct.memberData',
	},
};

export const lookupVisit = {
	$lookup: {
		from: 'members',
		localField: 'visitedProduct.memberId',
		foreignField: '_id',
		as: 'visitedProduct.memberData',
	},
};

export const lookupNotification = {
	$lookup: {
		from: 'members',
		localField: 'notifiedProduct.memberId',
		foreignField: '_id',
		as: 'notifiedProduct.memberData',
	},
};
