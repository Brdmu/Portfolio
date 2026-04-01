async function renderLibrary() {
  const response = await fetch("../data/books.json");
  const data = await response.json();

  // Контейнеры с книгами
  const readNowCont = document.querySelector(".readNowCont");
  const readInPlansCont = document.querySelector(".readInPlansCont");
  const readAlreadyCont = document.querySelector(".readAlreadyCont");

  const filters = [
    { button: ".readNowBut", section: ".readNow" },
    { button: ".readInPlansBut", section: ".readInPlans" },
    { button: ".readAlreadyBut", section: ".readAlready" },
  ];

  data.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("BookSectionCard");
    card.innerHTML = `
                <div class="BookSectionCardPreview">
            <div class="BookSectionCardOverlay">
              <p>${element.title}</p>
              <p>${element.author}</p>
            </div>
            <img src="${element.image}" alt="" />
            <div class="BookSectionCardShort">
              <p>${element.note}</p>
            </div>
          </div>
          <div class="BookSectionCardBack">
            <p><b>Оценка:</b> ${element.rating}</p>
            <p><b>Отзыв:</b> ${element.review}</p>
          </div>`;
    if (element.status == "Прочитано") readAlreadyCont.append(card);
    if (element.status == "Планирую") readInPlansCont.append(card);
    if (element.status == "Читаю") readNowCont.append(card);
  });

  filters.forEach((element) => {
    const btn = document.querySelector(element.button);
    const sect = document.querySelector(element.section);
    btn.addEventListener("click", () => {
      sect.classList.toggle("hide");
      btn.classList.toggle("pressed");
    });
  });
}

renderLibrary();
