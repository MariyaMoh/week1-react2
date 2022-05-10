// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { addPost, getPost } from "../../services/data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title, description, image } = req.body;
  addPost({ title, description, image });

  res.status(200).json({ post: getPost() });
}
