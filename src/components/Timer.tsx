import { useState, useEffect } from "react"

type TimerProps = {
   startTime : number;
}

export function Timer({startTime}:TimerProps) {
   const [time, setTime] = useState<number>(startTime);
   const [stop, setStop] = useState<boolean>(true);
   

   useEffect(()=>{
      if(!stop){
         const id = setInterval(()=>{
            setTime((s)=> s - 1);
            if(time <= 1){
               clearInterval(id);
               setStop(true);
               setTime(startTime);
            } 
         }, 10)

         return ()=> clearInterval(id);
      }
   },[stop, time])

   return(
      <div>
         <div className="display">{time}</div>

         <div className="controller">
            <button onClick={()=> setStop(!stop)}>
               {stop? '▶️': '⏸️'}
            </button>

            <button onClick={()=> {
               setTime(startTime);
               setStop(true);
            }}>🔄️</button>
         </div>
      </div>
   )
}