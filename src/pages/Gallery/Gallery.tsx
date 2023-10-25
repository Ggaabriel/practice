import { useEffect, useRef, useState } from "react";
import tiktok from "../../assets/tiktok.png";
import LinkIcon from "../../assets/icons/link.svg?react";
import Comment from "../../assets/icons/comment.svg?react"
import Like from "../../assets/icons/like.svg?react"


interface Props {}

const Gallery = (_props: Props) => {
      window.scrollTo({
        top: window.innerHeight,
    });
    window.addEventListener("scroll", (_event) => {
        window.scrollTo({
            top: window.innerHeight,
        });
    });
  const [active, setActive] = useState(0);
  const scrollContainerRef = useRef(null);
    console.log(active);
    
  const handleScroll = () => {

    const container:any = scrollContainerRef.current;
    if (container) {

      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
    //   const clientHeight = container.clientHeight;
      const numberOfBlocks = 5;
      const blockHeight = scrollHeight / numberOfBlocks;

      const currentBlock = Math.floor((scrollTop) / blockHeight);
     
    
      setActive(currentBlock);
      // container.children[currentBlock+1].children[0].classList.add("bob")
      
    }
  };

  useEffect(() => {
    const container:any = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    

    
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  let mass = [
    {h:"eugene",p:"dibil"},
    {h:"kirill",p:"dibil"},
    {h:"artem",p:"dibil"},
    {h:"yura",p:"dibil"},
    {h:"sasha",p:"dibil"}
  ]
  return (
    <div
      ref={scrollContainerRef}
      className="gallery m-auto  h-fit snap-y snap-mandatory overflow-auto"
    >
      {mass.map((_, i,a) => {
        const isCurrent = i === active;
        
        return (
          <div key={i} className="h-screen  snap-center flex justify-center overflow-hidden relative">
        
            <img
              draggable={false}
             
              className={`h-[55vh] max-w-[410px] w-[85vw] pointer-events-none ${
                isCurrent
                  ? "relative top-[15vh] scale-100 bob  "
                  : "fixed  top-[19vh] scale-90 "
              } ${active+1 === i ? " visible":active === i ?" visible" :" invisible "} `}
              style={{
                transform: isCurrent ? "scale(1.1)" : "none",
                filter:`hue-rotate(${i*50}deg)`,
                zIndex: isCurrent ? a.length : i===active+1 ? a.length-1 : i===0? a.length-i-1 : a.length-i,
                transition: active + 1 === i ?"300ms" : "",
                
              }}
              src={tiktok}
              alt=""
            />
            <div className={`grid grid-rows-2  w-[85vw] max-w-[410px]  top-[30vh]  h-[30vh] ${
                isCurrent
                ? "absolute visible scale-100 transition"
                : "fixed visible scale-90 transition"
            }`}
            style={{
                transition: active + 1 === i ?"300ms" : "",
                zIndex: isCurrent ? a.length : i===active+1 ? a.length-1 : i===0? a.length-i-1 : a.length-i,
             
                
              }}
            >
                <div className="flex flex-col items-end justify-around">
                    <Comment className=""/>
                    <Like stroke="#fff"/>    
                </div>
                <div className="text-white flex justify-between">
                    <div>
                    <h4>{_.h}</h4>
                    <p>{_.p}</p>
                    </div>
                  
                    <LinkIcon fill="#fff" className="w-[26px] h-[26px]"/>
                </div>
            </div>
           
            
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
