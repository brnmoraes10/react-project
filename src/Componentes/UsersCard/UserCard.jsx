import React from 'react';
import styles from './UserCard.module.css'; // Importamos los estilos del CSS Module

export default function UserCard({ user }) {
  // Si por alguna razón el user no llega, no renderizamos nada para evitar errores.
  if (!user) {
    return null;
  }

  // Desestructuramos la información para que sea más fácil de usar
  const { name, username, email, phone, website, company, address } = user;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.username}>@{username}</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Contacto</h3>
        <p className={styles.infoItem}>
          <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p className={styles.infoItem}>
          <strong>Teléfono:</strong> {phone}
        </p>
        <p className={styles.infoItem}>
          <strong>Sitio Web:</strong> <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a>
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Dirección</h3>
        <p className={styles.infoItem}>
          {address.street}, {address.suite}
        </p>
        <p className={styles.infoItem}>
          {address.city} (C.P. {address.zipcode})
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Compañía</h3>
        <p className={styles.infoItem}>
          <strong>Nombre:</strong> {company.name}
        </p>
        <p className={styles.infoItem}>
          <em>"{company.catchPhrase}"</em>
        </p>
      </div>
    </div>
  );
}