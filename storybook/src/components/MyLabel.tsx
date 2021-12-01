import './my-label.css'

interface MyLabelProps {
  label: string;
  size?: 'normal' | 'h1' | 'h2' | 'h3'
}

export const MyLabel = ({label, size = 'normal'}: MyLabelProps) => {
  return (
    <label className={size} >{label}</label>
  )
}
