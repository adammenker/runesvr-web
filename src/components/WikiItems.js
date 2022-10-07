import React from 'react';
import '../styles/WikiItems.css';

export default function WikiItems(props) {

  
    function changeStyle(wikiItemContainer) {
        const wikiItemImageContainer = wikiItemContainer.children[0].childNodes[1];
        const wikiItemDescriptionContainer = wikiItemContainer.children[0].childNodes[2]
        console.log(wikiItemImageContainer);
        if (wikiItemImageContainer.style.display === "none") {
            wikiItemImageContainer.style.display = "block"; 
            wikiItemDescriptionContainer.style.display = "none"  
        } else {
            wikiItemImageContainer.style.display = "none"; 
            wikiItemDescriptionContainer.style.display = "block"  
        }
        setHeight()
    };

    function setHeight() {
        const wikiItemContainers = document.getElementsByClassName("wiki-item-container");
        console.log(getComputedStyle(wikiItemContainers[0]).height)
        for (let i = 0; i < wikiItemContainers.length; i++) {
            wikiItemContainers[i].style.height = getComputedStyle(wikiItemContainers[0]).height.toString()
        }
    }

    return (
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"> 
        
            {props.wikiItems.map((wikiItem) => (
                <div key={wikiItem.id} className="group relative wiki-item-container" onClick={e => changeStyle(e.currentTarget)}>
                    <div className="min-h-80  w-full overflow-hidden rounded-md bg-[#1D1E20] group-hover:opacity-75 lg:aspect-none lg:h-80">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 wiki-item-title">lorem</h2>
                        <div className="wiki-item-image-container">
                            <img
                            src={wikiItem.imageSrc}
                            alt={wikiItem.imageAlt}
                            className="wiki-item-image"
                            />
                            <p className="wiki-item-more-details mt-1 text-sm text-gray-500">more details</p>
                        </div>
                        <div className="wiki-item-description-container">
                            <p className="item-description text-2xl font-bold tracking-tight text-gray-900 wiki-item-title">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                        </div>                        
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}