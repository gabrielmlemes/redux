import styles from "./home.module.css";
import { Header } from "../../components/header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAddress } from "../../redux/user/slice";

export function Home() {
  const dispatch = useDispatch()
  const { user } = useSelector((rootReducer) => rootReducer.user);
  console.log(user);

  function handleDeleteAddress() {
    dispatch(deleteAddress({
      address: null
    }))
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Login
          </Link>
          <Link to="/painel" className={styles.link}>
            Painel
          </Link>
          <Link to="/address" className={styles.link}>
            Meus endereços
          </Link>
        </nav>

        <main className={styles.content}>
          <div className={styles.message}>
            <h1 className={styles.title}>
              Olá {user ? user.name : "Visitante"}, bem vindo!
            </h1>

            {user && <span>Email: {user.email}</span>}

            {user && user.address && (
              <>
                <strong className={styles.addressLabel}>Endereço atual:</strong>
                <div className={styles.address}>
                  <p>{user.address.addressName}, nº {user.address.addressNumber}</p>

                  <button onClick={handleDeleteAddress}>
                    Deletar endereço
                  </button>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
