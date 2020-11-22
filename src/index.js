import React from 'react'
import PropTypes from 'prop-types'
import './Index.css'

export default class ParallaxCard extends React.Component {
  static propTypes = {
    isStatic: PropTypes.bool,
    borderRadius: PropTypes.string,
    shineStrength: PropTypes.number,
    backgroundColor: PropTypes.string,
    cursorPointer: PropTypes.bool
  }

  static defaultProps = {
    isStatic: false,
    borderRadius: '20px',
    shineStrength: 0.4,
    backgroundColor: 'white',
    cursorPointer: true
  }

  state = {
    rootElemWidth: 0,
    rootElemHeight: 0,
    isOnHover: false,
    container: {},
    shine: {},
    layers: this.props.children
      ? this.props.children.length
        ? this.props.children
        : [this.props.children]
      : [React.createElement('div', { style: this.props.style }, [])],
    layersTransform: []
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
    const layerCount = this.state.layers ? this.state.layers.length : 1
    const { rootElemWidth, rootElemHeight } = this.state
    const bodyScrollTop =
      document.body.scrollTop ||
      document.getElementsByTagName('html')[0].scrollTop
    const bodyScrollLeft = document.body.scrollLeft
    const offsets = this.node.getBoundingClientRect()
    const wMultiple = 320 / rootElemWidth
    const multiple = wMultiple * 0.07
    const offsetX =
      0.52 - (pageX - offsets.left - bodyScrollLeft) / rootElemWidth
    const offsetY =
      0.52 - (pageY - offsets.top - bodyScrollTop) / rootElemHeight
    const dy = pageY - offsets.top - bodyScrollTop - rootElemHeight / 2
    const dx = pageX - offsets.left - bodyScrollLeft - rootElemWidth / 2
    const yRotate = (offsetX - dx) * multiple
    const xRotate =
      (dy - offsetY) * (Math.min(offsets.width / offsets.height, 1) * multiple)
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
          ((pageY - offsets.top - bodyScrollTop) / rootElemHeight) *
          this.props.shineStrength
        }) 0%, rgba(255, 255, 255, 0) 80%)`,
        transform: `translateX(${offsetX * layerCount - 0.1}px) translateY(${
          offsetY * layerCount - 0.1
        }px)`
      },
      layersTransform: this.state.layers
        ? this.state.layers.map((_, idx) => ({
            transform: `translateX(${
              offsetX * layerCount * ((idx * 1) / wMultiple)
            }px) translateY(${
              offsetY * layerCount * ((idx * 1) / wMultiple)
            }px)`
          }))
        : this.props.children
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
      layersTransform: []
    })
  }

  renderLayers = () => {
    return (
      <div
        className='parallax-card-layers'
        style={{
          position: 'relative',
          borderRadius: this.props.borderRadius,
          overflow: 'hidden',
          transformStyle: 'preserve-3d',
          backgroundColor: this.props.backgroundColor,
          zIndex: '2',
          ...this.props.style
        }}
      >
        {this.state.layersTransform &&
          React.Children.map(this.state.layers, (child, idx) =>
            React.cloneElement(child, {
              style: {
                ...child.props.style,
                transition: 'all 0.1s ease-out',
                zIndex: '4',
                ...(this.state.layersTransform[idx]
                  ? this.state.layersTransform[idx]
                  : {})
              }
            })
          )}
      </div>
    )
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div
          onClick={this.props.onClick}
          style={{
            borderRadius: this.props.borderRadius,
            transformStyle: 'preserve-3d',
            WebkitTapHighlightColor: 'rgba(#000, 0)',
            cursor: this.props.cursorPointer ? 'pointer' : false,
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
              borderRadius: this.props.borderRadius,
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
                right: '5%',
                bottom: '5%',
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
                borderRadius: this.props.borderRadius,
                background: `linear-gradient(135deg,rgba(255, 255, 255, ${
                  this.props.shineStrength / 1.6
                }) 0%,rgba(255, 255, 255, 0) 60%)`,
                zIndex: '8',
                ...this.state.shine
              }}
            />
            {this.renderLayers()}
          </div>
        </div>
      </div>
    )
  }
}
