import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './NetflixCarousel.css'

import slide1 from '../../assets/batman.jpg'
import slide2 from '../../assets/adamproject.jpg'
import slide3 from '../../assets/myfault.jpg'
import slide4 from '../../assets/uncharted.jpg'
import slide5 from '../../assets/grayman.jpg'
import slide6 from '../../assets/blade.jpg'
import slide7 from '../../assets/mi7.jpg'

function ExampleCarouselImage({ src, alt }) {
  return (
    <img
      className="d-block w-100"
      src={src}
      alt={alt}
      style={{ height: 650, objectFit: 'cover', display: 'block' }}
      onError={(e) => {
        e.currentTarget.onerror = null
        e.currentTarget.src = 'https://via.placeholder.com/1200x400?text=No+Image'
      }}
    />
  )
}

function NetflixCarousel() {
  return (
    <Carousel controls={true} indicators={true}>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage src={slide1} alt="Batman" />
            <div className='carousel-caption'>
                <h3>The Batman</h3>
                <p>When a sadistic serial killer begins murdering key political figures in Gotham, the Batman is forced to investigate the city's hidden corruption and question his family's involvement.</p>
            </div>
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <ExampleCarouselImage src={slide2} alt="The Adam Project" />
            <div className='carousel-caption'>
                <h3>The Adam Project</h3>
                <p>After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self for a mission to save the future.</p>
            </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage src={slide3} alt="My Fault" />
            <div className='carousel-caption'>
                <h3>My Fault</h3>
                <p>Noah has to leave her town, boyfriend and friends behind and move into the mansion of her mother's new rich husband. There she meets Nick, her new stepbrother. They fall madly in love in secret.</p>
            </div>
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <ExampleCarouselImage src={slide4} alt="Uncharted" />
            <div className='carousel-caption'>
                <h3>Uncharted</h3>
                <p>Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor "Sully" Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.</p>
            </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage src={slide5} alt="The Gray Man" />
            <div className='carousel-caption'>
                <h3>The Gray Man</h3>
                <p>When the CIA's most skilled operative, whose true identity is known to none, accidentally uncovers dark agency secrets, a psychopathic former colleague puts a bounty on his head, setting off a global manhunt by international assassins.</p>
            </div>
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <ExampleCarouselImage src={slide6} alt="Blade Runner 2049" />
            <div className='carousel-caption'>
                <h3>Blade Runner 2049</h3>
                <p>Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.</p>
            </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage src={slide7} alt="Mission: Impossible – The Final Reckoning" />
            <div className='carousel-caption'>
                <h3>Mission: Impossible – The Final Reckoning</h3>
                <p>Hunt and the IMF pursue a dangerous AI called the Entity that's infiltrated global intelligence. With governments and a figure from his past in pursuit, Hunt races to stop it from forever changing the world.</p>
            </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default NetflixCarousel
