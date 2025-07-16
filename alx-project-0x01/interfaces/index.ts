export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export interface PostPageProps {
    posts: PostProps[];
}

export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: Address
    company: Company

}
interface Address {
    street: string
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Geo {
    lat: string;
    lng: string;
}
export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserPageProps {
    users: UserProps[]
}