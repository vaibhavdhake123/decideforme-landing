/* icons (lucide paths) */
const P = {
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    mic: '<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/>',
    refresh:
        '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M3 16h5v5"/>',
    wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    inf: '<path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"/>',
    scale: '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1ZM2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1ZM7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    compass:
        '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-1.8 5.41a2 2 0 0 1-1.27 1.27L7.76 16.24l1.8-5.41a2 2 0 0 1 1.27-1.27z"/>',
    list: '<path d="m3 17 2 2 4-4M3 7l2 2 4-4M13 6h8M13 12h8M13 18h8"/>',
    calc: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M16 14v4M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    eye: '<path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0"/><circle cx="12" cy="12" r="3"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    menu: '<path d="M4 12h16M4 6h16M4 18h16"/>',
    trash: '<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    badge: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    pointer:
        '<path d="M14 4.1 12 6M5.1 8l-2.9-.8M6 12l-1.9 2M7.2 2.2 8 5.1M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/>',
    sparkle: '<path d="M9.94 14.06 8 20l-1.94-5.94L0 12l6.06-2.06L8 4l1.94 5.94L16 12zM19 3v4M21 5h-4"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    crown: '<path d="M11.56 3.27a.55.55 0 0 1 .88 0l3.28 4.4a1 1 0 0 0 1.5.15l3.26-3.24a.5.5 0 0 1 .83.46l-2.34 11.38a1 1 0 0 1-.98.8H6.01a1 1 0 0 1-.98-.8L2.7 5.04a.5.5 0 0 1 .83-.46l3.26 3.24a1 1 0 0 0 1.5-.15zM5 21h14"/>',
};
P.sun =
    '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2m-7.07-17.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>';
P.moon =
    '<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>';
P.monitor = '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>';
const svg = (n, c) =>
    '<svg class="i' + (c ? " " + c : "") + '" viewBox="0 0 24 24" aria-hidden="true">' + P[n] + "</svg>";
const paint = (r) =>
    (r || document).querySelectorAll("i[data-i]").forEach((e) => {
        e.outerHTML = svg(e.dataset.i, e.className);
    });

/* marquee */
const EX = [
    "Rent or buy a home?",
    "Take the personal loan?",
    "Switch careers this year?",
    "Which laptop should I get?",
    "Move to a new city?",
    "Start a side business?",
    "Pay off debt or invest?",
    "Accept the job offer?",
    "Which course should I join?",
    "Buy a car or keep my bike?",
];
document.getElementById("mq").innerHTML = [...EX, ...EX].map((t) => "<span>" + t + "</span>").join("");

/* data points */
document.getElementById("data").innerHTML = [
    [
        "eye",
        "Your decisions create your answer",
        "They are sent to the AI service to make the analysis, and saved to your history.",
    ],
    [
        "mic",
        "Voice becomes text in your browser",
        "Your browser's speech service does the conversion. This site does not store your audio.",
    ],
    [
        "trash",
        "Delete whenever you like",
        "Remove one decision, clear your history, or delete your account from your Profile.",
    ],
]
.map(
    (d) =>
        '<div style="display:flex;flex-direction:column;gap:16px;background:var(--card);padding:24px"><span class="ico sm">' +
        svg(d[0]) +
        '</span><div><h3 style="font-size:15px;font-weight:600">' +
        d[1] +
        '</h3><p style="margin-top:4px;font-size:14px;line-height:1.625;color:var(--text-2)">' +
        d[2] +
        "</p></div></div>"
)
.join("");
if (matchMedia("(min-width:768px)").matches)
    document.getElementById("data").style.gridTemplateColumns = "repeat(3,1fr)";

/* use cases */
const CASES = [
    [
        "Money",
        "Should I pay off my loan early or invest the extra cash?",
        ["Pay off loan", "Invest it", "Split 50/50"],
        "A side-by-side view of interest saved versus likely returns, and what each choice means for your safety net.",
    ],
    [
        "Career",
        "Should I accept the new job offer or stay where I am?",
        ["Accept offer", "Stay", "Negotiate first"],
        "Growth, pay, stability and risk laid out clearly, so the trade-offs are visible before you reply.",
    ],
    [
        "Life",
        "Should I move to a bigger city for better opportunities?",
        ["Move now", "Wait a year", "Try remote first"],
        "What you gain, what you give up, and which option fits your priorities, such as family or freedom.",
    ],
    [
        "Everyday",
        "Which laptop should I buy for coding and travel?",
        ["Lightweight", "Powerful", "Mid-range"],
        "A quick comparison by what you actually use it for, ending in one pick you can buy with confidence.",
    ],
];
const tabs = document.getElementById("tabs"),
    cases = document.getElementById("cases");
CASES.forEach((c, i) => {
    tabs.insertAdjacentHTML(
        "beforeend",
        '<button role="tab" aria-selected="' + (i == 0) + '" data-i="' + i + '">' + c[0] + "</button>"
    );
    cases.insertAdjacentHTML(
        "beforeend",
        '<div class="card case' +
            (i == 0 ? " on" : "") +
            '"><p class="q">' +
            c[1] +
            '</p><div class="opts">' +
            c[2].map((o) => "<span>" + o + "</span>").join("") +
            '</div><div class="out">' +
            c[3] +
            "</div></div>"
    );
});
tabs.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    tabs.querySelectorAll("button").forEach((x) => x.setAttribute("aria-selected", x === b));
    [...cases.children].forEach((x, i) => x.classList.toggle("on", i == b.dataset.i));
});

/* packs — EDIT with your real values */
const PACKS = [
    {n: "Starter", c: 10, p: 49, ic: "zap", t: "Best for trying out DecideForMe"},
    {n: "Popular", c: 30, p: 129, ic: "sparkle", t: "Best for regular decisions", hot: 1, b: "Most popular"},
    {n: "Pro", c: 75, p: 299, ic: "crown", t: "Best for heavy users"},
    {n: "Mega", c: 200, p: 699, ic: "crown", t: "Best for teams and power users"},
];
document.getElementById("packs").innerHTML = PACKS.map((k, i) => {
    const f = [k.c + " AI decisions", "₹" + (k.p / k.c).toFixed(1) + " per credit", "Credits never expire"].concat(
        k.c >= 30 ? ["Priority support & follow-throughs"] : []
    );
    return (
        '<div class="reveal"><div class="pk' +
        (k.hot ? " hot" : "") +
        '">' +
        (k.b ? '<span class="bd">' + k.b + "</span>" : "") +
        '<div style="position:relative;min-height:92px"><div class="nm"><span class="ico">' +
        svg(k.ic) +
        "</span><h3>" +
        k.n +
        '</h3></div><p class="tl">' +
        k.t +
        "</p></div>" +
        '<div class="pr"><b>₹' +
        k.p +
        "</b><span>/ one-time</span></div>" +
        '<a href="/purchase?pack=' +
        k.n.toLowerCase() +
        '" class="btn pri" style="position:relative">Get ' +
        k.n +
        svg("arrow") +
        "</a>" +
        '<div><p style="font-size:12px;font-weight:600;margin-bottom:12px;color:' +
        (k.hot ? "rgba(255,255,255,.8)" : "var(--text-2)") +
        '">' +
        (i ? "Everything in " + PACKS[i - 1].n + " and:" : "What's included:") +
        "</p><ul>" +
        f.map((x) => '<li><span class="m">' + svg("check") + "</span>" + x + "</li>").join("") +
        "</ul></div></div></div>"
    );
}).join("");

paint();
document.getElementById("yr").textContent = new Date().getFullYear();

/* theme: light | dark | system */
const tb = document.getElementById("tbtn"),
    tm = document.getElementById("tmenu"),
    root = document.documentElement;
const getT = () => {
    try {
        const t = localStorage.getItem("theme");
        return t === "light" || t === "dark" ? t : "system";
    } catch (e) {
        return "system";
    }
};
function setT(t) {
    if (t === "system") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", t);
    try {
        t === "system" ? localStorage.removeItem("theme") : localStorage.setItem("theme", t);
    } catch (e) {}
    tb.innerHTML = svg(t === "light" ? "sun" : t === "dark" ? "moon" : "monitor");
    tm.querySelectorAll("button").forEach((b) => b.setAttribute("aria-checked", b.dataset.t === t));
}
setT(getT());
tb.onclick = (e) => {
    e.stopPropagation();
    const o = tm.classList.toggle("open");
    tb.setAttribute("aria-expanded", o);
};
tm.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    setT(b.dataset.t);
    tm.classList.remove("open");
    tb.setAttribute("aria-expanded", false);
});
document.addEventListener("click", () => {
    tm.classList.remove("open");
    tb.setAttribute("aria-expanded", false);
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        tm.classList.remove("open");
        tb.setAttribute("aria-expanded", false);
    }
});

/* mobile menu */
const bg = document.getElementById("burger"),
    mn = document.getElementById("mnav");
bg.onclick = () => {
    const o = mn.classList.toggle("open");
    bg.setAttribute("aria-expanded", o);
    bg.setAttribute("aria-label", o ? "Close menu" : "Open menu");
};
mn.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
        mn.classList.remove("open");
        bg.setAttribute("aria-expanded", false);
    }
});

/* reveal on scroll */
const io =
    "IntersectionObserver" in window
        ? new IntersectionObserver(
              (es) =>
                  es.forEach((e) => {
                      if (e.isIntersecting) {
                          e.target.classList.add("in");
                          io.unobserve(e.target);
                      }
                  }),
              {threshold: 0.12}
          )
        : null;
document.querySelectorAll(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
