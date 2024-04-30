import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateColor, addColor, deleteColor, selectColor } from '../store/colorsSlice'


function PaletteColors() {
    const colors = useSelector((state) => state.colors.state)
    const selectedColorIndex = useSelector((state) => state.colors.selectedColorIndex)
    const dispatch = useDispatch()
    const [showDeleteButton, setShowDeleteButton] = useState(false);

    const deleteColorFromPalette = (e, index) => {
        e.stopPropagation();
        dispatch(selectColor(null))
        dispatch(deleteColor(index));
    };
    return (
        <div className='palette'>
            {colors.length > 0 && colors.map((color, index) => (
                <div
                    key={index}
                    className="color"
                    style={{ backgroundColor: color }}
                    onClick={() => dispatch(selectColor(index))}
                    onMouseEnter={() => setShowDeleteButton(index)}
                    onMouseLeave={() => setShowDeleteButton(null)}
                >
                    {selectedColorIndex === index && (
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => dispatch(updateColor({ index, color: e.target.value }))}
                            onBlur={() => dispatch(selectColor(null))}
                        />
                    )}
                    {showDeleteButton === index &&
                        <div className='buttonContainer'>
                            <button
                                onClick={e => deleteColorFromPalette(e, index)}
                                className='deleteColorButton'
                            >X</button>
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}

function PaletteColorsControls() {
    const dispatch = useDispatch()

    const [color, setColor] = useState('#000000');

    const handleChange = (event) => {
        setColor(event.target.value);
    };

    const addColorToPalette = () => {
        dispatch(addColor(color));
    };

    return (
        <>
            <input type="color" value={color} onChange={handleChange} />
            <button onClick={addColorToPalette} className='addButton'>Добавить цвет</button>
        </>
    )
}


export function Palette() {
    return (
        <div className='container'>
            <PaletteColors />
            <PaletteColorsControls />
        </div>
    )
}