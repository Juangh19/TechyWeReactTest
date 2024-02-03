'use client';

import React, { Component } from 'react';

interface RelojState {
  fecha: string;
}

class RelojSCU extends Component<{}, RelojState> {
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
  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<RelojState>,
    nextContext: any
  ): boolean {
    const minutosActuales = new Date(this.state.fecha).getMinutes();
    const minutosProximos = new Date(nextState.fecha).getMinutes();
    return minutosActuales !== minutosProximos;
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

export default RelojSCU;
