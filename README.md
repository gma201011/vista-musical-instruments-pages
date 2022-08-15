## Running the project

`git clone https://github.com/gma201011/vista-musical-instruments-pages.git`

`cd vista-musical-instruments-pages`

`npm install`

`npm start`



## Tools

* React
* styled-components
* swiper
* axios

## File Structure
```
src
│  index.tsx
│  WebApi.ts
│  constants.js
│  
├─components
│  ├───App
│  │     ├─index.tsx
│  │     ├─ResetStyle.ts
│
├─pages
│  ├─Artist
│       ├─ArtistList
│       │         ├─ArtistList.tsx
│       │         ├─styledItems.ts
│       │
│       ├─Creator
│       │       ├─Creator.tsx
│       │       ├─styledItems.ts
│       │
│       ├─FeaturedArtist
│       │       ├─ArtistInfo.tsx
│       │       ├─FeaturedArtist.tsx
│       │       ├─styledItems.ts
│       │
│       ├─index.tsx
│       │
│       ├─styledFont.ts
│
├─contexts
│  ├─viewportContext.tsx
│ 
├─hooks
│  ├─useViewPort.tsx
│ 
├─theme
│  ├─background.ts
│  ├─font.ts
│  ├─theme.ts
```
