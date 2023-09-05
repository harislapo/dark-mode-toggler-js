const newsFeedContainer = document.querySelector('.news-feed');
const toggleBtn = document.querySelector('.btn');

toggleBtn.innerHTML = '<img src="./favicon-to-dark.png"/>';

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
  // Get the current img source.
  const currentSrc = toggleBtn.innerHTML;
  const currentMode = currentSrc.split('/')[1].split('-')[2].split('.')[0];
  // Check if the image is for the dark mode, if it is change it to the image for the light mode and vice versa.
  if (currentMode === 'dark') {
    toggleBtn.innerHTML = '<img src="./favicon-to-light.png"/>';
  } else {
    toggleBtn.innerHTML = '<img src="./favicon-to-dark.png"/>';
  }
});

const newsFeedData = news
  // Loop through each item.
  .map((item) => {
    // Destructure object keys that we need.
    const { title, date, text } = item;
    // Return an article DOM element filled with data from external file.
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
