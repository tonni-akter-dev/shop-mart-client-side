
import {connect} from 'react-redux'
import Products from './../component/ProductsComponents/Products/Products';
const mapStateToProps=state=>({
    data:state.productItems
})
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Products)
// export default Home;