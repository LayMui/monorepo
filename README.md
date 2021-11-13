1. Clean up the node_modules in packages
```
npx lerna clean -y
```

2. To install all dependencies
```
npx lerna bootstrap --hoist
```

3. To run the ios app
```
Go to xcode and open food.xcworkspace  at ~/packages/food/ios
```

4. On another terminal, run 
```
yarn run ios.app
```

To run automation (foodie package)
5. yarn run foodie-ios 