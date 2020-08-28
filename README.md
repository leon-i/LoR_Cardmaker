# Creative Runeterra
[Live site](https://creative-runeterra.netlify.app/#/)

> Single-page custom card creator for Legends of Runeterra. Made with **React**, **Redux**, and **TypeScript**.  
  
![image](https://user-images.githubusercontent.com/56734437/91614957-8b2f2680-e950-11ea-8c5d-8ca74a5c667f.png)  
  
## Technologies Used  
 * **React**  
 * **Redux**  
 * **TypeScript**  
 * **[React-Draggable](https://github.com/STRML/react-draggable)** - *enables users to adjust position of uploaded images*  
 * **[dom-to-image](https://github.com/tsayen/dom-to-image)** - *converts card DOM element to image so user can download*  
 * **[FileSaver.js](https://github.com/eligrey/FileSaver.js/)** - *allows user to download custom card*  
 * **[include-media](https://github.com/eduardoboucas/include-media)** - *sass media queries for mobile view*
  
## Features
  
### Custom Detection for Inline Styling  
  
![image](https://user-images.githubusercontent.com/56734437/91615301-3cce5780-e951-11ea-9060-93e454866fef.png)  
  
User input for description/level condition is scanned by the `DescriptionDisplay` component. Words denoted with special characters are given inline styling or converted to inline keyword images. As seen below, this is done by the `scanner()` function, which triggers the conversion when it detects that a user inputted word is wrapped in one `definers`.
  
``` javascript
const scanner = (word : string, idx: number) => {
    if (word.length <= 1) return ' ' + word;

    if (definers.includes(word[0]) && word.slice(1).includes(word[0])) {
        const endIdx = word.slice(1).indexOf(word[0]) + 1;

        switch(word[0]) {
            case '!':
                return (
                    <>
                        <span className='keyword' key={idx}>{' ' + word.slice(1, endIdx)}</span>
                        {word.slice(endIdx + 1) + ' '}
                    </>
                );
            case '#':
                return (
                    <>
                        <span className='card-reference' key={idx}>{' ' + word.slice(1, endIdx)}</span>
                        {word.slice(endIdx + 1) + ' '}
                    </>
                );
            case '*':
                return (
                    <>
                        {' '}
                        <img className='inline-icon' src={paths[word.slice(1, endIdx).toLowerCase()]} alt='inline-icon' key={idx} />
                        {word.slice(endIdx + 1)}
                    </>
                );
            default:
                return ' ' + word;
        }
    } else {
        return ' ' + word;
    }
}
```

### Live Image Resizing and Draggable Movement via User Input  
  
![custom-runeterra](https://user-images.githubusercontent.com/56734437/91616640-18c04580-e954-11ea-8742-30a834c67fa9.gif)  
  
Users are able to control the uploaded image's size via the `Slider` component in combination with React's `useState` hook. As seen below, moving the slider update's the local state, which is then passed to the image as a style prop, adjusting it's height. The image is draggable by the user as it is wrapped in a `React-Draggable` component.  
  
```javascript
  const [imageSizeState, setImageSizeState] = React.useState(120);
  
  <div className={uploadedImgContainerClass}>
    <Draggable>
        <img className='uploaded-img' 
            src={String(card.imageURL)} 
            alt='upload-img' 
            draggable="false"
            style={{height: `${imageSizeState}%`}} />
    </Draggable>
  </div>
  
  <Slider label={'Size'} 
    min={"60"}
    max={"180"}
    value={imageSizeState} 
    onChange={(e) => setImageSizeState(e.target.value)} />
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
