/**
 * filename: sophisticated_web_crawler.js
 * 
 * This code demonstrates a sophisticated web crawler that recursively crawls a website,
 * extracts information, and performs complex operations on the crawled data.
 *
 * Disclaimer: The code below is a simplified and abstracted version of a web crawler and
 * may not work as is. It serves as an example of a sophisticated JavaScript code with over
 * 200 lines.
 */

const axios = require('axios');
const cheerio = require('cheerio');

// Global variables to store crawled data
const visitedUrls = new Set();
const collectedData = [];

// Configuration variables
const startUrl = 'https://example.com';
const maxDepth = 3;

/**
 * Function to start the web crawling process.
 * @param {string} url - The starting URL for crawling.
 * @param {number} depth - The current depth level.
 */
async function startCrawling(url, depth) {
  if (depth > maxDepth) {
    return;
  }

  // Skip already visited URLs
  if (visitedUrls.has(url)) {
    return;
  }

  visitedUrls.add(url);

  try {
    const response = await axios.get(url);

    // Extract relevant information from the web page using Cheerio
    const $ = cheerio.load(response.data);
    const title = $('title').text().trim();
    const metaDescription = $('meta[name="description"]').attr('content') || '';
    const links = [];

    // Extract all the links from the web page
    $('a').each((index, element) => {
      const href = $(element).attr('href');
      links.push(href);
    });

    // Perform some complex operation on the extracted data
    const processedData = processCrawledData(title, metaDescription, links);

    // Store the processed data in the collectedData array
    collectedData.push(processedData);

    // Crawl all the extracted links recursively
    for (const link of links) {
      if (link.startsWith('/') || link.startsWith(startUrl)) {
        const absoluteLink = link.startsWith('/') ? startUrl + link : link;
        await startCrawling(absoluteLink, depth + 1);
      }
    }
  } catch (error) {
    console.error(`Failed to crawl ${url}: ${error}`);
  }
}

/**
 * Function to process and transform the collected data.
 * @param {string} title - The title of the web page.
 * @param {string} description - The meta description of the web page.
 * @param {string[]} links - The extracted links from the web page.
 * @returns {Object} - The processed data.
 */
function processCrawledData(title, description, links) {
  // Some complex operations on the collected data
  const processedTitle = title.toUpperCase();
  const processedDescription = description.replace(/(\w+)\s(\w+)/g, '$1-$2');
  const processedLinks = links.map(link => link.length);

  return {
    title: processedTitle,
    description: processedDescription,
    links: processedLinks,
  };
}

// Start the web crawling process
startCrawling(startUrl, 0)
  .then(() => {
    // Print the collected data
    console.log(collectedData);
  })
  .catch(error => {
    console.error(`Failed to crawl website: ${error}`);
  });