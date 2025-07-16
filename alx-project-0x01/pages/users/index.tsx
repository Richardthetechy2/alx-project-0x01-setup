import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserPageProps, UserProps, UserData } from "@/interfaces";
import { useState } from "react";
import UserModal from "@/components/common/UserModal";

const Users: React.FC<UserPageProps> = ({ posts }) => {
    const [user, setUser] = useState<UserData | null>(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleAddUser = (newUser: UserData) => {
        // Simulate adding user
        setUser({ ...newUser, id: posts.length + 1 });
        console.log("Added User:", newUser);
    };

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="flex justify-between mb-4">
                    <h1 className="text-2xl font-semibold">Users</h1>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
                    >
                        Add User
                    </button>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {posts.map(
                        (
                            { id, name, username, email, phone, website, address, company }: UserProps,
                            key: number
                        ) => (
                            <UserCard
                                key={key}
                                id={id}
                                name={name}
                                username={username}
                                email={email}
                                phone={phone}
                                website={website}
                                address={address}
                                company={company}
                            />
                        )
                    )}
                </div>
            </main>

            {isModalOpen && (
                <UserModal
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleAddUser}
                />
            )}
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await response.json();
    return {
        props: {
            posts,
        },
    };
}

export default Users;
