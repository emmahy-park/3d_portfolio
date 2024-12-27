// Shown while the model is loading
import { Html } from '@react-three/drei'

const Loader = () => {
    return (
        <Html>
            <div className="flex justify-center items-center">
            <div className="w-20 h-20 boarder-2 boarder-opacity-20
            border-blue-500 border-t-blue-500 rounded-full animate-spin">
                
            </div>
        </div>
        </Html>
        
    )
}

export default Loader