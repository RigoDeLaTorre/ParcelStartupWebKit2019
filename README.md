## Steps

**Download or Pull This Repo**
Top of this page you can see where it says clone or download

**Install Node**
https://nodejs.org/en/

**Install Yarn-Optional**
https://yarnpkg.com/en/

**Install Parcel**
https://parceljs.org/

```bash
  yarn global add parcel-bundler
  npm install -g parcel-bundler
```

**Install all the node packages**

```bash
  npm install
  yarn install
```

**Start the dev server**
Server will run at http://localhost:1234

```bash
  npm run dev
  yarn dev
```

**Build production files**

```bash
  All files will build to ./build directory
  npm production
  yarn production
```

**Notes**

```bash
  In order to call js functions in your html document. You must call it via  index.function
  Ex: Is shown in the src/js/index.js file
  It is called in the src/index.html file by clicking on the H1 tag
```
