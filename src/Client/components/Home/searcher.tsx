import { useNavigate } from 'react-router-dom'; // Import useNavigate htmlFor navigation
// import {Select} from 'antd';
import { ProductOutlined } from "@ant-design/icons";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// const { Option } = Select;

// const swipeData = {
//   swipes: {
//     Swipe: [
//       { name: 'All-Products', image: 'src/Client/assets/All-Products.png', path: '/products' },
//       { name: 'Engine-Oil', image: 'src/Client/assets/engine-oil.png', path: '/oil-lubricants' },
//       { name: 'Motor-Oil', image: 'src/Client/assets/oil.png', path: '/oil-lubricants' },
//       { name: 'G10-Coolants', image: 'src/Client/assets/g10.png', path: '/coolants' },
//       { name: 'G11-Coolants', image: 'src/Client/assets/g11.png', path: '/coolants' },
//       { name: 'G12-Coolants', image: 'src/Client/assets/g12.png', path: '/coolants' },
//     ],
//   }
// };

const Searcher = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/about');
  };

  return (
    <div className="searcher-container" id='home'>
      <div className='forum-open'>
      <div className='Greet'>
      <ProductOutlined />      
      <button className='buttons' onClick={handleNavigation}>Explore About Us !</button>
      </div>
    </div>
      <div id="carousels">
        <div className="containers">
        <input className='inputs' type="radio" name="slider" id="s1" defaultChecked></input>
        <input className='inputs' type="radio" name="slider" id="s2"></input>
        <input className='inputs' type="radio" name="slider" id="s3"></input>
        <input className='inputs' type="radio" name="slider" id="s4"></input>
        <input className='inputs' type="radio" name="slider" id="s5"></input>
        <div className="cards">
            <label htmlFor="s1" id="slide1">
                <div className="card">
                          <div className="image">
                            <img src="src\Client\assets\All-Products.png" alt="Nike SuperRep Go"></img>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                          </div>
                        <div className="infos">
                            {/* <span className="name">Nike SuperRep Go</span> */}
                            <span className="lorem">Lorem ipsum lorem dolor sit amet</span>
                            <a href="/events" className="btn-details">OUR EVENTS</a>
                            <div className="actions">
                                <i className="fa fa-shopping-cart"></i>
                                <i className="fa fa-heart"></i>
                                <i className="fa fa-bookmark"></i>
                                <i className="fa fa-share"></i>
                            </div>
                        </div>
                </div>
            </label>

            <label htmlFor="s2" id="slide2">
                <div className="card">
                          <div className="image">
                            <img src="src\Client\assets\g12.png" alt="Nike SuperRep Go"></img>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                          </div>
                        <div className="infos">
                            {/* <span className="name">Nike SuperRep Go</span> */}
                            <span className="lorem">Lorem ipsum lorem dolor sit amet</span>

                            <a href="/events" className="btn-details">OUR EVENTS</a>
                            <div className="actions">
                                <i className="fa fa-shopping-cart"></i>
                                <i className="fa fa-heart"></i>
                                <i className="fa fa-bookmark"></i>
                                <i className="fa fa-share"></i>
                            </div>
                        </div>
                </div>
            </label>

            <label htmlFor="s3" id="slide3">
                <div className="card">
                          <div className="image">
                            <img src="src\Client\assets\g11.png" alt="Nike SuperRep Go"></img>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                          </div>
                        <div className="infos">
                            {/* <span className="name">Nike SuperRep Go</span> */}
                            <span className="lorem">Lorem ipsum lorem dolor sit amet</span> 

                            <a href="/events" className="btn-details">OUR EVENTS</a>
                            <div className="actions">
                                <i className="fa fa-shopping-cart"></i>
                                <i className="fa fa-heart"></i>
                                <i className="fa fa-bookmark"></i>
                                <i className="fa fa-share"></i>
                            </div>
                        </div>
                </div>
            </label>

            <label htmlFor="s4" id="slide4">
                <div className="card">
                          <div className="image">
                            <img src="src\Client\assets\g10.png" alt="Nike SuperRep Go"></img>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                          </div>
                        <div className="infos">
                            {/* <span className="name">Nike SuperRep Go</span>*/}
                            <span className="lorem">Lorem ipsum lorem dolor sit amet</span> 

                            <a href="/events" className="btn-details">OUR EVENTS</a>
                            <div className="actions">
                                <i className="fa fa-shopping-cart"></i>
                                <i className="fa fa-heart"></i>
                                <i className="fa fa-bookmark"></i>
                                <i className="fa fa-share"></i>
                            </div>
                        </div>
                </div>
            </label>

            <label htmlFor="s5" id="slide5">
                <div className="card">
                          <div className="image">
                            <img src="src\Client\assets\engine-oil.png" alt="Nike SuperRep Go"></img>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                          </div>
                        <div className="infos">
                            {/* <span className="name">Nike SuperRep Go</span>*/}
                            <span className="lorem">Lorem ipsum lorem dolor sit amet</span>

                            <a href="/events" className="btn-details">OUR EVENTS</a>
                            <div className="actions">
                                <i className="fa fa-shopping-cart"></i>
                                <i className="fa fa-heart"></i>
                                <i className="fa fa-bookmark"></i>
                                <i className="fa fa-share"></i>
                            </div>
                        </div>
                </div>
            </label>

        </div>
    </div>
    </div>
    </div>
  );
};

export default Searcher;
