import { Form, Select } from 'antd'
import { Controller } from 'react-hook-form'

type TPHSelector = {
    label?: string,
    name: string,
    options: { value: string, label: string, disabled?: boolean }[]
}

export default function PHSelect({ label, name, options }: TPHSelector) {
    const updatesOptions=[{
        label: 'Select One',
        value: 'default',
        disabled: true
      },...options]
    return (
        <Controller
            name={name}
            render={({ field, fieldState:{error}}) => <Form.Item label={label || null}>
                <Select
                    {...field}
                    defaultValue={updatesOptions[0].value}
                    options={updatesOptions}
                    size='large'
                />
                {error && <small style={{color:"red"}}>{error.message}</small>}
            </Form.Item>
            }
        />
    )
}
