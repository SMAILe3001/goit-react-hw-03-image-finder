import { Dna } from 'react-loader-spinner';
import CSS from './Loader.module.css';

export function Loader({ visible }) {
  return (
    <div className={CSS.div}>
      <Dna
        visible={visible}
        height="500"
        width="500"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}
