import { GetServerSidePropsResult } from "next";
import { getPost, Post } from "../../services/data";
import Link from "next/link";
import { useRouter } from "next/router";
import {motion} from "framer-motion";
import styled from "styled-components";
import { Header } from "../../components/Header";

const CardDetails = styled.div`
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
} `;
interface IndexPageProps {
  post: Post[];
}

export default function PostDetails({ post }: IndexPageProps) {
  const router = useRouter();
  const id = parseInt(router.query.id);
  console.log(id);
  return (
<div>
    <Header />
    <CardDetails>
   
      <h1>{post[id].title}</h1>
      <p>{post[id].description}</p>
      <img src={post[id].image} alt={"title"} />
    </CardDetails>
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
