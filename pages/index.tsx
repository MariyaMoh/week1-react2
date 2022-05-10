import axios from "axios";
import { GetServerSidePropsResult } from "next";
import { getPost, Post } from "../services/data";
import { useState } from "react";
import styled from "styled-components";
 import { Header } from "../components/Header";




const BlogHome = styled.div`
//  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  border: 5px solid #E3928B;
  border-radius: 5px;
  background-color: #EDE8DA;
  cursor: pointer;
  color:#413F6C;
  img {
    max-width: 50%;
    height: auto;
}
`;


interface IndexPageProps {
  post: Post[];
}

export default function IndexPage({ post }: IndexPageProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function sendPost(e) {
    e.preventDefault();
    axios.post("/api/post", {
      title,
      description,
      image,
    });
  }
  return (
    <div>
       <Header />
    <BlogHome>
     
      <form onSubmit={sendPost}>
        <div>
          {/* <Image
    
      src="/imgg.png"
      alt="z"
      width={200}
      height={200}
    /> */}

     
          <h3>Enter the title :</h3>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
          />
        </div>
        <div>
           <h3>Enter your Description :</h3>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div>
           <h3>Past your Image URL</h3>
          <input
            onChange={(e) => setImage(e.target.value)}
            type="text"
            value={image}
          />
        </div>
        <div>
          <input type={"submit"} value="submit" />
        </div>
      </form>
    </BlogHome>
    </div>
  );
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<IndexPageProps>
> {
  return {
    props: { post: getPost() },
  };
}
