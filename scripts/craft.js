Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

async function craftRender() {
  const response = await fetch("../data/craft.json");
  const data = await response.json();
  const worksContainer = document.querySelector(".hobbyContainer");

  data.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("craftCard");
    card.classList.add(`photo${element.photoCount}`);
    card.innerHTML = `
      <div class="big-photo">
        <a href="${element.image1}" data-fancybox="${element.id}" data-caption="${element.note}">
          <img src="${element.image1}" alt="${element.title} фото ${element.id}" />
        </a>
      </div>
    `;

    for (let i = 2; i <= Math.min(element.photoCount, 4); i++) {
      const link = element[`image${i}`];
      card.innerHTML += `
      <div class="photo-${i}">
        <a href="${link}" data-fancybox="${element.id}" data-caption="${element.note}">
          <img src="${link}" alt="${element.title} фото ${element.id}" />
        </a>
      </div>
      `;
    }

    card.innerHTML += `
      <div class="card-text">
        <h3>${element.title}</h3>
        <p>${element.note}</p>
      </div>
      `;
    worksContainer.append(card);
  });

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
}

craftRender();
