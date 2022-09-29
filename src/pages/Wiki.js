import React from "react";
import { products } from "../assets/WikiItemData"
import '../styles/WikiItems.css'

export default function Wiki() {
    return (
        <div id="wiki-item-container" className="bg-[#131722]">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-200">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <div key={product.id} className="group relative">
                        <div className="min-h-80  w-full overflow-hidden rounded-md bg-[#1D1E20] group-hover:opacity-75 lg:aspect-none lg:h-80">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 wiki-item-title">Customers also purchased</h2>
                            <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="wiki-item-image"
                            />
                            <p className="mt-1 text-sm text-gray-500">more details</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}