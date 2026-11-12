# BigDøg website

Static site built with Bootstrap 5.3.3 (the Bootstrap files are included locally). Palette: charcoal gray, emerald, dark gold.

```
index.html        (opens html/index.html, so GitHub Pages finds the site)
html/index.html   (the page)
css/style.css     (all styling)
css/bootstrap.min.css, css/bootstrap-LICENSE.txt
js/bootstrap.bundle.min.js
js/main.js        (dropdown notices and the expandable Hoodies list)
images/           (logo.png, hoodie-1.jpg ... hoodie-4.jpg)
```

## Put it online with GitHub Pages
1. Create a new repository on GitHub, choose Add file > Upload files, and drag in the four folders and the two top-level files (`index.html`, `README.md`).
2. Go to Settings > Pages, set the source to the `main` branch and the root folder, then save.
3. The site appears at `https://<your-username>.github.io/<repository-name>/`.

## Editing
- Hoodie photos and names: the `#hoodie-list` block in `html/index.html`.
- Background photo: add it to `images/` and uncomment the `.bg{background-image...}` line in `css/style.css`.
- Colors: the variables at the top of `css/style.css`.
