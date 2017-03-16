cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "com.oauthio.plugins.oauthio.OAuth",
        "file": "plugins/com.oauthio.plugins.oauthio/dist/oauth.js",
        "pluginId": "com.oauthio.plugins.oauthio",
        "merges": [
            "OAuth"
        ]
    },
    {
        "id": "cordova-plugin-googleplus.GooglePlus",
        "file": "plugins/cordova-plugin-googleplus/www/GooglePlus.js",
        "pluginId": "cordova-plugin-googleplus",
        "clobbers": [
            "window.plugins.googleplus"
        ]
    },
    {
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-inappbrowser": "1.7.0",
    "com.oauthio.plugins.oauthio": "0.2.4",
    "cordova-plugin-googleplus": "5.1.1",
    "cordova-plugin-websql": "0.0.10",
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-sqlite-storage": "2.0.2"
};
// BOTTOM OF METADATA
});