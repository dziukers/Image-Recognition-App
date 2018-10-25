import React from 'react';
import './ImageInfo.css';

const defaultInfo = [
{id: "ai_BlL0wSQh", name: "water", value: 0.9962818, app_id: "main"},
{id: "ai_7bRKqWjp", name: "sea", value: 0.99576914, app_id: "main"},
{id: "ai_xZgtf58b", name: "ocean", value: 0.9903431, app_id: "main"},
{id: "ai_VRmbGVWh", name: "travel", value: 0.98410416, app_id: "main"},
{id: "ai_786Zr311", name: "no person", value: 0.9831534, app_id: "main"},
{id: "ai_jWFxtpH1", name: "seashore", value: 0.98313934, app_id: "main"},
{id: "ai_J1hw9SFJ", name: "beach", value: 0.9816502, app_id: "main"},
{id: "ai_jlzP4C8j", name: "island", value: 0.9743533, app_id: "main"},
{id: "ai_MTvKbKJv", name: "landscape", value: 0.9673852, app_id: "main"},
{id: "ai_tBcWlsCp", name: "nature", value: 0.9517455, app_id: "main"},
{id: "ai_V0zg5ppH", name: "seascape", value: 0.93681777, app_id: "main"},
{id: "ai_lNsKfmXb", name: "sky", value: 0.93339205, app_id: "main"},
{id: "ai_PchWZPFC", name: "boat", value: 0.90155095, app_id: "main"},
{id: "ai_1W3Gfjzg", name: "vacation", value: 0.8997644, app_id: "main"},
{id: "ai_FsT0Zqdb", name: "summer", value: 0.8986201, app_id: "main"},
{id: "ai_Zmhsv0Ch", name: "outdoors", value: 0.8936979, app_id: "main"},
{id: "ai_0rLMqXwG", name: "bay", value: 0.8908093, app_id: "main"},
{id: "ai_DSCFH6f6", name: "sand", value: 0.882473, app_id: "main"},
{id: "ai_r8x1BJcR", name: "surf", value: 0.8784616, app_id: "main"},
{id: "ai_vCbqNgZn", name: "turquoise", value: 0.8681201, app_id: "main"}
];

const ImageInfo = ({image}) => {
    if(image){
        console.log(image);
    return (
        <div className='info'>
            {image.map(detected => { 
                const round = parseFloat(detected.value*100).toFixed(2);
                console.log(round);
                return (
                <p className='info-paragraph'><span className='detectedName'>{`${detected.name}`}</span><span className='detectedValue'>{` ${round}%`}</span></p>)})} 
        </div>
    )}
    else { 
        return (
            <div className='info'>
            {defaultInfo.map(detected => { 
                const round = parseFloat(detected.value*100).toFixed(2);
                console.log(round);
                return (
                <p className='info-paragraph'><span className='detectedName'>{`${detected.name}`}</span><span className='detectedValue'>{` ${round}%`}</span></p>)})} 
        </div>
        )
    }
}
export default ImageInfo;