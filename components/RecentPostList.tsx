import Image from "next/image";



export type RecentPost = {
    image: string;
    title: string;
    date: string;
    link?: string;
};

interface RecentPostListProps {
    posts: RecentPost[];
}

const RecentPostList: React.FC<RecentPostListProps> = ({ posts }) => (
    <ul className="de-bloglist-type-1">
        {posts.map((post, idx) => (
            <li key={idx}>
                <div className="d-image">
                    <Image src={post.image} width={80} height={80} alt={post.title} />
                </div>
                <div className="d-content">
                    <a href={post.link || "#"}><h4>{post.title}</h4></a>
                    <div className="d-date">{post.date}</div>
                </div>
            </li>
        ))}
    </ul>
);

export default RecentPostList;

