import React from 'react'

const HomePage = () => {
  return (
    <div className="home-page-container">
    
    <h1 className="text-center mb-3">
      Bienvenido a <strong>Happy Cake</strong>
    </h1>
    <p className="text-center">El lugar de los pasteles felices</p>
    
    <div className="image-container text-center">
      <img
        src="https://img.freepik.com/free-vector/cute-birthday-cake-party-cartoon-vector-icon-illustration-food-holiday-icon-concept-isolated-flat_138676-9070.jpg?w=740&t=st=1695847934~exp=1695848534~hmac=6f2384cbf160e068cc0f7f253f31cc8c3be526275e1596e678579c546d1e8209"
        alt="Cake"
        className="cake-image"
      />
    
    </div>
  </div>
  )
}

export default HomePage