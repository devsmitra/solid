import { createEffect, createSignal } from '../../../packages/solid/dist/dev';
import styles from './App.module.css';

function App() {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    console.log('count changed', count());
  });
  return (
    <div class={styles.App}>
      <h1>{count()}</h1>
      <button onClick={() => setCount(c => c + 1)}>Click {count()}</button>
    </div>
  );
}

export default App;
