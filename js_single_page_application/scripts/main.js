// To be able to cross-origin requests, that is
// AJAX requests accross different domains, we need
// to configure to allow it and we need to serve
// our files with a server. We'll use a simple
// static server that only serves like a static assets
// middleware.

// 1. Install `http-server` `npm i -g http-server`
// 2. Run the command in your project `http-server . -p 3030`

// Fetch Methods

const BASE_URL = `http://localhost:3000/api/v1`;

const Question = {
  all() {
    return fetch(`${BASE_URL}/questions`, {
      credentials: "include"
    }).then(res => res.json());
  },
  one(id) {
    return fetch(`${BASE_URL}/questions/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/questions`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

const Session = {
  create(params) {
    return fetch(`${BASE_URL}/sessions`, {
      method: "POST",
      credentials: "include",
      // to include the cookie when doing fetch, use
      // the "credentials" option with "include" for cross-origin
      // requests or with "same-origin" for same-origin
      // requests.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

// HACK TO LOGIN USER WHILE DEVELOPING!
// Don't do this in a real app
Session.create({ email: "js@winterfell.gov", password: "supersecret" });

// Views
// This collection functions that take data as inputs
// and return HTML to be rendered on the page.

const detailedQuestionView = question => `
  <h1>${question.title}</h1>
  <p>${question.body}</p>
  <small>By ${question.author.full_name}</small>
  <h3>Answers</h3>
  <ul>
    ${question.answers.map(a => `<li>${a.body}</li>`).join("")}
  </ul>
`;

const questionsView = questions =>
  questions
    .map(
      question => `
      <li>
        <a class="question-link" href="#" data-id="${question.id}">
          ${question.title}
        </a>
      </li>
  `
    )
    .join("");

// Selector Helper

const qS = (query, node = document) => node.querySelector(query);
const qSA = (query, node = document) => node.querySelectorAll(query);

const navigateTo = id => {
  qSA(".page.active").forEach(node => {
    node.classList.remove("active");
  });

  qS(`#${id}.page`).classList.add("active");
};

document.addEventListener("DOMContentLoaded", () => {
  // const questionListTag = document.querySelector("#question-list");
  const questionListTag = qS(".question-list");

  Question.all().then(questions => {
    questionListTag.innerHTML = questionsView(questions);
  });

  qS("#question-index").addEventListener("click", event => {
    const questionLink = event.target.closest(".question-link");

    if (questionLink) {
      event.preventDefault();

      // Use the .dataset property nodes to easily retrieve
      // custome attributes beginning in data-.

      // The line below assigns the value of the attribute "data-id"
      // to "questionId"
      const questionId = questionLink.dataset.id;

      Question.one(questionId).then(question => {
        qS("#question-show").innerHTML = detailedQuestionView(question);
        navigateTo("question-show");
      });
    }
  });

  qS(".navbar").addEventListener("click", event => {
    const link = event.target.closest("[data-target]");

    if (link) {
      event.preventDefault();
      const targetPage = link.dataset.target;
      navigateTo(targetPage);
    }
  });

  qS("#new-question-form").addEventListener("submit", event => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    Question.create({
      title: formData.get("title"),
      body: formData.get("body")
    })
      .then(data => {
        if (data.errors) {
          return Promise.reject(data.errors);
        }

        qS("#question-show").innerHTML = detailedQuestionView(data);
        navigateTo("question-show");
        form.reset();
      })
      .catch(error => {
        alert(error.join(", "));
      });
  });
});
