import Engine from './engine';
import Searcher from './searcher';
import Teaser from './teaser-picture';
import WhyChooseUs from './why';
function Home() {
    return (
        <>
            <div className='container'>
                <div className='q1'>
                <Searcher />
                </div>
                <div className='q2'>
                <Teaser />
                </div>
                <div className='q3'>
                <WhyChooseUs />
                </div>
                <div className='q4'>
                <Engine />
                </div>
            </div>
        </>
    );
}

export default Home;