const newsFeedContainer = document.querySelector('.news-feed');

const newsFeedData = news
  .map((item) => {
    const { title, date, text } = item;
    return `<article class="news-feed-item">
  <h2>${title}</h2>
  <div class="news-info">
    <span>${date}</span>
  </div>
  <p>
    ${text}
  </p>
  </article>
  `;
  })
  .join('');

newsFeedContainer.innerHTML = newsFeedData;
