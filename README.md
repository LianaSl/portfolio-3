# Portfolio — Liana Šljonkina

Osobní portfolio webová stránka vytvořená pomocí **Vanilla JavaScriptu** a **Vite**.

---

## 🛠 Technologie

- **HTML5** — struktura stránek
- **CSS3** — styly, animace, responzivní design
- **JavaScript (ES6+)** — logika, routing, modální okno
- **Vite** — vývojový server a sestavení projektu

---

## 📁 Struktura projektu

```
portfolio/
├── public/                  # Statické soubory (obrázky)
│   ├── liana.jpg
│   ├── karLi.jpg
│   ├── put5.jpeg
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.js        # Navigační lišta
│   │   └── Footer.js        # Patička stránky
│   ├── pages/
│   │   ├── Hlavni.js        # Hlavní stránka
│   │   ├── Omne.js          # O mně
│   │   ├── Certifikaty.js   # Certifikáty
│   │   ├── Fotogalerie.js   # Fotogalerie
│   │   ├── Kontakt.js       # Kontakt + modální okno
│   │   └── ErrorPage.js     # Stránka 404
│   ├── router.js            # Vlastní SPA router
│   ├── main.js              # Vstupní bod aplikace
│   └── style.css            # Globální styly
├── index.html               # Hlavní HTML soubor
└── package.json
```

---

## 🔀 Jak funguje routing

Projekt používá vlastní **SPA router** (Single Page Application) bez jakékoli knihovny.

- Router sleduje URL pomocí `history.pushState`
- Při kliknutí na odkaz s atributem `data-link` se stránka **nepřenačítá** — pouze se mění obsah v elementu `.main`
- Každá stránka je funkce, která vrací HTML řetězec

```js
// Příklad stránky
export function Hlavni() {
    return `<aside class="aside">...</aside>`;
}
```

---

## 📄 Stránky

| Stránka | URL | Popis |
|---|---|---|
| Hlavní | `/` | Úvodní stránka s fotografií a představením |
| O mně | `/about` | Informace o autorce, záliby, kariéra |
| Certifikáty | `/certifikaty` | Přehled získaných certifikátů |
| Fotogalerie | `/fotogalerie` | Osobní fotografie z cestování |
| Kontakt | `/contact` | Sociální sítě a kontaktní formulář |
| 404 | `/*` | Stránka při nenalezení URL |

---

## 📬 Kontaktní formulář

Formulář na stránce Kontakt používá službu **Formspree** pro odesílání zpráv na e-mail.

- Validace polí (jméno, e-mail, zpráva)
- Modální okno se otevírá/zavírá přes JavaScript
- Po úspěšném odeslání se zobrazí potvrzovací zpráva

---

## 🚀 Spuštění projektu

```bash
# Instalace závislostí
npm install

# Spuštění vývojového serveru
npm run dev

# Sestavení pro produkci
npm run build
```

---

## 👩‍💻 Autorka

**Liana Šljonkina**  
📧 [sljonkina@gmail.com](mailto:sljonkina@gmail.com)  
💼 [LinkedIn](https://www.linkedin.com/in/liana-šljonkina/)  
🐙 [GitHub](https://github.com/LianaSl)