export type ResponseListResult<T> = {
  count: number,
  next: string | null,
  previous: string | null,
  results: T[]
}

export interface MetaSeoAttributes {
  charset: string;
  description: string;
  colorScheme: string;
  applicationName: string;
  author: string;
  creator: string;
  publisher: string;
  generator: string;
  referrer: ReferrerPolicy;
  viewport: string | Partial<{
    width: number | string | 'device-width';
    height: number | string | 'device-height';
    initialScale: number | string;
    maximumScale: number | string;
    minimumScale: number | string;
    userScalable: 'yes' | 'no';
    viewportFit: 'auto' | 'contain' | 'cover';
  }>;
  robots: string | Partial<{
    index: Booleanable;
    follow: Booleanable;
    all: Booleanable;
    noindex: Booleanable;
    nofollow: Booleanable;
    none: Booleanable;
    noarchive: Booleanable;
    nositelinkssearchbox: Booleanable;
    nosnippet: Booleanable;
    indexifembedded: Booleanable;
    maxSnippet: number | string;
    maxImagePreview: 'none' | 'standard' | 'large';
    maxVideoPreview: number | string;
    notranslate: Booleanable;
    unavailable_after: string;
    noimageindex: Booleanable;
  }>;
  google: 'nositelinkssearchbox' | 'nopagereadaloud';
  googlebot: 'notranslate';
  googleSiteVerification: string;
  rating: 'adult';
  ogUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogType: 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_status' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';
  ogLocale: string;
  ogLocaleAlternate: Arrayable<string>;
  ogDeterminer: 'a' | 'an' | 'the' | '' | 'auto';
  ogSiteName: string;
  ogVideo: string | Arrayable<{
    url: string;
    secureUrl?: string;
    type?: 'application/x-shockwave-flash' | 'video/mp4';
    width?: string | number;
    height?: string | number;
    alt?: string;
  }>;
  ogVideoUrl: string;
  ogVideoSecureUrl: string;
  ogVideoType: 'application/x-shockwave-flash' | 'video/mp4';
  ogVideoWidth: string | number;
  ogVideoHeight: string | number;
  ogVideoAlt: string;
  ogImage: string | Arrayable<{
    url: string;
    secureUrl?: string;
    type?: 'image/jpeg' | 'image/gif' | 'image/png';
    width?: string | number;
    height?: string | number;
    alt?: string;
  }>;
  ogImageUrl: string;
  ogImageSecureUrl: string;
  ogImageType: 'image/jpeg' | 'image/gif' | 'image/png';
  ogImageWidth: string | number;
  ogImageHeight: string | number;
  ogImageAlt: string;
  ogAudio: string | Arrayable<{
    url: string;
    secureUrl?: string;
    type?: 'audio/mpeg' | 'audio/ogg' | 'audio/wav';
  }>;
  ogAudioUrl: string;
  ogAudioSecureUrl: string;
  ogAudioType: 'audio/mpeg' | 'audio/ogg' | 'audio/wav';
  fbAppId: string | number;
  twitterCard: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string | Arrayable<{
    url: string;
    type?: 'image/jpeg' | 'image/gif' | 'image/png';
    width?: string | number;
    height?: string | number;
    alt?: string;
  }>;
  twitterImageWidth: string | number;
  twitterImageHeight: string | number;
  twitterImageType: 'image/jpeg' | 'image/gif' | 'image/png';
  twitterImageAlt: string;
  twitterSite: string;
  twitterSiteId: string | number;
  twitterCreator: string;
  twitterCreatorId: string | number;
  twitterPlayer: string;
  twitterPlayerWidth: string | number;
  twitterPlayerHeight: string | number;
  twitterPlayerStream: string;
  twitterAppNameIphone: string;
  twitterAppIdIphone: string;
  twitterAppUrlIphone: string;
  twitterAppNameIpad: string;
  twitterAppIdIpad: string;
  twitterAppUrlIpad: string;
  twitterAppNameGoogleplay: string;
  twitterAppIdGoogleplay: string;
  twitterAppUrlGoogleplay: string;
  twitterData1: string;
  twitterLabel1: string;
  twitterData2: string;
  twitterLabel2: string;
  themeColor: string | Arrayable<{
    content: string;
    media: string;
  }>;
  mobileWebAppCapable: 'yes';
  appleMobileWebAppCapable: 'yes';
  appleMobileWebAppStatusBarStyle: 'default' | 'black' | 'black-translucent';
  appleMobileWebAppTitle: string;
  appleItunesApp: string | {
    appId: string;
    appArgument?: string;
  };
  formatDetection: 'telephone=no';
  msapplicationTileImage: string;
  msapplicationTileColor: string;
  msapplicationConfig: string;
  contentSecurityPolicy: string | Partial<{
    childSrc: string;
    connectSrc: string;
    defaultSrc: string;
    fontSrc: string;
    imgSrc: string;
    manifestSrc: string;
    mediaSrc: string;
    objectSrc: string;
    prefetchSrc: string;
    scriptSrc: string;
    scriptSrcElem: string;
    scriptSrcAttr: string;
    styleSrc: string;
    styleSrcElem: string;
    styleSrcAttr: string;
    workerSrc: string;
    baseUri: string;
    sandbox: string;
    formAction: string;
    frameAncestors: string;
    navigateTo: string;
    reportUri: string;
    reportTo: string;
    requireSriFor: string;
    requireTrustedTypesFor: string;
    trustedTypes: string;
    upgradeInsecureRequests: string;
  }>;
  contentType: 'text/html; charset=utf-8';
  defaultStyle: string;
  xUaCompatible: 'IE=edge';
  refresh: string | {
    seconds: number | string;
    url: string;
  };
  keywords: string; // deprecated
}
