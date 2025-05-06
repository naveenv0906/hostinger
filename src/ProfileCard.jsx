import React from 'react';

function ProfileCard() {
  return (
    <div style={{
      width: '300px',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#1e1e1e',
      color: 'white',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    }}>
      <img 
        src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_640.png" 
        alt="Profile" 
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          marginBottom: '15px'
        }}
      />
      <h2>Naveen</h2>
      <p>Web Developer</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
    </div>
  );
}

export default ProfileCard;