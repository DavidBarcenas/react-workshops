import './my-label.css'

interface MyLabelProps {
  /**
   * What text is displayed
   */
  label: string;
  /**
   * What is the size of the label?
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3'
}

export const MyLabel = ({label, size = 'normal'}: MyLabelProps) => {
  return (
    <label className={size}>{label}</label>
  )
}
