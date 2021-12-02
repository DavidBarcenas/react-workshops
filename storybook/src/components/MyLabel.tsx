import './my-label.css'

interface MyLabelProps {
  /**
   * Is this the principal call to action on the page?
   */
  label: string;
  /**
   * What is the size of the label?
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3',
  /**
   * Text color
   */
  color?: string;
  /**
   * Capitalize text
   */
  allCaps?: boolean;
}

export const MyLabel = ({label, size, color, allCaps}: MyLabelProps) => {
  return (
    <label 
      className={[(size || ''), (allCaps ? 'all-caps': '')].join(' ')} 
      style={{color}}
    >
      {label}
    </label>
  )
}
