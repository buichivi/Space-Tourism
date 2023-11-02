import { useState } from 'react'
import data from '../data'

const Technology = () => {
  const { technology  } = data
  const [curTechIndex, setCurTechIndex] = useState(0)

  return (
    <>
      <div className="bg technology-bg"></div>
      <section className="content">
        <div className="content__leftside">
          <h4 className="page-heading">
            <span>03</span>
            Space launch 101
          </h4>
          <div className="technology-wrap">
            <ul className="technology-list">
              {technology.map((techItem, index) => (
                <li 
                  key={index} 
                  className={`technology-item-icon ${curTechIndex === index ? 'active' : ''}`}
                  onClick={() => setCurTechIndex(index)}
                >{index + 1}</li>
              ))}
            </ul>
            <div className="technology-detail">
              <h4>The terminology</h4>
              <h1 className='technology-name'>{technology[curTechIndex].name}</h1>
              <p className="technology-description">{technology[curTechIndex].description}</p>
            </div>
          </div>
        </div>
        <div className="content__rightside">
          <picture>
            <source media="(max-width: 768px)" srcSet={technology[curTechIndex].images.landscape}/>
            <img className='technology-image' src={technology[curTechIndex].images.portrait} />
          </picture>
        </div>
      </section>
    </>
  )
}

export default Technology