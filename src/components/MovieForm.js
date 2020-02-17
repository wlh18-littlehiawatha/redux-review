import React, { Component } from 'react'
import styles from './styles'

class MovieForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      poster: '',
      westenscale: null,
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
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
            name="westenscale"
            placeholder="Westenscale Rating"
            onChange={this.handleChange}
          />
          <button type="submit" style={styles.formButton}>
            NEXT
          </button>
        </form>
      </div>
    )
  }
}
export default MovieForm
