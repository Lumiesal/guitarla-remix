import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server";
import ListadoPosts from "~/components/listado-posts";

export function meta(){
    return[
        {
        title: 'GuitaLA - Blog'
        }
    ]
}


export async function loader(){
  const posts = await getPosts()
  return posts.data
}

function Blog() {

  const posts = useLoaderData()

  return (
    <section className="blogs">
      <h2 className="heading">Blog</h2>
      <ListadoPosts
        posts={posts}
      />
    </section>
  )
}

export default Blog