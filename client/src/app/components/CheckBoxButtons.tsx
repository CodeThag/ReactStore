import { FormLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import React, { useState } from 'react';

interface Props {
    label: string;
    items: string[];
    checked?: string[];
    onChange: (items: string[]) => void;
}

export default function CheckBoxButtons({ label, items, checked, onChange }: Props) {

    const [checkedItems, setCheckedItems] = useState(checked || []);

    function handledChecked(value: string) {
        const currentIndex = checkedItems.findIndex(item => item === value);
        let newChecked: string[] = [];
        if (currentIndex === -1) newChecked = [...checkedItems, value]; // If not selected select it.
        else newChecked = checkedItems.filter(item => item !== value); // If selected remove from the list

        setCheckedItems(newChecked);
        onChange(newChecked);
    }

    return (
        <>
            <FormLabel>{label}</FormLabel>
            <FormGroup>
                {items.map(item => {
                    return <FormControlLabel
                        control={<Checkbox
                            checked={checkedItems.indexOf(item) !== -1}
                            onClick={() => handledChecked(item)}
                        />}
                        label={item}
                        key={item} />
                })}
            </FormGroup>
        </>
    )
}
