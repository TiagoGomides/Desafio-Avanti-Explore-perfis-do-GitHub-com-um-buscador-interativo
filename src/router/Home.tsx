import { UserProps } from "../types/user";
import  { useState } from "react";
import Search from "../components/Search";
import User from "../components/User";
import Error from "../components/Error";
import Loader from "../components/Loader"; 

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);
    setLoading(true); 

    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();

      if (res.status === 404) {
        setError(true);
        return;
      }

      const { avatar_url, login, bio } = data;

      const userData: UserProps = {
        avatar_url,
        login,
        bio,
      };

      setUser(userData);
    } catch (err) {
      console.error("Erro ao buscar usuário:", err);
      setError(true);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <section>
      <Search loadUser={loadUser} />
      {loading && <Loader />}
      {user && !loading && <User {...user} />}
      {error && !loading && <Error />}
    </section>
  );
};

export default Home;