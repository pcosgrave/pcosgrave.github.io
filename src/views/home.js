import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Item from '../components/item'
import Client from '../components/client'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Agency modern template</title>
        <meta property="og:title" content="Agency modern template" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <header id="About" className="home-about">
        <div className="home-header">
          <h1 className="home-title">Design the change you wanna see</h1>
          <p className="home-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod consectetur tempor incididunt.
          </p>
        </div>
        <div className="home-image">
          <video
            src
            poster="/video-preview-1500w.png"
            className="home-video"
          ></video>
        </div>
        <div className="home-description1">
          <div className="home-content">
            <div className="home-text">
              <p className="home-paragraph">
                We are a team of aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat.
              </p>
              <p className="home-paragraph1">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div id="Projects" className="home-projects">
        <div className="home-projects1">
          <div className="home-header1">
            <h2 className="home-title1 heading">
              <span>Projects</span>
              <br></br>
            </h2>
          </div>
          <div className="home-row">
            <span className="home-text03">2024</span>
            <div className="home-list">
              <Item
                title="Prehistoric Planit"
                tags="Immersive Linear content"
              ></Item>
            </div>
          </div>
          <div className="home-row01">
            <span className="home-text04">2020</span>
            <div className="home-list01">
              <Item
                title="UI Toolkit"
                tags="Next itteration of Unity's UI"
              ></Item>
            </div>
          </div>
          <div className="home-row02">
            <span className="home-text05">2017</span>
            <div className="home-list02">
              <Item title="Text Mesh Pro" tags="Custom Text System"></Item>
            </div>
          </div>
          <div className="home-row03">
            <span className="home-text06">2014</span>
            <div className="home-list03">
              <Item title="uGUI" tags="Custom UI System"></Item>
            </div>
          </div>
          <div className="home-row04">
            <span className="home-text07">2013</span>
            <div className="home-list04">
              <Item title="Console Window" tags="Workflow Improvements"></Item>
            </div>
          </div>
          <div className="home-row05">
            <span className="home-text08">2012</span>
            <div className="home-list05">
              <Item title="Windward" tags="Pirate RPG/ Open world"></Item>
            </div>
          </div>
          <div className="home-row06">
            <span className="home-text09">2011</span>
            <div className="home-list06">
              <Item title="Texas Poker For Prizes" tags="Gambling/ Card"></Item>
              <Item tags="Shooter" title="Modern Combat 2"></Item>
              <Item tags="Racing" title="Asphalt 7: Heat"></Item>
            </div>
          </div>
          <div className="home-row07">
            <span className="home-text10">
              <span className="home-text11">2009</span>
              <br></br>
            </span>
            <div className="home-list07">
              <Item
                title="Defense of the Citadal"
                tags="Strategy/ Sandbox"
              ></Item>
              <Item title="Mazin Hamsters" tags="Children / Open world"></Item>
            </div>
          </div>
          <div className="home-row08">
            <span className="home-text13">
              <span className="home-text14">2008</span>
              <br></br>
              <br></br>
            </span>
            <div className="home-list08">
              <Item title="Too Human" tags="Action RPG/ Shooter"></Item>
            </div>
          </div>
          <div className="home-row09">
            <span className="home-text17"></span>
            <div className="home-list09"></div>
          </div>
          <div className="home-row10">
            <span className="home-text18"></span>
            <div className="home-list10"></div>
          </div>
          <div className="home-row11">
            <span className="home-text19"></span>
            <div className="home-list11"></div>
          </div>
          <div className="home-row12">
            <span className="home-text20"></span>
            <div className="home-list12"></div>
          </div>
        </div>
        <div className="home-recomendations">
          <div className="home-header2">
            <h2 className="home-title2 heading">
              <span>Testimonials</span>
              <br></br>
            </h2>
          </div>
          <div className="home-grid">
            <div className="home-column">
              <Client
                avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvdHJhaXR8ZW58MHx8fHwxNjY5MDYxMjQx&amp;ixlib=rb-4.0.3&amp;h=200"
                mention="@zeng"
                rootClassName="client-root-class-name"
              ></Client>
              <Client
                quote="“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.“"
                author="Coco White"
                avatar="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                mention="@white_co"
                rootClassName="client-root-class-name1"
              ></Client>
            </div>
            <div className="home-column1">
              <Client
                quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                author="Jennifer Marle"
                avatar="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                mention="@motech"
              ></Client>
              <Client
                quote="“Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaduis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                author="Maria Martinez"
                avatar="https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                mention="@yorgu.official"
              ></Client>
            </div>
          </div>
        </div>
      </div>
      <header id="Contact" className="home-contact">
        <div className="home-header3">
          <h2 className="home-title3 heading">
            <span>Contact</span>
            <br></br>
          </h2>
        </div>
        <div className="home-forum">
          <form
            action='"https://formsubmit.co/philipjcosgrave@gmail.com"'
            method="POST"
            className="home-form"
          >
            <div className="home-container1">
              <span className="home-text25">Name*</span>
              <input
                type="text"
                required="true"
                name="name"
                className="input"
              />
              <span className="home-text26">Email*</span>
              <input
                type="email"
                required="true"
                name="email"
                className="input"
              />
              <span className="home-text27">Message*</span>
              <textarea
                required="true"
                name="content"
                className="home-textarea textarea"
              ></textarea>
              <button type="submit" className="home-button button">
                <span className="home-text28">
                  <span>SUBMIT</span>
                  <br></br>
                </span>
              </button>
            </div>
          </form>
        </div>
      </header>
      <Footer></Footer>
    </div>
  )
}

export default Home
