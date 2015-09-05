#import <UIKit/UIKit.h>

@interface BlurView : UIView
@end

@implementation BlurView

UIVisualEffectView *visualEffectView;

-(void)layoutSubviews
{
  if (visualEffectView) {
    [visualEffectView removeFromSuperview];
  }

  [super layoutSubviews];

  UIBlurEffect *blurEffect = [UIBlurEffect effectWithStyle:UIBlurEffectStyleDark];

  visualEffectView = [[UIVisualEffectView alloc] initWithEffect:blurEffect];
  visualEffectView.frame = self.bounds;

  [self insertSubview:visualEffectView atIndex:0];
}

@end
