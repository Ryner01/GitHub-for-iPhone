#import "RCTViewManager.h"
#import "blurView.h"

@interface BlurViewManager : RCTViewManager
@end

@implementation BlurViewManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[BlurView alloc] init];
}

@end
