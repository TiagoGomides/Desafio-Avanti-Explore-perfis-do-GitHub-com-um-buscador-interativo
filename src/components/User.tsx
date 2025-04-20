import { UserProps } from "../types/user";
import styles from './User.module.css'


const User = ({
    avatar_url,
    login,
    bio
}: UserProps) => {

    return (
        <section className={styles.container}>
            <img src={avatar_url} alt={login} className={styles.img} />
            <div className={styles.content}>
                <h2>{login}</h2>
                {bio && (
                    <p>{bio}</p>
                )
                }
            </div>
        </section>
    )
}

export default User;