import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Products() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://data-y52c.onrender.com/posts');
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(posts)
  return <>
  <div className="container">
    <div className="row">
<div className="col-md-6  d-flex justify-content-center">

    </div>
<div className="col-md-6  d-flex justify-content-center">

</div>
    </div>

  </div>
    <div className="gallery2" id="gallery">
      <div className="container">
        <div className="main-title ">
          <h2 id='Products'>New For Woman</h2>
          <p> <span>DAYTIME NUANCES</span></p>
        </div>
        <div className="gallery2-photos">
          {posts.map((post) => (
            <div className={`image ${post.category}`} key={post.id}>
          <Link to={`/ProductDetails/${post.id}`}>
            <img src={post.img} alt={`meal-${post.id}`} />
              <div className="layer">
                <h2>{post.title}</h2>
                {/* <p>{post.description}</p> */}
              </div>
              </Link>

            </div>
          ))}

        </div>

      </div>
    </div>

  </>
}




