import { GetServerSidePropsResult } from "next";
import { getPost, Post } from "../../services/data";
import Link from "next/link";
import { useRouter } from "next/router";

interface IndexPageProps {
  post: Post[];
}

export default function PostDetails({ post }: IndexPageProps) {
  const router = useRouter();
  const id = parseInt(router.query.id);
  console.log(id);
  return (
    <div>
      {/* lkl */}
      <h1>{post[id].title}</h1>
      <p>{post[id].description}</p>
      <img src={post[id].image} alt={"title"} />
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
