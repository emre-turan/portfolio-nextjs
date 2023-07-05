import Parser from "rss-parser";

export default async function handler(req, res) {
  const parser = new Parser();
  const feed = await parser.parseURL("https://medium.com/feed/@itsemreturan");
  res.status(200).json(feed.items);
}
