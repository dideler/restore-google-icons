var manifest = chrome.runtime.getManifest();

function restoreIcon() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = manifest.google_icons.calendar;
    document.getElementsByTagName('head')[0].appendChild(link);
    console.log("Extension restored original Google Calendar icon")
}

restoreIcon();
