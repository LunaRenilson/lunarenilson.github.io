import React from 'react';

const ErrorPage = () => (
     <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#f8d7da',
          color: '#721c24'
     }}>
          <h1>Erro</h1>
          <p>Ocorreu um erro. Por favor, tente novamente mais tarde.</p>
     </div>
);

export default ErrorPage;