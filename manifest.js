/* ============================================================
   INTERNATIONALISM WEBSITE — MASTER JAVASCRIPT FILE
   Massive, fully structured, optimized
============================================================ */

/* ------------------------------------------------------------
   1) CATEGORY DATA (EVENTS + GALLERY)
------------------------------------------------------------ */

const DATA = {
    "Gallery": [
        { img: "gallery/img1.jpg", caption: "International Exchange — Learning Beyond Borders" },
        { img: "gallery/img2.jpg", caption: "Round Square Conference Moments" },
        { img: "gallery/img3.jpg", caption: "Global Citizenship in Action" },
        { img: "gallery/img4.jpg", caption: "Exploring Cultures Through Travel" },
        { img: "gallery/img5.jpg", caption: "Team Mayo at an International Event" },
        { img: "gallery/img6.jpg", caption: "Adventure & Leadership Workshop" },
        { img: "gallery/img7.jpg", caption: "Cultural Immersion Program" },
        { img: "gallery/img8.jpg", caption: "Exploring Historic Sites" },
        { img: "gallery/img9.jpg", caption: "Leadership in Action — Expedition" },
        { img: "gallery/img10.jpg", caption: "Mayo Students in Europe" },
        { img: "gallery/img11.jpg", caption: "Outdoor Learning Experience" },
        { img: "gallery/img12.jpg", caption: "Round Square Collaboration" },
        { img: "gallery/img13.jpg", caption: "Exchange Students at Mayo" },
        { img: "gallery/img14.jpg", caption: "International Exposure Tour" },
        { img: "gallery/img15.jpg", caption: "Students at a Global Summit" },
        { img: "gallery/img16.jpg", caption: "Immersive Learning Trip" },
        { img: "gallery/img17.jpg", caption: "Cultural Fest Participation" },
        { img: "gallery/img18.jpg", caption: "Mountain Trek Adventure" },
        { img: "gallery/img19.jpg", caption: "Team Mayo in Southeast Asia" },
        { img: "gallery/img20.jpg", caption: "Global Youth Meet" },
        { img: "gallery/img21.jpg", caption: "Historical Exploration Tour" },
        { img: "gallery/img22.jpg", caption: "International Debating Championship" },
        { img: "gallery/img23.jpg", caption: "Science & Innovation Trip" },
        { img: "gallery/img24.jpg", caption: "Cultural Exchange Evening" },
        { img: "gallery/img25.jpg", caption: "Adventure Campfire" },
        { img: "gallery/img26.jpg", caption: "International Friendship Circle" },
        { img: "gallery/img27.jpg", caption: "Sports Collaboration Abroad" },
        { img: "gallery/img28.jpg", caption: "Mayo Delegation at RSIC" },
        { img: "gallery/img29.jpg", caption: "Exploring Landmark Locations" },
        { img: "gallery/img30.jpg", caption: "Outdoor Leadership Program" },
        { img: "gallery/img31.jpg", caption: "Team Spirit Overseas" },
        { img: "gallery/img32.jpg", caption: "Art & Culture Trip" },
        { img: "gallery/img33.jpg", caption: "Global Scholars’ Gathering" },
        { img: "gallery/img34.jpg", caption: "Epic Group Adventure" },
        { img: "gallery/img35.jpg", caption: "Learning Through Travel" },
        { img: "gallery/img36.jpg", caption: "Exploring New Perspectives" },
        { img: "gallery/img37.jpg", caption: "Team Mayo at International Forum" },
        { img: "gallery/img38.jpg", caption: "Student Exchange Memories" },
        { img: "gallery/img39.jpg", caption: "International Collaboration Event" },
        { img: "gallery/img40.jpg", caption: "Celebrating Global Diversity" }
    ],

    "Sports": [
        { title: "Mayo vs Harvard (Polo Match)", city: "Cambridge", country: "USA", lat: 42.3736, lng: -71.1097 },
        { title: "Abu Dhabi International Sports Festival", city: "Abu Dhabi", country: "UAE", lat: 24.4539, lng: 54.3773 }
    ],

    "Sports Collaboration with Round Square": [
        { title: "Japan Basketball Tour", city: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503 },
        { title: "Bangladesh Cricket Collaboration", city: "Dhaka", country: "Bangladesh", lat: 23.8103, lng: 90.4125 }
    ],

    "Round Square": [
        { title: "Round Square International Conference — Kenya", city: "Nairobi", country: "Kenya", lat: -1.2921, lng: 36.8219 },
        { title: "Round Square International Conference — Colombia", city: "Bogotá", country: "Colombia", lat: 4.7110, lng: -74.0721 },
        { title: "Round Square International Service Project — Thailand", city: "Bangkok", country: "Thailand", lat: 13.7563, lng: 100.5018 },
        { title: "Round Square Forum – South Asia & Gulf Region", city: "Muscat", country: "Oman", lat: 23.5859, lng: 58.4059 },
        { title: "Round Square Global Conference — Dorset", city: "Dorset", country: "United Kingdom", lat: 50.7488, lng: -2.3445 },
        { title: "Round Square Global Conference — Shenzhen", city: "Shenzhen", country: "China", lat: 22.5431, lng: 114.0579 },
        { title: "Round Square Global Conference — Tanzania", city: "Arusha", country: "Tanzania", lat: -3.3869, lng: 36.6830 }
    ],

    "Exchanges": [
        { title: "Australian Exchange — Hale School", city: "Perth", country: "Australia", lat: -31.9523, lng: 115.8613 },
        { title: "Australian Exchange — Wesley College", city: "Melbourne", country: "Australia", lat: -37.8136, lng: 144.9631 },
        { title: "UK Exchange — Gresham’s School", city: "Norfolk", country: "United Kingdom", lat: 52.6309, lng: 1.2974 },
        { title: "UK Exchange — Beechwood School", city: "Leeds", country: "United Kingdom", lat: 53.8008, lng: -1.5491 },
        { title: "UK Exchange — Orwell Park School", city: "Ipswich", country: "United Kingdom", lat: 52.0567, lng: 1.1482 },
        { title: "German Exchange — Schloss Gaienhofen", city: "Baden-Württemberg", country: "Germany", lat: 48.669, lng: 9.350 },
        { title: "French Exchange — Arras & Cannes", city: "France", country: "France", lat: 50.293, lng: 2.7819 },
        { title: "South African Exchange — St John's College", city: "Johannesburg", country: "South Africa", lat: -26.2041, lng: 28.0473 },
        { title: "Belgian Exchange — Antwerp & Vorselaar", city: "Antwerp", country: "Belgium", lat: 51.2194, lng: 4.4025 }
    ],

    "Insightful Expeditions": [
        { title: "Geography Tour", city: "USA West Coast", country: "USA", lat: 36.1699, lng: -115.1398 },
        { title: "Forensic Science Tour", city: "Spain", country: "Spain", lat: 40.4168, lng: -3.7038 },
        { title: "History Tour", city: "Europe", country: "Germany", lat: 50.1109, lng: 10.0 },
        { title: "Post Conference Tour (RSIC)", city: "Amsterdam", country: "Netherlands", lat: 52.3676, lng: 4.9041 }
    ]
};


/* ------------------------------------------------------------
   2) PIN COLORS
------------------------------------------------------------ */

const PIN_COLOR = {
    "Sports": "red",
    "Sports Collaboration with Round Square": "orange",
    "Round Square": "green",
    "Exchanges": "white",
    "Insightful Expeditions": "blue"
};

/* ------------------------------------------------------------
   3) INITIALIZE MAP
------------------------------------------------------------ */

const map = L.map("map", {
    minZoom: 2,
    maxZoom: 10,
    zoomControl: true
}).setView([20, 0], 2);

L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    { attribution: "&copy; CARTO", subdomains: "abcd", maxZoom: 19 }
).addTo(map);

map.setMaxBounds([[-85, -180], [85, 180]]);

/* Reset map view */
function resetMap() {
    map.setView([20, 0], 2, { animate: true });
}

/* ------------------------------------------------------------
   4) CREATE SVG MAP PINS
------------------------------------------------------------ */

function createPin(color) {
    const el = document.getElementById("pin-" + color);
    return L.divIcon({
        html: el.innerHTML,
        className: "pin-icon",
        iconSize: [26, 42],
        iconAnchor: [13, 42]
    });
}

/* ------------------------------------------------------------
   5) LOAD MARKERS INTO MAP
------------------------------------------------------------ */

const markers = [];

Object.keys(DATA).forEach(cat => {
    if (cat === "Gallery") return;

    DATA[cat].forEach(ev => {
        const pin = createPin(PIN_COLOR[cat]);
        const m = L.marker([ev.lat, ev.lng], { icon: pin }).addTo(map);
        m.bindPopup(`<h3>${ev.title}</h3>${ev.city}, ${ev.country}`);
        markers.push({ m, cat, ev });
    });
});
/* ============================================================
   6) BUILD TABS + EVENT LIST + GALLERY
============================================================ */

const tabBar = document.getElementById("tabBar");
const eventSection = document.getElementById("eventSection");

/* Create Tabs + Groups */
Object.keys(DATA).forEach((category, index) => {

    /* ---- Create Tab ---- */
    const tab = document.createElement("button");
    tab.className = "nav-tab";
    tab.dataset.cat = category;
    tab.textContent = category;

    if (index === 0) tab.classList.add("active");

    tab.onclick = () => activateTab(category);
    tabBar.appendChild(tab);

    /* ---- Create Group Container ---- */
    const group = document.createElement("div");
    group.className = "group";
    group.id = "group-" + category;

    if (index === 0) group.classList.add("active");

    /* Gallery group needs grid layout */
    if (category === "Gallery") {
        group.classList.add("gallery-grid");
    }

    eventSection.appendChild(group);

    /* ---- Fill Group ---- */
    DATA[category].forEach((ev, i) => {

        /* ------------------ GALLERY ------------------ */
        if (category === "Gallery") {
            const card = document.createElement("div");
            card.className = "gallery-item";

            card.innerHTML = `
                <img src="${ev.img}" loading="lazy">
                <div class="caption">${ev.caption}</div>
            `;

            /* Open image fullscreen */
            card.addEventListener("click", () => {
                const win = window.open(ev.img, "_blank", "noopener,noreferrer");
                if (win) win.opener = null;
            });

            group.appendChild(card);
            return;
        }

        /* ------------------ EVENT CARD ------------------ */
        const card = document.createElement("div");
        card.className = "event-card";

        card.style.animationDelay = (i * 0.07) + "s";

        card.dataset.lat = ev.lat;
        card.dataset.lng = ev.lng;

        card.innerHTML = `
            <h3>${ev.title}</h3>
            <div class="location">${ev.city}, ${ev.country}</div>
        `;

        card.addEventListener("click", () => focusMarker(ev.lat, ev.lng));
        group.appendChild(card);
    });
});
/* ============================================================
   7) TAB SWITCHING LOGIC
============================================================ */

function activateTab(cat) {

    /* Highlight selected tab */
    document.querySelectorAll(".nav-tab").forEach(t => {
        t.classList.toggle("active", t.dataset.cat === cat);
    });

    /* Show only active group */
    document.querySelectorAll(".group").forEach(g => g.classList.remove("active"));
    const activeGroup = document.getElementById("group-" + cat);
    if (activeGroup) activeGroup.classList.add("active");

    /* GALLERY MODE → Hide map + hero + search */
    if (cat === "Gallery") {
        document.body.classList.add("gallery-open");
        return;
    } else {
        document.body.classList.remove("gallery-open");
    }

    /* Reset map */
    resetMap();

    /* Focus markers belonging ONLY to selected tab */
    const pts = [];
    markers.forEach(o => {
        o.m._icon.classList.remove("active");
        o.m.closePopup();

        if (o.cat === cat) {
            pts.push(o.m.getLatLng());
            o.m._icon.classList.add("active");
        }
    });

    /* Fit map to markers */
    if (pts.length === 1) {
        map.setView(pts[0], 6, { animate: true });
    } else if (pts.length > 1) {
        map.fitBounds(pts, { padding: [80, 80] });
    }
}
/* ============================================================
   8) SEARCH ENGINE
============================================================ */

const searchInput = document.getElementById("searchInput");
const searchMessage = document.getElementById("searchMessage");

searchInput.addEventListener("keydown", e => {
    if (e.key === "Enter") runSearch();
});

function runSearch() {
    const q = searchInput.value.trim().toLowerCase();

    if (!q) {
        searchMessage.textContent = "Type something to search.";
        return;
    }

    resetMap();

    let found = false;

    markers.forEach(o => {
        const text = `${o.ev.title} ${o.ev.city} ${o.ev.country}`.toLowerCase();

        if (text.includes(q)) {
            found = true;
            setTimeout(() => focusMarker(o.ev.lat, o.ev.lng), 300);
        }
    });

    searchMessage.textContent = found ? "" : "No results found.";
}


/* ============================================================
   9) FILTER POPUP
============================================================ */

const filterModal = document.getElementById("filterModal");
const filterBtn = document.getElementById("filterBtn");
const closeFilter = document.getElementById("closeFilter");
const filterList = document.getElementById("filterList");

filterBtn.onclick = () => filterModal.style.display = "flex";
closeFilter.onclick = () => filterModal.style.display = "none";

Object.keys(DATA).forEach(cat => {
    const lbl = document.createElement("label");
    lbl.innerHTML = `
        <input type="checkbox" data-cat="${cat}" checked>
        ${cat}
    `;
    filterList.appendChild(lbl);
});

document.getElementById("applyFilters").onclick = () => {
    const cbs = document.querySelectorAll("#filterList input");
    cbs.forEach(cb => toggleCategory(cb.dataset.cat, cb.checked));
    filterModal.style.display = "none";
};

document.getElementById("resetFilters").onclick = () => {
    document.querySelectorAll("#filterList input").forEach(cb => {
        cb.checked = true;
        toggleCategory(cb.dataset.cat, true);
    });
};

/* ============================================================
   10) TOGGLE CATEGORY VISIBILITY
============================================================ */

function toggleCategory(cat, show) {

    /* 1) Hide/Show event cards */
    const group = document.getElementById("group-" + cat);
    if (group && cat !== "Gallery") {
        group.style.display = show ? "block" : "none";
    }

    /* 2) Hide/Show pins */
    markers.forEach(o => {
        if (o.cat === cat) {
            if (show) o.m.addTo(map);
            else map.removeLayer(o.m);
        }
    });
}


/* ============================================================
   11) SCROLL FADE NAVBAR
============================================================ */

let lastY = 0;

window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    const y = window.scrollY;

    if (y > lastY) nav.classList.add("fade-out");
    else nav.classList.remove("fade-out");

    lastY = y;
});


/* ============================================================
   12) PWA SERVICE WORKER
============================================================ */

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}
