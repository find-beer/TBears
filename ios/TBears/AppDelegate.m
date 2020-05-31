#import "AppDelegate.h"
#import "TRootViewController.h"
#import <AMapFoundationKit/AMapFoundationKit.h> //引入高德地图核心包

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <React/RCTDevLoadingView.h>

// #define APIKEY @"dda2ce0ca251baf59404a59c28b4edd5"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AMapServices sharedServices].apiKey = @"dda2ce0ca251baf59404a59c28b4edd5"; //设置高德地图SDK服务key
    RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
    
    #if RCT_DEV
      [bridge moduleForClass:[RCTDevLoadingView class]];
    #endif
    
    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"TBears" initialProperties:nil];
    
    [rootView setBackgroundColor:[[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1]];
    
    TRootViewController *rootViewController = [TRootViewController new];
    [rootViewController setView:rootView];
    
    [self setNavController:[[TNavigationController alloc] initWithRootViewController:rootViewController]];
    
    [self setWindow:[[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds]];
    [[self window] setRootViewController:[self navController]];
    [[self window] makeKeyAndVisible];
    
    return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge {

#if DEBUG
    return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
    return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif

}

@end
