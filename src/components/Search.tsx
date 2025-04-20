type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs"
import styles from './Search.module.css'

const Search = ({ loadUser }: SearchProps) => {
    const [userName, setUserName] = useState("");
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            loadUser(userName);
        }
    }


    return (
        <section className={styles.container}>
            <input type="text"
                placeholder="Digite um usuário do Github"
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={() => loadUser(userName)}>
                <BsSearch />
            </button>
        </section>
    )
}

export default Search;