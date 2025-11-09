/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://nectarindia.co.in", // your domain
  generateRobotsTxt: true, // generate robots.txt
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
  },
};
