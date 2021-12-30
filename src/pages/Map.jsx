import React, {Component} from 'react';
import mapboxGl from 'mapbox-gl';
import '../App.css'


export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxGl.accessToken = "pk.eyJ1Ijoid2FybG9ja3hkIiwiYSI6ImNreHBtMnY4bTJsN2wycHViMzBsNms4cXcifQ.8YOPkeWGfluy4JMqfMpSSg"

    this.map = new mapboxGl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.3056504, 59.9429126],
      zoom: 10,
    })
  }

  componentWillUnmount() {
    this.map.remove()
  }

  render() {
    return <div className='map-wrapper'>
      <div data-testid='map' className='map' ref={this.mapContainer}/>
    </div>
  }
}
