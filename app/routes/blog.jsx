import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";
import styles from '~/styles/blog.css'
import Post from "~/components/post";

export function meta(){
    return[
        {
        title: 'GuitaLA - Blog'
        }
    ]
}

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
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
    <section className="contenedor blog">
      <h2 className="heading">Blog</h2>
      {posts?.length &&(
          <div className='blog'>
            {posts.map( post =>(
              <Post
                key={post?.id}
                post={post?.attributes}
              />    
            ))}
          </div>
        )}
    </section>
  )
}

export default Blog