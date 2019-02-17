import React, { Component } from 'react'
import Slider from 'react-slick'

import './Carousel.css'
import Quote from '../Quote'

// TODO: maybe make the font be in contrast with image colors ??

const imagesImports = [
  import('../../assets/carousel/christin-hume-482925-unsplash.jpg'),
  import('../../assets/carousel/daria-nepriakhina-474558-unsplash.jpg'),
  import('../../assets/carousel/eugenio-mazzone-190204-unsplash.jpg'),
  import('../../assets/carousel/giammarco-boscaro-380903-unsplash.jpg'),
  import('../../assets/carousel/jason-wong-502099-unsplash.jpg'),
  import('../../assets/carousel/paul-schafer-787418-unsplash.jpg'),
  import('../../assets/carousel/rawpixel-550994-unsplash.jpg'),
  import('../../assets/carousel/susan-yin-647448-unsplash.jpg'),
  import('../../assets/carousel/sylvia-yang-409493-unsplash.jpg'),
  import('../../assets/carousel/alireza-attari-588599-unsplash.jpg'),
  import('../../assets/carousel/patrick-tomasso-71909-unsplash.jpg'),
  import('../../assets/carousel/radu-marcusu-498248-unsplash.jpg'),
  import('../../assets/carousel/dmitri-popov-441562-unsplash.jpg'),
  import('../../assets/carousel/chuttersnap-348302-unsplash.jpg'),
]

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      settings: {
        dots: false,
        autoplay: true,
        speed: 2000,
        arrows: false,
      },
      imageStyle: {
        maxHeight: '50em',
        margin: 'auto',
      }
    }
  }

  componentDidMount() {
    const importedImages = []
    Promise.all(imagesImports).then(imagesImportsResolved => {
      imagesImportsResolved.forEach(image => {
        importedImages.push(image.default)
      })
      this.setState({ images: importedImages })
    })
  }

  render() {
    const { settings, images, imageStyle } = this.state
    return (
      <div className="container">
        <Quote />
        <Slider { ...settings }>
          {images.map((img, index) => (
            <div key={index}>
              <img style={imageStyle} src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

export default Carousel
