# The landing page for Evelina, the painter

## About

Evelina is a Moldova painter who specializes on oil painting. She has more than 6 years of experience of painting. 

## Access

The landing page is avaliable [here permanently](https://timurcravtov.github.io/EvelinaLandingPage/) and [here, with custom domain](https://evelinastudio.site)

## Mascot

He's called Rainbow (the name hasn't been negotiated with the client)

<img src="assets/logo/mascot.png" width="200" alt="Mascot" />

## Demonstrations

The inspiration is taken from real museum [here](inspo.png)

### Sections:

#### Hero
<img src="assets/demo/base.png" alt="Base" />

#### Gallery
<img src="assets/demo/gallery.png" alt="Gallery" />

#### Reviews and Contacts
<img src="assets/demo/reviews+contacts.png" alt="Reviews+Contacts" />

#### Mascot

<img src="assets/demo/mascot.png" alt="Mascot" />

#### Mobile view

<img src="assets/demo/mobile-view.png" alt="Mobile" />

### Running and building

#### Prerequisites
- Node.js 18+
- npm

#### Install dependencies
```bash
npm install
```

#### Development (with TinaCMS)
```bash
npm run dev
```
This starts the TinaCMS local server + Astro dev server. Edit content at `http://localhost:4321/admin/index.html`.

#### Build for production
```bash
npm run build
```
Runs `tinacms build` then `astro build`. Output goes to `dist/`.

#### Preview production build
```bash
npm run preview
```