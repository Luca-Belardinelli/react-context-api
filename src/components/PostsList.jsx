// IMPORTIAMO CONTEXT
import { useContext } from "react";
import CountContext from './../contexts/CountContext'

// CARD LISTATO
import PostCard from "./PostCard";

export default function PostsList() {

    // DESTRUTTURIAMO 
    const { post } = useContext(CountContext);

    return (
        <>
            {
                post.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </>
    );
}