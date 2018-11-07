// Write chatr code here!

// Resource: Messages
// Routes
// messages#index -> GET /messages
// messages#create -> POST /messages
// messages#update -> PATCH /messages/:id
// messages#destroy -> DELETE /messages/:id

// Columns on Messages
// - id:int
// - body:text
// - flagged:boolean
// - username:varchar(255)
// - created_at:datetime
// - updated_at:datetime

// Sample message:
// {
//   body: "Peace. Prosperity. A land where the powerful do not prey on the powerless.",
//   createdAt: "2018-11-06T21:21:42.125Z",
//   flagged: false,
//   id: 2,
//   updatedAt: "2018-11-06T21:21:42.125Z",
//   username: "the_spider",
// }

// Using Fetch

// `fetch` is a function that is part of any modern browser.
// It's asynchronous like `setTimeout`. Use it make HTTP requests
// and receive responses (without causing browser load the response.)

// By default, `fetch` will make a GET request to the URL given
// as its first argument. It can optionally take a configuration
// object as a second argument to specify a different method,
// edit the HTTP headers, add content, etc.

// Example usage:

// Make a GET to /messages
fetch("/messages")
  // If the response we receive contains JSON, use `response.json()`
  // to parse into a JavaScript data structure.
  .then(response => response.json())
  .then(data => console.table(data));

// Making a POST to /messages
/*
fetch("/messages", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ body: "Hello! 👋" })
});
*/

// Making a DELETE to /messages/:id
// fetch("/messages/8", { method: "DELETE" })

const Message = {
  all() {
    return fetch(`/messages`).then(res => res.json());
  },
  // usage:
  // Message.all().then(data => console.table(data))
  create(params) {
    return fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    });
  },
  // usage:
  // Message
  //  .create({ body: "Yo! 😎"})
  //  .then(() => console.log("Message created!"))
  destroy(id) {
    return fetch(`/messages/${id}`, { method: "DELETE" });
  }
};

const loadMessages = () => {
  const messagesTag = document.querySelector("#messages");

  Message.all().then(messages => {
    messagesTag.innerHTML = messages
      .map(
        m => `
      <li>
        <strong>${m.id}</strong> ${m.body}
        <button data-id="${m.id}" class="btn-delete">Delete</button>
      </li>
      `
      )
      .join("");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  loadMessages();
  setInterval(loadMessages, 1000);

  const newMessageTag = document.querySelector("#new-message");
  const messagesTag = document.querySelector("#messages");

  newMessageTag.addEventListener("submit", event => {
    event.preventDefault();

    // In this case, the `currentTarget` will be node of the form.
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    Message.create({ body: formData.get("body") }).then(() => {
      currentTarget.reset();
      loadMessages();
    });
  });

  messagesTag.addEventListener("click", event => {
    const { target } = event;

    const deleteButton = target.closest(".btn-delete");

    if (deleteButton) {
      console.log(
        "Message id:",
        // shortcut for reading & writing attributes
        // beginning with data-
        deleteButton.dataset.id,
        deleteButton.getAttribute("data-id")
      );

      const { id } = deleteButton.dataset;

      if (!confirm(`Are you want to delete Message (id=${id})?`)) {
        return;
      }

      Message.destroy(id).then(() => {
        loadMessages();
      });
    }
  });
});

// Chat Battle Answers

// 1.
function createMessage(params) {
  return fetch("/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  });
}

// 2.
fetch("/messages")
  .then(r => r.json())
  .then(ms => console.log(ms.length));

// 3.
function replaceMessage(id, text) {
  return fetch(`/messages/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      body: text
    })
  });
}

// 4.
function deleteMessage(id) {
  return fetch(`/messages/${id}`, {
    method: "DELETE"
  });
}

// 5.

function copyMessage(id) {
  return fetch(`/messages`)
    .then(res => res.json())
    .then(messages => {
      const message = messages.find(m => m.id === id);

      return createMessage({ body: message.body });
    });
}
