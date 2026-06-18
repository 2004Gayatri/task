const svgData = (svg) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

export const buildTeamIcon = svgData(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134 134">
  <g fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round" stroke-linejoin="round">
    <path d="M35 17l22 22"/>
    <path d="M18 20l20 5 6 18-12 12-18-6-5-20z" fill="#fff" stroke="none"/>
    <path d="M81 18a31 31 0 0 1 36 37L88 84 71 67l29-29a19 19 0 0 0-24-4z" fill="#fff" stroke="none"/>
    <path d="M22 103l81-81"/>
    <path d="M30 114l84-84"/>
    <path d="M45 82l30 30"/>
    <path d="M31 99l23 23"/>
  </g>
</svg>
`);

export const competeIndiaIcon = svgData(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138 138">
  <g fill="#fff">
    <path d="M68 22l31 31v65H37V53z"/>
    <path d="M17 42h8v76h-8zM113 42h8v76h-8z"/>
    <path d="M7 34h5v84H7zM126 34h5v84h-5z"/>
    <path d="M13 34l8-13 8 13zM109 34l8-13 8 13z"/>
    <path d="M25 70h20v48H25zM93 70h20v48H93z"/>
  </g>
  <g fill="#000">
    <path d="M55 118V92l13-17 15 17v26z"/>
    <rect x="32" y="77" width="6" height="8"/>
    <rect x="32" y="94" width="6" height="8"/>
    <rect x="100" y="77" width="6" height="8"/>
    <rect x="100" y="94" width="6" height="8"/>
  </g>
</svg>
`);

export const rankingIcon = svgData(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148 148">
  <g fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 126v-14c0-10 6-16 16-16h16v30"/>
    <path d="M103 126V82c0-9-5-14-14-14H61c-9 0-14 5-14 14v44"/>
    <path d="M103 100h16c10 0 16 6 16 16v10"/>
    <path d="M75 14l8 16 18 3-13 13 3 18-16-8-16 8 3-18-13-13 18-3z"/>
  </g>
</svg>
`);

export const leagueIcon = svgData(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176 176">
  <g fill="#fff">
    <circle cx="88" cy="52" r="15"/>
    <path d="M57 34h18a39 39 0 0 0-10 29H47c-8 0-14-6-14-14v-1c0-8 8-14 24-14z"/>
    <path d="M101 34h18c16 0 24 6 24 14v1c0 8-6 14-14 14h-18a39 39 0 0 0-10-29z"/>
    <path d="M54 82c12-13 25-18 34-18s22 5 34 18c10 11 15 24 15 39v12c0 6-4 10-10 10H49c-6 0-10-4-10-10v-12c0-15 5-28 15-39zm22 25c-8 5-12 12-14 21h52c-2-9-6-16-14-21-8-5-16-5-24 0z"/>
    <path d="M24 80c14 0 26 5 35 15-9 10-14 23-14 38H14c-6 0-10-4-10-10v-11c0-19 9-32 20-32z"/>
    <path d="M152 80c11 0 20 13 20 32v11c0 6-4 10-10 10h-31c0-15-5-28-14-38 9-10 21-15 35-15z"/>
  </g>
</svg>
`);
