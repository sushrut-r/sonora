# Sonora

An original, responsive music-player interface. The editorial serif playlist heading, understated charcoal surfaces, muted brass accents, custom waveform identity, and floating frosted-glass transport give it a visual language distinct from the services that inspired the original layout. The floating player is informed by the supplied reference image, without using its logo or branding.

## Theme control

The **Theme** button in the header opens a three-way appearance menu:

- **Dark** — the original charcoal and smoked-glass look (default).
- **Light** — warm paper surfaces, dark ink text, and the same glass dock in clear frosted glass.
- **System** — follows the operating system's light/dark preference and updates live when it changes.

The choice is saved in `localStorage` under `sonora-theme`. A tiny inline script in the `<head>` applies it before the stylesheet paints, so reloads never flash the wrong theme. Forced colours are driven by `html[data-theme="light"]` overrides at the end of `styles.css`; the dark look stays the base.

## Use it in VS Code

1. Unzip `sonora-vscode.zip` (or open this folder) and choose **File → Open Folder…** in VS Code.
2. Install the **Live Server** extension, right-click `index.html`, and pick **Open with Live Server**. Any static server works too: `python -m http.server 8000`, then open `http://localhost:8000`.
3. Edit `index.html`, `styles.css`, or `app.js` — refresh the browser to see changes.

No build step, package manager, or npm install is required. Fonts are system fonts and every image and audio file is local.

## Files

- `index.html` — page shell, header (including the theme control), panels, player, and audio element.
- `styles.css` — layout, the dark theme, the "Appearance control" block, and the light-theme overrides.
- `app.js` — catalogue data, rendering, playback, queue, search, imports, and theme logic (`applyTheme`, `showThemeMenu`).
- `assets/` — cover artwork, waveform favicon, and three short generated ambient preview loops.
- `sonora.html` — optional single-file build with everything embedded, for sharing or opening offline.
- `make_standalone.py` — regenerates `sonora.html` from the three source files and `assets/`.

## Interactions

Search, filter, and sort the collection; play or navigate playlists; seek, shuffle, repeat, and control volume from the floating dock; like songs; read lyrics; open the queue; collapse the collection; toggle the contextual sidebar; export a tracklist; and use **Add files** to play audio from your device. Imported files stay available during the current browser session.

## Rebuild the standalone file

```
python make_standalone.py
```
# sonora
