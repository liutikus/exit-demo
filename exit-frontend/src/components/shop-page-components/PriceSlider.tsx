import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import type {PriceRange } from '../../types/types';
import { formatPrice } from '../../data/formatNumbers';
import React, { useState, type ReactHTMLElement } from 'react';

type PriceSliderProps ={
    priceRange: PriceRange |null
    onPriceChange:(range:[number, number])=>void;
    selectedPriceRange: [number, number]


}

const PriceSlider = ({priceRange,selectedPriceRange, onPriceChange} : PriceSliderProps) => {

  if (!priceRange) return null;
  const [inputValue, setInputValue] =useState(0)

  const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    
  }

  return (
    <div className="py-3">
        <RangeSlider
        min={priceRange.minPrice}
        max={priceRange.maxPrice}
        step={1}
        value={selectedPriceRange}
        onInput={onPriceChange}

        />
        <div className="py-4 flex items-center gap-2">
            <h4 className='opacity-80'>Price:</h4>
            {selectedPriceRange.map((price,index)=>(
                <div
                key={index}
                >
                    <input 
                    type="number"
                    value={selectedPriceRange[index]}
                    onChange={handelInputChange}
                    />
                    <p className="font-bold">{formatPrice(price)} MDL {index=== 0 && "-"}</p>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default PriceSlider
