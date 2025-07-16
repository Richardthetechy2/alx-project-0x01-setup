import Header from "@/components/layout/Header";
import { PostPageProps, PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";


const Posts: React.FC<PostPageProps> = ({ posts }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold">Post Content</h1>
                    <button className="bg-blue-700 text-white px-4 py-2 rounded-full">Add Post</button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {
                        posts?.map(({ userId, id, title, body }: PostProps, key: number) => (
                            <PostCard userId={userId} id={id} title={title} body={body} key={key} />
                        ))
                    }
                </div>
            </main>
        </div >
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()
    return {
        props: {
            posts
        }
    }
}
export default Posts;