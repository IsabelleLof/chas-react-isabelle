// 2. API-Anrop och Rendering (3p)
// Använd fetch för att hämta posts från https://jsonplaceholder.typicode.com/posts.
// Visa endast titlarna för de första 5 inläggen.
// Varje titel ska vara en klickbar länk som, när man klickar på den,
// loggar postens ID till konsolen. Använd <button> för den klickbara länken.

import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [showPostBody, setShowPostBody] = useState(false);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      setPosts(data.slice(0, 10));
      //console.log(data);
    }
    //anropa getPosts()
    getPosts();
  }, []);

  return (
    <div>
      <h1>Title</h1>
      <p>Post</p>
      <button>Show</button>
      {posts.map((post) => {
        return (
          //table row tag
          // eslint-disable-next-line react/jsx-key
          <tr>
            <td>{post.title}</td>
            {<td>{post.body}</td>}
            <button onClick={() => setShowPostBody(!showPostBody)}>Show</button>
          </tr>
        );
      })}
    </div>
  );
}

export default App;
