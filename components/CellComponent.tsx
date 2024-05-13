'use client'

import { Jupyter, Cell } from '@datalayer/jupyter-react';

export const CellComponent = () => {
  return (
    <>
      <div style={{fontSize: 20}}>Jupyter Cell in Next.js</div>
      <Jupyter
        jupyterServerHttpUrl="https://oss.datalayer.run/api/jupyter-kernels"
        jupyterServerWsUrl="wss://oss.datalayer.run/api/jupyter-kernels"
        jupyterToken="60c1661cc408f978c309d04157af55c9588ff9557c9380e4fb50785750703da6"
      >
        <Cell/>
    </Jupyter>
  </>
  )
}

export default CellComponent;
