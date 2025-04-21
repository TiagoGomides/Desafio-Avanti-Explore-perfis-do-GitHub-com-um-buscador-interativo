import styles from "./Error.module.css"

const Error = () => {
    return (
        <section className={styles.container}>
            <p>
                Nenhum perfil foi encontrado com esse nome de usuário.
            </p>

            <p>
            Tente novamente
            </p>
        </section>
    )
}

export default Error;
