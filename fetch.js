// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const API_KEY = "ViT8mwZAcQdAQCD22UWEbpGT3ClYG0d6";
const url = `${BASE_URL}?q=cars&api-key=${API_KEY}`;


fetch(url)
  .then(function(data) {
    console.log(data);
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    const snipped = article.snippet;
    document.getElementById('article-snippet').innerText = snipped;

    const webUrl = article.web_url;
    const aDoc = document.getElementById('article-link');
    aDoc.href = webUrl;

    const sectName = article.section_name;
    document.querySelector('.container').append(sectName);

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }
  });
