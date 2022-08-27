import React from 'react'

export const Campaign = () => {
  return (
    <div
      style={{
        background: '#2ab04e',
        padding: '0.5rem',
        textAlign: 'center',
        fontSize: '0.9rem',
        color: '#fff',
      }}
    >
      <p>
        <strong>
          👋 Velkommen til Meneto - den mindre virksomheds bogholder.{' '}
        </strong>{' '}
        Klik her for at spare{' '}
        <a
          href=''
          target='_blank'
          rel='noreferrer'
          style={{ textDecoration: 'underline' }}
        >
          10% på det første år.
        </a>
      </p>
    </div>
  )
}
