import Navbar  from "../../components/Navbar"
import Card  from "../../components/Card"
function HomePage(){
    return(
       <>
    <Navbar/>
    <div className='flex space-x-7 mt-4 ml-2'>

    <Card/>
    <Card/>
    <Card/>
    </div>

       </>
    )
}
export default HomePage    