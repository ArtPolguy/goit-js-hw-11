// const BASE_URL =

function addComment(comment) {
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  };
  return fetch('http://localhost:3000/comments', option).then(r => r.json());
}

addComment({
  body: 'next comment',
});
addComment({
  body: 'following comment',
}).then(comment => console.log(comment));
