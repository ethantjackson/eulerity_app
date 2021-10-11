import React from 'react';
import {
  AboutArea,
  AboutAreaContainer,
  AboutImg,
  AboutImgContainer,
} from './Components/About.style';
import Frito from './img/Frito.jpg';
import Pickles from './img/Pickles.jpg';
import Moose from './img/Moose.jpg';

const About = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m6 xl8'>
          <AboutAreaContainer height='50vh'>
            <AboutArea>
              <h3>
                <i className='material-icons'>pets</i>PetPix
              </h3>
              <p>
                With PetPix you can now find your favorite pet pictures and save
                them for later! We provide a curated list of pets for you to
                choose from, including names and short descriptions for each of
                them. Simply search or browse the pictures, select the ones you
                want and click the button to save them to your device.
              </p>
              <AboutImgContainer>
                <AboutImg src={Pickles} alt='pickles-img' />
                <AboutImg src={Moose} alt='moose-img' />
                <AboutImg src={Frito} alt='frito-img' />
              </AboutImgContainer>
            </AboutArea>
          </AboutAreaContainer>
        </div>
        <div className='col s12 m6 xl4'>
          <AboutAreaContainer>
            <AboutArea color='#d32f2f'>
              <h4>
                <i className='material-icons'>search</i>
                Find Pets
              </h4>
              <p>
                Use our search feature to find the pets you are looking for. You
                can filter pets by name or description.
              </p>
            </AboutArea>
          </AboutAreaContainer>
          <AboutAreaContainer>
            {/* <AboutArea color='#fbc02d'> */}
            <AboutArea color='#1976d2'>
              <h4>
                <i className='material-icons'>file_download</i>
                Download Pix
              </h4>
              <p>
                Once you find the pets you like, it is easy to download your
                pix. All you have to do is click the button!
              </p>
            </AboutArea>
          </AboutAreaContainer>
        </div>
        <div className='col s12'>
          <AboutAreaContainer>
            <AboutArea color='#9e9e9e'>
              <h4>
                <i className='material-icons'>person</i>About Me
              </h4>
              <p>
                Hi, my name is Ethan Jackson. This app was made using React, and
                I utilized Redux and Axios to implement the app's functionality
                as well as Styled Components, Materialize, and CSS flexbox to
                implement modern and responsive styling.
              </p>
            </AboutArea>
          </AboutAreaContainer>
        </div>
      </div>
    </div>
  );
};

export default About;
