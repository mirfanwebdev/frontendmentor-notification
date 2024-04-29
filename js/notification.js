function showMessage(container, message) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("notification-item--sub-message");
  messageDiv.textContent = message;
  return container.appendChild(messageDiv);
}

function unreadMessage(container) {
  return container.classList.add("unread");
}

function showImage(container, img) {
  const messageImage = document.createElement("div");
  messageImage.classList.add("notification-item--image");
  messageImage.innerHTML = `<img src=${img} alt="image">`;
  return container.appendChild(messageImage);
}

function getNotification(data) {
  const notification = document.querySelector(".notification");
  data.map((item) => {
    const div = document.createElement("div");
    const contentDiv = document.createElement("div");
    const imageContainer = document.createElement("div");

    div.classList.add("notification-item");
    contentDiv.classList.add("notification-content");
    imageContainer.classList.add("notification-avatar");
    imageContainer.innerHTML = `<img src="${item.img}" alt="${item.alt}">`;
    contentDiv.innerHTML = `<span class="bold">${item.name}</span> ${
      item.message
    } ${item.link ? `<a href="#">${item.link}</a>` : ""}${
      item.highlight
        ? `<span class="notification-item--highlight">${item.highlight}</span>`
        : ""
    } ${
      item.status == "unread" ? `<span class="unread-badge">&nbsp;</span>` : ""
    } <p class="notification-item--time">${item.time} ago</p>`;

    notification.appendChild(div);
    div.appendChild(imageContainer);
    div.appendChild(contentDiv);

    if (item.status == "unread") {
      unreadMessage(div);
    }

    if (item.messageImg) {
      showImage(div, item.messageImg);
    }

    if (item.subMassage) {
      showMessage(contentDiv, item.subMassage);
    }
  });
}

getNotification(data);
