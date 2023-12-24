import Post from "./post"

const ListadoPosts = ({posts}) => {
  return (
    <>  
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
    </>
  )
}

export default ListadoPosts
