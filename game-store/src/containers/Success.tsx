import '../styles/containers/success.scss'

export const Success = () => {
  return (
    <div className="Success">
      <div className="container">
        <h2 className="container-title">THANKS FOR YOUR PURCHASE!</h2>
        <span className="material-icons success-icon"> done </span>
        <p>Your order arrives in 3 days at your address.</p>
      </div>
    </div>
  )
}
