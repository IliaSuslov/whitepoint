import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateColor, addColor, deleteColor } from '../store/colorsSlice'


function PaletteColors() {
    const colors = useSelector((state) => state.colors.state)
    const dispatch = useDispatch()
    const [editingColorIndex, setEditingColorIndex] = useState(null);
    const [showDeleteButton, setShowDeleteButton] = useState(false);

    const deleteColorFromPalette = (index) => {
        dispatch(deleteColor(index));
        setEditingColorIndex(null)
    };

    const handleColorClick = (index) => {
        setEditingColorIndex(index);
    };

    const handleCloseColorPicker = () => {
        setEditingColorIndex(null);
    };

    return (
        <div className='palette' >
            {colors.length > 0 && colors.map((color, index) => (
                <div
                    key={index}
                    className="color"
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorClick(index, color)}
                    onMouseEnter={() => setShowDeleteButton(index)}
                    onMouseLeave={() => setShowDeleteButton(null)}
                >
                    {editingColorIndex === index && (
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => dispatch(updateColor({ index, color: e.target.value }))}
                            onBlur={handleCloseColorPicker}
                        />
                    )}
                    {showDeleteButton === index && <button
                        onClick={() => deleteColorFromPalette(color)}
                        className='deleteColorButton'
                    >X</button>}
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