

export default function PostCard(props) {

    // destructuring dell'oggetto props
    const { post } = props;


    return (
        <>
            {
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <img src={post.image} alt={post.title} />
                    <p>{post.content}</p>
                    <p>{post.tags}</p>
                </div >
            }
        </>
    );
}