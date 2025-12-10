# React Native App with EAS Build & OTA Updates

## 1. Project Overview
This is a simple React Native application demonstrating the complete workflow of building, signing, and updating an app using Expo Application Services (EAS). It features a Home screen with update checking capabilities and a Build Info screen displaying version details.

## 2. How to Run the App
To run the project locally:

```bash
npm install
npx expo start
```

## 3. Build Instructions
To build the application for Android and iOS using EAS:

**Android (Preview):**
```bash
eas build -p android --profile preview
```

**iOS (Preview):**
```bash
eas build -p ios --profile preview
```

## 4. How to Publish OTA Update
To publish an Over-The-Air (OTA) update to the preview channel:

```bash
eas update --branch preview --message "UI changed"
```
*This command bundles the latest JavaScript and assets and uploads them to EAS Update, making them available to apps with the matching runtime version.*

## 5. Required Submission Files
The following files are included in this submission:

*   **Zipped APK:** `release/ArfatChowdhury_APK.zip`
*   **Build Logs:** `build-logs/`
*   **Config File:** `config/app.json`
*   **Report:** `report/report.md`
*   **Folder Structure:** Organized as required.
