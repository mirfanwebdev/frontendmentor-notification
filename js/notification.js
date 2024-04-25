function showMessage(container, message) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  return container.appendChild(messageDiv);
}

function getNotification(data) {
  const notification = document.querySelector(".notification");
  data.map((item) => {
    const div = document.createElement("div");
    const contentDiv = document.createElement("div");
    const imageContainer = document.createElement("div");

    div.classList.add("notification-item");
    contentDiv.classList.add("notification-content");
    imageContainer.innerHTML = `<img src="${item.img}" alt="${item.alt}" class="notification-item--avatar">`;
    contentDiv.innerHTML = `${item.name} ${item.message} ${
      item.link ? `<a href="#">${item.link}</a>` : ""
    } <p class="notification-item--time">${item.time} ago</p>`;

    notification.appendChild(div);
    div.appendChild(imageContainer);
    div.appendChild(contentDiv);

    if (item.subMassage) {
      showMessage(contentDiv, item.subMassage);
    }
  });
}

getNotification(data);
