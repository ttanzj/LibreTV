/**********************
 * 全局常量配置
 **********************/
const PROXY_URL = '/proxy/';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

/**********************
 * 成人源总开关（⭐关键）
 **********************/
const ENABLE_ADULT_APIS = true;

/**********************
 * 密码保护配置（保留，但不拦截搜索）
 **********************/
const PASSWORD_CONFIG = {
  localStorageKey: 'passwordVerified',
  verificationTTL: 90 * 24 * 60 * 60 * 1000
};

// 默认视为已验证（⭐关键）
if (ENABLE_ADULT_APIS) {
  localStorage.setItem(PASSWORD_CONFIG.localStorageKey, 'true');
}

/**********************
 * 网站信息
 **********************/
const SITE_CONFIG = {
  name: 'LibreTV',
  url: 'https://libretv.is-an.org',
  description: '免费在线视频搜索与观看平台',
  logo: 'image/logo.png',
  version: '1.0.3'
};

/**********************
 * API 站点配置
 **********************/
const API_SITES = {
  dyttzy: {
    api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
    name: '电影天堂资源'
  },
  ruyi: {
    api: 'https://cj.rycjapi.com/api.php/provide/vod',
    name: '如意资源'
  },

  // ===== 成人源 =====
  ckzy: {
    api: 'https://www.ckzy1.com',
    name: 'CK资源',
    adult: true
  },
  jkun: {
    api: 'https://jkunzyapi.com',
    name: 'jkun资源',
    adult: true
  },
  bwzy: {
    api: 'https://api.bwzym3u8.com',
    name: '百万资源',
    adult: true
  },
  souav: {
    api: 'https://api.souavzy.vip',
    name: 'souav资源',
    adult: true
  },
  r155: {
    api: 'https://155api.com',
    name: '155资源',
    adult: true
  },
  lsb: {
    api: 'https://apilsbzy1.com',
    name: 'lsb资源',
    adult: true
  },
  huangcang: {
    api: 'https://hsckzy.vip',
    name: '黄色仓库',
    adult: true
  },
  yutu: {
    api: 'https://yutuzy10.com',
    name: '玉兔资源',
    adult: true
  }
};

/**********************
 * API 扩展方法
 **********************/
function extendAPISites(newSites) {
  Object.assign(API_SITES, newSites);
}

window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;

/**********************
 * 聚合搜索配置（成人源参与）
 **********************/
const AGGREGATED_SEARCH_CONFIG = {
  enabled: true,
  timeout: 8000,
  maxResults: 10000,
  parallelRequests: true,
  showSourceBadges: true
};

/**********************
 * API 请求配置
 **********************/
const API_CONFIG = {
  search: {
    path: '?ac=videolist&wd=',
    pagePath: '?ac=videolist&wd={query}&pg={page}',
    maxPages: 50,
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      Accept: 'application/json'
    }
  },
  detail: {
    path: '?ac=videolist&ids=',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      Accept: 'application/json'
    }
  }
};

/**********************
 * 播放配置
 **********************/
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;
const CUSTOM_PLAYER_URL = 'player.html';

const PLAYER_CONFIG = {
  autoplay: true,
  allowFullscreen: true,
  width: '100%',
  height: '600',
  timeout: 15000,
  filterAds: true,
  autoPlayNext: true
};

/**********************
 * 错误信息
 **********************/
const ERROR_MESSAGES = {
  NETWORK_ERROR: '网络连接错误',
  TIMEOUT_ERROR: '请求超时',
  API_ERROR: 'API错误',
  PLAYER_ERROR: '播放器加载失败',
  UNKNOWN_ERROR: '未知错误'
};

/**********************
 * 安全配置
 **********************/
const SECURITY_CONFIG = {
  enableXSSProtection: true,
  sanitizeUrls: true,
  maxQueryLength: 100
};

/**********************
 * 成人源不隐藏（⭐关键）
 **********************/
const HIDE_BUILTIN_ADULT_APIS = false;
