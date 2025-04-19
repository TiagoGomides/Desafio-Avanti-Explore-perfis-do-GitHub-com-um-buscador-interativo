type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

import { useState } from "react";
import { BsSearch } from "react-icons/bs"


const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("");

    return (
        <section>
            <input type="text"
                placeholder="Digite um usuário do Github"
                onChange={(e) => setUserName(e.target.value)} />
            <button onClick={()=> loadUser(userName)}>
                <BsSearch />
            </button>
        </section>
    )
}

export default Search;