# restore-google-icons
Recognizable tabs for Google services

![Before](https://user-images.githubusercontent.com/497458/99908045-157cf180-2cd8-11eb-93bf-9b848e987f5c.png)
![](https://media.giphy.com/media/rDb9zTgdfiPwQ/giphy.gif)
![After](https://user-images.githubusercontent.com/497458/99908019-f3836f00-2cd7-11eb-917d-42d7dd6d2a5c.png)

Fork of the [Restore old Google icons](https://chrome.google.com/webstore/detail/restore-old-google-icons/iellnmonjokmoagdlggagdmfjgpiahmb/related) extension.

- Removes cruft (e.g. background script, popups, unused files)
- Fixes icons for Docs, Sheets, Slides, Forms
- Refactored code (e.g. don't repeat icon definitions, don't reset icon every second)

### Usage

I'm not publishing this extension to the Chrome Web Store as it's a fork for personal usage.  
But you can still use it by following these steps:

1. Download the source code (e.g. clone or download latest release and unzip it)
2. In Chrome, go to `chrome://extensions/` (In Brave, go to `brave://extensions/`)
3. Enable "Developer mode"
4. Click "Load unpacked" and select the directory with the extension's source code

### Release

When pushing a tag to GitHub, it creates a zip of the source as the release.
But if you want to have a slimmer release with only the necessary files:

1. Create and push git tag for the new version
2. Bundle the extension: `zip -9 -r restore-google-icons.zip manifest.json *.js`
3. Go to the relevant release on GitHub and upload zip
