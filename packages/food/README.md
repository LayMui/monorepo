# This is a Restaurant search app
To get started create the project using expo-cli
1. npx expo-cli init food
2. Sign up for Yelp to use API for Search 
3. Install react-navigation to allow user to navigate around
npm install react-navigation
4. Install other Dependencies
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
5. Install React Navigation Stack
npm install react-navigation-stack @react-native-community/masked-view

6. Start the app and clear cache with expo r -c


React Navigation v4 Docs:
https://reactnavigation.org/docs/4.x/getting-started

## Convert expo to react native project
expo eject 
yarn ios
yarn android

### To build ipa file on xcode
1. Select the Targets: Food
2. Go to Product -> Archive
3. Click on Distribute App
4. Click Development
5. App Thinning: All compatible device variants
6. Automatically manage signing
5. Export

