# BigDog website

Static site built with Bootstrap 5 (loaded from a CDN). Palette: charcoal gray, emerald, dark gold.

```
index.html
css/style.css
js/main.js
images/  (logo.png, hoodie-1.jpg ... hoodie-4.jpg)
```

## Put it online with GitHub Pages
1. Create a new repository on GitHub and upload everything in this folder (keep `index.html` at the top level).
2. Go to Settings > Pages, set the source to the `main` branch and the root folder, then save.
3. The site appears at `https://<your-username>.github.io/<repository-name>/`.

## Editing
- Hoodie photos and names: the `#hoodie-list` block in `index.html`.
- Background photo: add it to `images/` and uncomment the `.bg{background-image...}` line in `css/style.css`.
- Colors: the variables at the top of `css/style.css`.
