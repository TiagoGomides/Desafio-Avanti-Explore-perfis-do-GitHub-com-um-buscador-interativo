import { UserProps } from "../types/user";
import React from "react";
import Search from "../components/Search";
import { useState } from "react";





const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);

    const loadUser = async (userName: string) => {

        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json();

        const {avatar_url, login, bio} = data;

        const userData: UserProps = {
            avatar_url,
            login,
            bio
        }

        setUser(userData)
    }

    return (
        <section>
            <Search loadUser={loadUser} />
            {user&& <p>{user.login}</p>}
        </section>
    )
}

export default Home;