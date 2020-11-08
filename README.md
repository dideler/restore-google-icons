# restore-google-icons
Recognizable tabs for Google services

Fork of the [Restore old Google icons](https://chrome.google.com/webstore/detail/restore-old-google-icons/iellnmonjokmoagdlggagdmfjgpiahmb/related) extension.

- Removes cruft (e.g. background script, popups, unused files)
- Fixes icons for Docs, Sheets, Slides, Forms
- Refactored code (e.g. don't repeat icon definitions, don't reset icon every second)

### Usage

I'm not going to publish this fork to the Chrome store, since I forked the original
extension for personal usage. If you'd like to use this fork, follow these steps:

1. Download the source code (e.g. clone or download release and unzip it)
2. In Chrome, go to chrome://extensions/
3. Enable "Developer mode"
4. Click "Load unpacked" and select the directory with the extension's source code

### Release

To create a new zipped release:

0. Create a new git tag for the version
1. Bundle the extension: `zip -9 -r restore-google-icons.zip manifest.json *.js`
2. Upload release to GitHub
