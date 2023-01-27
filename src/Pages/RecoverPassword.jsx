import "../styles/Form.css";

export const RecoverPassword = () => {

  const handleSubmit = () => {
    console.log('CLICK')
  }

  return (
    <div className="form-container" onSubmit={handleSubmit}>
      <form className="form" id="form">
        <div className="form-field">
          <label>Email</label>
          <input type="text" placeholder="Write an Email" required />
        </div>

        <div className="description-container">
          <p className="description">We will send you a recovery code at the email address</p>
        </div>
      </form>

      <button className="reset-button" type="submit" form="form">Reset Password</button>
    </div>
  );
};
