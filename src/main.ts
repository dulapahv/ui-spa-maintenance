import "./style.css";

const HOMEPAGE_URL = "https://dulapahv.dev";

const LOGO_SVG = `<svg viewBox="0 0 128 128" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.964" fill-rule="evenodd" clip-rule="evenodd" d="M83.625 7.875C84.7482 13.374 87.04 18.374 90.5 22.875C94.679 27.4452 99.804 30.4452 105.875 31.875C93.4178 35.166 86.0845 43.166 83.875 55.875C81.6655 43.166 74.3322 35.166 61.875 31.875C74.3827 28.6182 81.6327 20.6182 83.625 7.875Z" fill="#FB568A"/>
  <path opacity="0.981" fill-rule="evenodd" clip-rule="evenodd" d="M47.625 23.875C49.024 32.2762 51.899 40.1927 56.25 47.625C63.7695 59.2595 74.3112 66.6763 87.875 69.875C68.5305 74.9277 55.9055 87.011 50 106.125C49.094 109.332 48.3857 112.582 47.875 115.875C46.004 101.338 39.5872 89.296 28.625 79.75C22.4389 74.991 15.5222 71.6992 7.875 69.875C28.3183 64.39 41.1932 51.39 46.5 30.875C47.1177 28.578 47.4927 26.2448 47.625 23.875Z" fill="#FFCC49"/>
  <path opacity="0.964" fill-rule="evenodd" clip-rule="evenodd" d="M97.625 71.875C98.7482 77.374 101.04 82.374 104.5 86.875C108.679 91.4452 113.804 94.4452 119.875 95.875C107.418 99.166 100.084 107.166 97.875 119.875C95.6655 107.166 88.3322 99.166 75.875 95.875C88.3827 92.6182 95.6327 84.6182 97.625 71.875Z" fill="#5BB3FB"/>
</svg>`;

const ICON_BACK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`;
const ICON_HOME = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>`;
const ICON_GITHUB = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`;
const ICON_LINKEDIN = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>`;
const ICON_EMAIL = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;

interface SocialLink {
  readonly href: string;
  readonly icon: string;
  readonly label: string;
}

const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: "GitHub", href: "https://github.com/dulapahv", icon: ICON_GITHUB },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dulapahv",
    icon: ICON_LINKEDIN,
  },
  { label: "Email", href: "mailto:contact@dulapahv.dev", icon: ICON_EMAIL },
];

const socialMarkup = ({ label, href, icon }: SocialLink): string => {
  const isExternal = href.startsWith("http");
  const attrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
  return `<a class="social__link" href="${href}"${attrs} aria-label="${label}" title="${label}">${icon}<span>${label}</span></a>`;
};

/**
 * Navigate to the previous page if there is in-app history, otherwise send the
 * visitor to the homepage so the control is never a dead end.
 */
const goBack = (): void => {
  if (window.history.length > 1) {
    window.history.back();
    return;
  }
  window.location.assign(HOMEPAGE_URL);
};

export const buildMaintenancePage = (): HTMLElement => {
  const main = document.createElement("main");
  main.id = "center";
  main.setAttribute("aria-labelledby", "maintenance-title");
  main.innerHTML = `
    <div class="logo" role="img" aria-label="DulapahV">${LOGO_SVG}</div>
    <h1 id="maintenance-title">Under maintenance</h1>
    <p class="lede">
      I'm making some improvements behind the scenes. The site will be back
      shortly — thanks for your patience.
    </p>
    <div class="actions">
      <button class="btn btn--primary" type="button" data-action="back">
        ${ICON_BACK}<span>Go back</span>
      </button>
      <a class="btn" href="${HOMEPAGE_URL}">
        ${ICON_HOME}<span>Visit homepage</span>
      </a>
    </div>
    <nav class="social" aria-label="Find me elsewhere">
      ${SOCIAL_LINKS.map(socialMarkup).join("")}
    </nav>
  `;

  main
    .querySelector<HTMLButtonElement>('[data-action="back"]')
    ?.addEventListener("click", goBack);

  return main;
};

const appRoot = document.querySelector<HTMLDivElement>("#app");
if (appRoot) {
  appRoot.replaceChildren(buildMaintenancePage());
}
