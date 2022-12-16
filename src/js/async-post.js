async function addComment(comment) {
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  };
  const response = await fetch('http://localhost:3000/comments', option);
  const newComment = await response.json();

  console.log(response);
  console.log(newComment);
  return newComment;
}

const newAsyncComment = addComment({
  body: 'async comment',
});

newAsyncComment.then(comment => console.log(comment));
