import axios from "axios";
import { GetServerSidePropsResult } from "next";
import { getPost, Post } from "../services/data";
import { useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { motion } from "framer-motion";



const SubmitButton = styled.input`
text-align:center;
display: inline-block;
  border-radius: 4px;
  background-color: #413F6C;
  border: none;
  color: #FFFFFF;
  font-size: 20px;
t
  padding: 20px;
  width: 150px;
  height:40px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 20px;
}
`;


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

  function sendPost(e:any) {
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

     
          <motion.h3
            transition={{ type: "spring", velocity: 10, stiffness: 30 }}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}> 
            Enter the title :</motion.h3>




          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
          />
        </div>
        <div>
           <motion.h3
             transition={{ type: "spring", velocity: 10, stiffness: 30 }}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}> 
           Enter your Description :</motion.h3>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div>
           <motion.h3
           
             transition={{ type: "spring", velocity: 10, stiffness: 30 }}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}> 
           Past your Image URL</motion.h3>
          <input
            onChange={(e) => setImage(e.target.value)}
            type="text"
            value={image}
          />
        </div>
        <div>
          <SubmitButton type={"submit"} value="submit" />
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
