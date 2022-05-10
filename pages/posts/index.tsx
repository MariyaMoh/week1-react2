import axios from "axios";
import { GetServerSidePropsResult } from "next";
import { getPost, Post } from "../../services/data";
import styled from "styled-components";
import Link from "next/link";
import { Header } from "../../components/Header";

function sendPost() {
  const title = prompt("What is the title of the post?") || "No post";
  axios.post("/api/post", {
    title: title,
    description: "test",
    image: "test",
  });
}
const Card = styled.div`
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
const TCards= styled.h1`

background-color: #E3928B;
color:#EDE8DA;
font-size:40px;
border-radius: 5px;
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  border: 5px solid #ccc;


`;
interface IndexPageProps {
  post: Post[];
}

export default function Posts({ post }: IndexPageProps) {
  return (
    <div>
      {/* <Link href="/">
        <a>Home</a>
      </Link> */}
      < Header/>
      <TCards>Blog Posts</TCards>
      
      {post.map(({ title, description, image }, index) => (
        <Link key={title} href={`/posts/${index}`}>
          <Card>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={image} alt={"title"} />
          </Card>
        </Link>
      ))}
     
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
