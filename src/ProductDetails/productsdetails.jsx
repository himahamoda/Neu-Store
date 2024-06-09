import size from "../Assets/OIP (2).jpg";
import { FixedSizeGrid as Grid } from "react-window";
import faker from "https://cdn.skypack.dev/faker@5.5.3";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';



const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000
};

export default function ProductDetails() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);

    const [enlargedImage, setEnlargedImage] = useState(null);

    const COLUMNS = 18;
    const ROWS = 30;
    const data = Array.from({ length: ROWS }, () =>
        Array.from({ length: COLUMNS }, faker.internet.avatar)
    );


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://data-y52c.onrender.com/posts/${id}`);
            const data = await response.json();
            setPost(data);
        };
        fetchData();
    }, [id]);

    const handleClick = () => {
        // window.open(`https://wa.link/hs6joo?text=I%20want%20to%20order%20${post.title}%20for%20${post.price}%20${post.img}`);
        window.open(`https://wa.link/hs6joo`);
    };

    const handleImageClose = () => {
        setEnlargedImage(null);
    };

    const handleImageClick = (img) => {
        setEnlargedImage(img);
    };

    return <>
        <div className="container">
            <div className="row">
                < div className="col-md-7 ">
                    <Grid
                        columnCount={3}
                        rowCount={Math.ceil(post?.img?.length / 4)}
                        columnWidth={380}
                        rowHeight={480}
                        height={500}
                        width={370}
                    >
                        {({ rowIndex, columnIndex, style }) => {
                            const index = rowIndex * 4 + columnIndex;
                            return (
                                <img
                                    key={index}
                                    className="list-container w-100 "
                                    src={post?.img?.[index]}
                                    alt={post?.title}
                                    onClick={() => handleImageClick(post?.img?.[index])}
                                    style={style}
                                />
                            );
                        }}
                    </Grid>
                </div>
                <div className="col-md-5 ">
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                    {/* <h2>{post.price}</h2> */}
                    <div className="">
                        <img src={size} className="w-75 h-50 mb-5" alt="" />
                    </div>
                    <a className="" onClick={handleClick}>
                        <button className="Order mb-5 mt-5"> Order Now for {post.price} EG</button></a>

                </div>
            </div>
            {enlargedImage && (
                <div className="enlarged-image-container">
                    <img src={enlargedImage} alt={post.title} className="enlarged-image" />
                    <button className="close-btn " onClick={handleImageClose}>
                        &times;
                    </button>
                </div>
            )}
        </div>

    </>
}






