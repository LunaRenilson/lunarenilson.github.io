const Contact = () => (
     <div style={{ maxWidth: 500, margin: "40px auto", padding: 24, border: "1px solid #ddd", borderRadius: 8 }}>
          <h1>Contato</h1>
          <p>Entre em contato comigo:</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
               <li>
                    <strong>Email:</strong> <a href="mailto:seuemail@exemplo.com">seuemail@exemplo.com</a>
               </li>
               <li>
                    <strong>Telefone:</strong> (99) 99999-9999
               </li>
               <li>
                    <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">linkedin.com/in/seu-perfil</a>
               </li>
          </ul>
     </div>
);

export default Contact;