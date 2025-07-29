
import {  useEffect, useState } from "react";

const GoUp = ()=>{
    const [isVisible, setIsVisible] = useState(false)
    useEffect(()=>{
      window.addEventListener("scroll", ()=>  setIsVisible(window.scrollY > 1000) )
    },[])

    function scrollToTop() {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    return (
      <button
        style={{
          position: "fixed",
          bottom: `${isVisible ? "20px" : "-70px"}`,
          right: 10,
        }}
        onClick={scrollToTop}
      >
        <span className="go-up">🚀</span>
      </button>
    );
}

export default GoUp;