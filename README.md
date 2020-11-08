# restore-google-icons
Recognizable tabs for Google services

Fork of the [Restore old Google icons](https://chrome.google.com/webstore/detail/restore-old-google-icons/iellnmonjokmoagdlggagdmfjgpiahmb/related) extension.

- Removes cruft (e.g. background script, popups, unused files)
- Fixes icons for Docs, Sheets, Slides, Forms
- Refactored code (e.g. don't repeat icon definitions, don't reset icon every second)

### Usage

I'm not going to publish this fork to the Chrome store, since I forked the original
extension for personal usage. If you'd like to use this fork, follow these steps:

1. Download the source code (e.g. clone or download latest release and unzip it)
2. In Chrome, go to chrome://extensions/
3. Enable "Developer mode"
4. Click "Load unpacked" and select the directory with the extension's source code

### Release

When pushing a tag to GitHub, it creates a zip of the source as the release.
But if you want to have a slimmer release with only the necessary files:

1. Create and push git tag for the new version
2. Bundle the extension: `zip -9 -r restore-google-icons.zip manifest.json *.js`
3. Go to the relevant release on GitHub and upload zip
