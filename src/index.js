import React from 'react'
import PropTypes from 'prop-types'
import './Index.css'

export default class ParallaxCard extends React.Component {
  static propTypes = {
    layers: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  state = {
    rootElemWidth: 0,
    rootElemHeight: 0,
    isOnHover: false,
    container: {},
    shine: {},
    layers: []
  }

  componentDidMount = () => {
    if (!this.props.isStatic) {
      this.setState({
        rootElemWidth:
          this.node.clientWidth ||
          this.node.offsetWidth ||
          this.node.scrollWidth,
        rootElemHeight:
          this.node.clientHeight ||
          this.node.offsetHeight ||
          this.node.scrollHeight
      })
    }
  }

  handleMove = ({ pageX, pageY }) => {
    const layerCount = this.props.layers.length
    const { rootElemWidth, rootElemHeight } = this.state
    const bodyScrollTop =
      document.body.scrollTop ||
      document.getElementsByTagName('html')[0].scrollTop
    const bodyScrollLeft = document.body.scrollLeft
    const offsets = this.node.getBoundingClientRect()
    const wMultiple = 320 / rootElemWidth
    const offsetX =
      0.52 - (pageX - offsets.left - bodyScrollLeft) / rootElemWidth
    const offsetY =
      0.52 - (pageY - offsets.top - bodyScrollTop) / rootElemHeight
    const dy = pageY - offsets.top - bodyScrollTop - rootElemHeight / 2
    const dx = pageX - offsets.left - bodyScrollLeft - rootElemWidth / 2
    const yRotate = (offsetX - dx) * (0.07 * wMultiple)
    const xRotate = (dy - offsetY) * (0.1 * wMultiple)
    const arad = Math.atan2(dy, dx)
    const rawAngle = (arad * 180) / Math.PI - 90
    const angle = rawAngle < 0 ? rawAngle + 360 : rawAngle

    this.setState({
      container: {
        transform: `rotateX(${xRotate}deg) rotateY(${yRotate}deg) ${
          this.state.isOnHover ? ' scale3d(1.07,1.07,1.07)' : ''
        }`
      },
      shine: {
        background: `linear-gradient(${angle}deg, rgba(255, 255, 255, ${
          ((pageY - offsets.top - bodyScrollTop) / rootElemHeight) * 0.4
        }) 0%, rgba(255, 255, 255, 0) 80%)`,
        transform: `translateX(${offsetX * layerCount - 0.1}px) translateY(${
          offsetY * layerCount - 0.1
        }px)`
      },
      layers: this.props.layers.map((_, idx) => ({
        transform: `translateX(${
          offsetX * (layerCount - idx) * ((idx * 2.5) / wMultiple)
        }px) translateY(${offsetY * layerCount * ((idx * 2.5) / wMultiple)}px)`
      }))
    })
  }

  handleTouchMove = (evt) => {
    evt.preventDefault()
    const { pageX, pageY } = evt.touches[0]
    this.handleMove({ pageX, pageY })
  }

  handleEnter = () => {
    this.setState({ isOnHover: true })
  }

  handleLeave = () => {
    this.setState({
      isOnHover: false,
      container: {},
      shine: {},
      layers: []
    })
  }

  renderLayers = () => {
    return (
      <div
        className='parallax-card-layers'
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: '20px',
          overflow: 'hidden',
          transformStyle: 'preserve-3d',
          zIndex: '2'
        }}
      >
        {this.props.layers &&
          this.props.layers.map((imgSrc, idx) => {
            const layerIndex = idx
            return (
              <div
                style={{
                  position: 'absolute',
                  width: '104%',
                  height: '104%',
                  top: '-2%',
                  left: '-2%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundColor: 'transparent',
                  backgroundSize: 'cover',
                  transition: 'all 0.1s ease-out',
                  zIndex: '4',
                  backgroundImage: `url(${imgSrc})`,
                  ...(this.state.layers[idx] ? this.state.layers[idx] : {})
                }}
                className='parallax-card-rendered-layer'
                key={`layer-${layerIndex}`}
              />
            )
          })}
      </div>
    )
  }

  render() {
    return (
      <div
        style={{
          margin: '20px',
          borderRadius: '20px',
          transformStyle: 'preserve-3d',
          WebkitTapHighlightColor: 'rgba(#000, 0)',
          position: 'relative',
          minWidth: '350px',
          height: '200px',
          cursor: 'pointer',
          transform: `perspective(${this.state.rootElemWidth * 3}px)`,
          zIndex: this.state.isOnHover ? '9' : 'unset'
        }}
        onMouseMove={this.handleMove}
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
        onTouchMove={this.handleTouchMove}
        onTouchStart={this.handleEnter}
        onTouchEnd={this.handleLeave}
        className='parallax-card'
        ref={(node) => {
          this.node = node
        }}
      >
        <div
          className='parallax-card-container'
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            transition: 'all 0.2s ease-out',
            ...this.state.container
          }}
        >
          <div
            className='parallax-card-shadow'
            style={{
              position: 'absolute',
              top: '5%',
              left: '5%',
              width: '90%',
              height: '90%',
              transition: 'all 0.2s ease-out',
              zIndex: '0',
              boxShadow: this.state.isOnHover
                ? '0 45px 100px rgba(14, 21, 47, 0.4), 0 16px 40px rgba(14, 21, 47, 0.4)'
                : '0 8px 30px rgba(14, 21, 47, 0.6)'
            }}
          />
          <div
            className='parallax-card-shine'
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              borderRadius: '20px',
              background:
                'linear-gradient(135deg,rgba(255, 255, 255, 0.25) 0%,rgba(255, 255, 255, 0) 60%)',
              zIndex: '8',
              ...this.state.shine
            }}
          />
          {this.renderLayers()}
        </div>
      </div>
    )
  }
}
