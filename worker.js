// Workers entry for the maintenance page, served under dulapahv.dev/maintenance.
//
// The static assets are built with a "/maintenance/" base, but the asset files
// themselves live at the bundle root (e.g. /assets/app.js). This Worker strips
// the route prefix so incoming "/maintenance/..." requests resolve to the right
// file, and tags every response as non-indexable.
const ROUTE_PREFIX = /^\/maintenance/;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.pathname = url.pathname.replace(ROUTE_PREFIX, "") || "/";

    const assetResponse = await env.ASSETS.fetch(new Request(url, request));

    const response = new Response(assetResponse.body, assetResponse);
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  },
};
