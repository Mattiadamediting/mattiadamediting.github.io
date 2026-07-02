# Portfolio Mattia D'Amico — design spec

**Data:** 2026-07-02 · **Stato:** v1 costruita e verificata in anteprima

## Obiettivo
Single page che convinca un recruiter in 30 secondi: gusto + mestiere → showreel, lavori, contatto. Hosting GitHub Pages (`mattiadamico.github.io`), zero costi.

## Direzione estetica
Dark cinematografico con **elemento-firma da montatore**: timecode HUD fisso in basso a destra che avanza con lo scroll (formato HH:MM:SS:FF a 24fps), sezioni marcate come clip su una timeline (`00:32 — Lavori`), hero letterboxed.

### Token
- Palette: nero pece `#0B0B0D` · fumo `#17171B` · linea `#26262B` · pergamena `#F2EFE9` · moviola `#85858D` · cotto salentino `#C4623A`
- Type: **Archivo** variabile (display expanded 800 uppercase, body regular) + **IBM Plex Mono** (timecode, etichette, bottoni)
- Motion: reveal on scroll sobri; `prefers-reduced-motion` rispettato ovunque

## Struttura
1. Hero letterboxed — eyebrow, H1 "Racconto storie con le immagini.", showreel 16:9 (segnaposto finché non è montato)
2. Lavori selezionati — griglia auto-fit (3 col desktop / 1 col mobile): Officine Cantelmo, CercoAlloggio, Levante, QV S.p.A. Link `data-pending` disattivati finché non arrivano gli URL reali
3. REVIVAL — progetto d'autore, card con bordo cotto
4. Chi sono — bio IT + riga EN, foto (segnaposto MD), software
5. Contatti — mailto, LinkedIn, download CV (PDF nel repo)

## File
`index.html` · `style.css` · `script.js` · `CV-Mattia-DAmico.pdf`

## TODO per il go-live
- [ ] Account GitHub di Mattia + repo `mattiadamico.github.io` + push
- [ ] Link reali ai contenuti sui canali clienti (togliere `data-pending`)
- [ ] Foto profilo sezione Chi sono
- [ ] Showreel montato → embed YouTube/Vimeo nel `.reel-frame`
- [ ] Poi: aggiornare CV e LinkedIn con l'URL del portfolio
