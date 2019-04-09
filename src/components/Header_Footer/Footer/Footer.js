import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons/faCompass';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

class Footer extends Component {
  render() {
    return (
      <footer className="bck_b_dark">
        <div className="container">
            <div className="logo">
              WAVES
            </div>

            <div className="wrapper">

                <div className="left">
                    <h2>Contact information</h2>

                    <div className="business_nfo">
                        <div className="tag">
                            <FontAwesomeIcon 
                              icon={faCompass}
                              className="icon"
                            />

                            <div className="nfo">
                                <div> Adress </div>
                                <div> 12345 </div>
                            </div>
                        </div>

                        <div className="tag">
                            <FontAwesomeIcon 
                              icon={faPhone}
                              className="icon"
                            />

                            <div className="nfo">
                                <div> Phone </div>
                                <div> 12345-5688 </div>
                            </div>
                        </div>

                        <div className="tag">
                            <FontAwesomeIcon 
                              icon={faClock}
                              className="icon"
                            />

                            <div className="nfo">
                                <div> Working hours </div>
                                <div> 12345-5688 </div>
                            </div>
                        </div>

                        <div className="tag">
                            <FontAwesomeIcon 
                              icon={faEnvelope}
                              className="icon"
                            />

                            <div className="nfo">
                                <div> Email </div>
                                <div> onesh7@yandex.ru </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right">
                  <h2>Be the first to know </h2>

                  <div>
                      <div>
                        Get the latest info
                      </div>
                  </div>
                </div>

            </div>
        </div>
      </footer>
    )
  }
}

export default Footer;