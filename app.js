const newsFeedContainer = document.querySelector('.news-feed');

const newsFeedData = news
  // Loop through each item.
  .map((item) => {
    // Destructure object keys that we need.
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
  // To escape "," between items being rendered.
  .join('');

// Append to the container.
newsFeedContainer.innerHTML = newsFeedData;
