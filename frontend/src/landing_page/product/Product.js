import Hero from './Hero';
import LeftSection from './LeftRightSection';    
import Universe from './Universe';
function Product() {
    return ( 
        <div className="product">
            <Hero/>
            <LeftSection/>
            <Universe/>
        </div>
    );
}

export default Product;