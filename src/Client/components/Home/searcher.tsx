import { useNavigate } from 'react-router-dom'; // Import useNavigate htmlFor navigation
// import {Select} from 'antd';
import { ProductOutlined } from "@ant-design/icons";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import allproducts from '../../assets/All-Products.png';
import g10 from '../../assets/g10.png';
import g11 from '../../assets/g11.png';
import g12 from '../../assets/g12.png';
import engineoil from '../../assets/engine-oil.png';


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
                            <img src={allproducts}></img>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                          </div>
                        <div className="infos">
                            {/* <span className="name">Nike SuperRep Go</span> */}
                            <span className="lorem">View More</span>
                            <a href="/events" className="btn-details">OUR EVENTS</a>
                        </div>
                </div>
            </label>

            <label htmlFor="s2" id="slide2">
                <div className="card">
                          <div className="image">
                            <img src={g12}></img>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                          </div>
                        <div className="infos">
                            {/* <span className="name">Nike SuperRep Go</span> */}
                            <span className="lorem">View More</span>

                            <a href="/oil-lubricants" className="btn-details">OUR PRODUCTS</a>
                        </div>
                </div>
            </label>

            <label htmlFor="s3" id="slide3">
                <div className="card">
                          <div className="image">
                            <img src={g11}></img>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                          </div>
                        <div className="infos">
                            {/* <span className="name">Nike SuperRep Go</span> */}
                            <span className="lorem">View More</span> 

                            <a href="/car-care" className="btn-details">OUR PRODUCTS</a>
                        </div>
                </div>
            </label>

            <label htmlFor="s4" id="slide4">
                <div className="card">
                          <div className="image">
                            <img src={g10}></img>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                          </div>
                        <div className="infos">
                            {/* <span className="name">Nike SuperRep Go</span>*/}
                            <span className="lorem">View More</span> 

                            <a href="/coolants" className="btn-details">OUR PRODUCTS</a>
                        </div>
                </div>
            </label>

            <label htmlFor="s5" id="slide5">
                <div className="card">
                          <div className="image">
                            <img src={engineoil}></img>
                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                          </div>
                        <div className="infos">
                            {/* <span className="name">Nike SuperRep Go</span>*/}
                            <span className="lorem">View More</span>

                            <a href="/events" className="btn-details">OUR EVENTS</a>
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