#import <Foundation/Foundation.h>

@interface TUserModel : NSObject

@property (nonatomic, copy) NSString *userId;
@property (nonatomic, copy) NSString *nickName;
@property (nonatomic, strong) NSURL *avatarUri;
@property (nonatomic, strong) NSDate *date;

@end
