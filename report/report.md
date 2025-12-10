# Assignment Report

## 1. Difference: App Store vs Play Store
*   **Review Process:** The Apple App Store has a stricter and often longer review process compared to the Google Play Store, which is generally more automated and faster, though it has become stricter in recent years.
*   **Distribution:** iOS apps can generally only be distributed through the App Store (unless using Enterprise or Ad-hoc for testing), while Android allows "sideloading" of APKs from any source.
*   **Fees:** Apple charges an annual fee ($99/year), while Google charges a one-time registration fee ($25).

## 2. What is signing?
App signing is a security mechanism that verifies the author of an application and ensures that the code has not been altered or corrupted since it was signed. It uses a cryptographic private key to sign the app package. Both Android (APK/AAB) and iOS (IPA) apps must be signed to be installed on devices or submitted to stores.

## 3. What is provisioning?
Provisioning is primarily an iOS concept (Provisioning Profiles). It bridges the gap between the developer, the device, and the app. A provisioning profile contains:
*   **App ID:** Which app is it?
*   **Certificate:** Who signed it?
*   **Device IDs (UDID):** Which devices can run it? (for development/ad-hoc)
It authorizes the app to run on specific devices or be distributed via the App Store.

## 4. What is an OTA update?
Over-The-Air (OTA) updates allow developers to push updates to their app's JavaScript bundle and assets directly to users' devices without going through the App Store or Play Store review process. This is useful for quick bug fixes or minor UI changes. In Expo, this is handled by `expo-updates` and EAS Update.

## 5. Why Expo needs runtime version?
The `runtimeVersion` ensures compatibility between the native code (the "shell" of the app) and the JavaScript bundle (the logic/UI). If the native code changes (e.g., adding a new native library), the old JS bundle might crash it. `runtimeVersion` prevents incompatible JS updates from being downloaded by the app.

## 6. Screenshots of OTA update working
![OTA Update Success](ota-update.jpg)
