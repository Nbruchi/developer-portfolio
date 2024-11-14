import {Html, useProgress} from "@react-three/drei";

const CanvasLoader = () => {
    const {progress} = useProgress()

    return (
        <Html as="div" center className="flex flex-col items-center justify-center">
            <span className="canvas-loader"/>
            <p style={{fontSize:14,fontWeight:800,marginTop:40,color:"#F1F1F1"}}>
                {progress !== 0 ? `${progress.toFixed(2)}%`:`Loading...`}
            </p>
        </Html>
    )
}
export default CanvasLoader
