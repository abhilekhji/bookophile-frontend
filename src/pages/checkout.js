import Image from "next/image"
import background from "../images/backgroundPage.jpg"
function checkout() {
    return (
        <div 
            className="w-full h-full"
            style={{backgroundImage: `url(${background})`}} >
        </div>
    )
}

export default checkout
