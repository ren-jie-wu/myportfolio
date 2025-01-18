# Instructions

To visit my portfolio webpage, click [this link](https://ren-jie-wu.github.io/myportfolio)

## Set up dependencies
After cloning the repository, run
``` {bash}
npm install # or `yarn install`
```

## Host the website
Refer to [this tutorial](https://github.com/gitname/react-gh-pages).

## To submit modification from local
``` {bash}
git add ./
git commit -m "some comment"
git push
npm run deploy
```

## What files to modify:

### Metadata of the webpage
Set `meta.content`, `title` in `public/index.html` as needed

### Website URL
Set `homepage` in `package.json` (refer to the above gh tutorial)

### Content
Modify codes in `src/App.js`, `src/App.css`, `src/pages/*.js`, `src/components/*.js`, as well as images or other attached files in `public/`. If only the specific content needs modifying but not the framework, edit `src/components/Helper.js` and `public/{files, images}/*`
