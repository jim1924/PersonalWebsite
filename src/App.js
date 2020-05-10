import React, {Component} from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import data from './data/resumeData.json';
import Loader from './Components/Loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: data,
      loading: true,
    };
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.loading && <Loader />}
        <Header data={this.state.resumeData.main} />
        {/* <About data={this.state.resumeData.main}/>*/}
        {/* <Resume data={this.state.resumeData.resume}/>*/}
        {/* <Portfolio data={this.state.resumeData.portfolio}/>*/}
        {/* <Testimonials data={this.state.resumeData.testimonials}/>*/}
        {/* <Contact data={this.state.resumeData.main}/>*/}
        {/* <Footer data={this.state.resumeData.main}/>*/}
      </div>
    );
  }
}

export default App;
