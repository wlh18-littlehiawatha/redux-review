import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setMovieInfo } from '../ducks/moviesReducer'
import styles from './styles'

class MovieForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      poster: '',
      rating: null,
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { title, poster, rating } = this.state

    this.props.setMovieInfo(title, poster, rating)

    this.props.history.push('/confirm')
  }

  render() {
    return (
      <div style={styles.container}>
        <p style={styles.containerHeading}>INPUT DETAILS</p>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <input
            style={styles.formInput}
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
          />
          <input
            style={styles.formInput}
            name="poster"
            placeholder="Poster URL"
            onChange={this.handleChange}
          />
          <input
            style={styles.formInput}
            name="rating"
            placeholder="rating Rating"
            onChange={this.handleChange}
            type="number"
            max={10}
            min={0}
          />
          <button type="submit" style={styles.formButton}>
            NEXT
          </button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { setMovieInfo }
)(MovieForm)
