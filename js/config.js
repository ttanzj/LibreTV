/*************************************************
 * 全局常量配置
 *************************************************/
const PROXY_URL = '/proxy/';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

/*************************************************
 * 密码保护配置
 *************************************************/
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',
    verificationTTL: 90 * 24 * 60 * 60 * 1000 // 90 天
};

/*************************************************
 * 网站信息配置
 *************************************************/
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

/*************************************************
 * API 资源站配置（去掉空内容测试源，含新增站点）
 *************************************************/
const API_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com'
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源'
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源'
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源'
    },
    xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪资源'
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv'
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv'
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源'
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源'
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源'
    },
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为吧资源'
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com'
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源'
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源'
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源'
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    },
    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '量子资源站'
    },
    ninitv: {
        api: 'https://cms.xiaoyan.sbs/api.php/provide/vod',
        name: '妮妮TV'
    },
    maotai: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台资源'
    }
};

/*************************************************
 * API 扩展方法
 *************************************************/
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;

/*************************************************
 * 聚合搜索配置
 *************************************************/
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,
    timeout: 8000,
    maxResults: 10000,
    parallelRequests: true,
    showSourceBadges: true
};

/*************************************************
 * API 请求抽象配置
 *************************************************/
const API_CONFIG = {
    search: {
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50,
        headers: {
            'User-Agent': 'Mozilla/5.0',
            'Accept': 'application/json'
        }
    },
    detail: {
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0',
            'Accept': 'application/json'
        }
    }
};

/*************************************************
 * 播放器相关配置
 *************************************************/
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;
const CUSTOM_PLAYER_URL = 'player.html';

const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,
    filterAds: true,
    autoPlayNext: true,
    adFilteringEnabled: true,
    adFilteringStorage: 'adFilteringEnabled'
};

/*************************************************
 * 错误信息本地化
 *************************************************/
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

/*************************************************
 * 安全配置
 *************************************************/
const SECURITY_CONFIG = {
    enableXSSProtection: true,
    sanitizeUrls: true,
    maxQueryLength: 100
};

/*************************************************
 * 自定义 API 源配置
 *************************************************/
const CUSTOM_API_CONFIG = {
    separator: ',',
    maxSources: 5,
    testTimeout: 5000,
    namePrefix: 'Custom-',
    validateUrl: true,
    cacheResults: true,
    cacheExpiry: 5184000000, // 2 个月
    adultPropName: 'isAdult'
};

/*************************************************
 * 成人 API 内置隐藏开关
 *************************************************/
const HIDE_BUILTIN_ADULT_APIS = true;
