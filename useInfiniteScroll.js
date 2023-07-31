import {useEffect} from 'react'

export const useInfiniteScroll=(runFunc,itemDivId)=> {

    let element=document.getElementById(itemDivId);

    useEffect(() => {
        if(element!==null)
            element.addEventListener("scroll",()=>ButtomOfThePageRun())
    }, [element]);

    
    const ButtomOfThePageRun=(e)=>{
        const scrollHeight = element.scrollHeight;
        const currentHeight = Math.ceil(
            element.scrollTop + element.offsetHeight
        );
        if (currentHeight + 10 >= scrollHeight) {
            runFunc()
        }
    }

}
