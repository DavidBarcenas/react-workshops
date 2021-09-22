import { Link } from 'react-router-dom';

export const Detail = () => {
  return (
    <div className="Detail">
      <div className="Detail-content">
        <div className="Detail-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="Detail-form">
          <form>
            <input type="text" name="name" placeholder="Nombre completo" />
            <input type="email" name="email" placeholder="Correo electrónico" />
            <input type="text" name="address" placeholder="Dirección" />
            <input type="text" name="apto" placeholder="Depto." />
            <input type="text" name="city" placeholder="Ciudad" />
            <input type="text" name="country" placeholder="País." />
            <input type="text" name="state" placeholder="Estado" />
            <input type="text" name="zip" placeholder="C.P." />
            <input type="text" name="phone" placeholder="Teléfono" />
          </form>
        </div>
        <div className="Detail-buttons">
          <div className="Detail-back">
            Regresar
          </div>
          <div className="Detail-next">
            <Link to="/checkout/payment">Pagar</Link>
          </div>
        </div>
      </div>
      <div className="Detail-sidebar">
        <h3>Pedido</h3>
        <div className="Detail-item">
          <h4>Item name</h4>
          <h4>$10</h4>
        </div>
      </div>
    </div>
  )
}
