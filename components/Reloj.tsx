'use client';

import React, { Component } from 'react';

interface RelojState {
  fecha: string;
}

class Reloj extends Component<{}, RelojState> {
  intervalID!: NodeJS.Timeout;
  constructor(props: {}) {
    super(props);
    this.state = {
      fecha: new Date().toLocaleString(),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({
        fecha: new Date().toLocaleString(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  render() {
    const { fecha } = this.state;
    const horaActual = fecha.split(',')[1];
    return (
      <div>
        <p>La hora actual es: {horaActual}</p>
      </div>
    );
  }
}

export default Reloj;
