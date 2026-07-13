export default async function sitemap() {
  const productos = [];

  const productosUrls = productos.map((p: { slug: string }) => ({
    url: `https://ronin-bike.vercel.app/producto/${p.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: 'https://ronin-bike.vercel.app/', lastModified: new Date() },
    ...productosUrls,
  ];
}