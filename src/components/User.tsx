import { UserProps } from "../types/user";


const User = ({
    avatar_url,
    login,
    bio
}: UserProps) => {

    return (
        <section >
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {bio && (
                <p>{bio}</p>
            )
            }
        </section>
    )
}

export default User;