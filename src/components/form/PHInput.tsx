import { Form, Input } from 'antd'
import { Controller } from 'react-hook-form'

type TInputProps={
    type:string,
    name:string,
    label?:string,
}

export default function PHInput({ type, name, label }:TInputProps) {
    return (
        <div style={{marginBottom:"20px"}}>
            <Controller
                name={name}
                render={({ field }) =><Form.Item label={label? label :null}> <Input size='large' {...field} type={type} name={name} /></Form.Item>}
            />
        </div>
    )
}

