import '../../style/Homepage.css'
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'
import banner4 from '../../images/banner4.jpg'
import banner5 from '../../images/banner5.jpg'
import {useEffect, useState} from "react"
import Banner from './Banner'

var mainIndex = 0;

function BannerList() {
    const bannerList = [
        {
            "banner": banner1,
        },
        {
            "banner": banner2,
        },
        {
            "banner": banner3,
        },
        {
            "banner": banner4,
        },
        {
            "banner": banner5,
        },
    ]

    var [moveInIndex, setMoveInIndex] = useState(5);

    const changeBanner = () => {
        if (moveInIndex > (bannerList.length - 1)) 
            setMoveInIndex(1);
        else if (moveInIndex === (bannerList.length -1))
            setMoveInIndex(0);
        else
            setMoveInIndex(moveInIndex + 1);
        
        if (mainIndex === (bannerList.length -1))
            mainIndex = 0;
        else
            mainIndex++;
    }

    useEffect(
        function() {
            setTimeout(changeBanner, 3000);
        });

    return (
        <div id="banner-container">
            {
                bannerList.map((item, index) => {
                    return <Banner item={item} index={index} mainIndex={mainIndex} moveInIndex={moveInIndex} />
                })
            }
        </div>
    );
}

export default BannerList;