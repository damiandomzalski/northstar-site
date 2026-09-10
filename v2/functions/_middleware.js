// Every alias host (www, beta, ntl-g.com and its www) is sent to the canonical
// domain with a permanent redirect. Cloudflare's own *.pages.dev preview
// hostnames are left alone so deployments can be checked before DNS moves.
const CANONICAL = 'northstartacticallogistics.com';

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname !== CANONICAL && !url.hostname.endsWith('.pages.dev')) {
    url.hostname = CANONICAL;
    url.protocol = 'https:';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
