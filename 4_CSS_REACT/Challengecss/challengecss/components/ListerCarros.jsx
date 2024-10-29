import styles from './Challenge.module.css'

const ListerCarros = ({Modelo, km, color}) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
        <ul className={styles.ulStyle}>
            <li className={styles.liStyle}>Modelo: {Modelo}</li>
            <li className={styles.liStyle}>KM: {km}</li>
            <li className={styles.liStyle}>Cor: {color}</li>
        </ul>
    </div>
  );
};

export default ListerCarros;
