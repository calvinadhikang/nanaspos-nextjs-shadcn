import { Input } from "./ui/input";

export default function InputLabel({label, errorLabel, value, placeholder, onChange}: {
    label: string,
    errorLabel: string,
    placeholder: string,
    onChange: any,
    value: any
}){
    return(
        <>
            <label>{label}</label>
            <Input value={value} placeholder={placeholder} onChange={onChange}/>
            <label className="text-red-500 text-xs">{errorLabel}</label>
        </>
    )
}