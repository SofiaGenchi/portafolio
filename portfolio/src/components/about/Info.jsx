import React from 'react';

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experiencia</h3>
            <span className="about__subtitle">1+ haciendo proyectos personales</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase about__icon'></i>
            <h3 className="about__title">Completos</h3>
            <span className="about__subtitle">4 + Proyectos</span>
        </div>
    </div>
  )
}

export default Info;