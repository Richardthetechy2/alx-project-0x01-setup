import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserPageProps } from "@/interfaces";
import { UserProps } from "@/interfaces";

const Users: React.FC<UserPageProps> = ({ posts }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="grid grid-cols-4 gap-4">
                {
                    posts?.map(({ id, name, username, email, phone, website, address, company }: UserProps, key: number) => (
                        <UserCard
                            username={username} id={id}
                            name={name} email={email}
                            phone={phone} website={website}
                            address={address} company={company}
                            key={key} />
                    ))
                }
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()
    return {
        props: {
            posts
        }
    }
}
export default Users;