export function FormsDemo() {
  return (
    <>
      <h1>Forms</h1>
      <p>
        <em>Forms</em> is a really important aspect of HTML. We offer accessible yet good looking forms 
        with support for <code>:focus</code> CSS-selectors which allows for great keyboard navigation.
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" /><br />

        <label htmlFor="disabled-email">Disabled Email:</label><br />
        <input 
          disabled 
          type="email" 
          id="disabled-email" 
          name="disabled-email" 
          value="example@example.com" 
        /><br />
    
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" /><br />

        <label htmlFor="phone">Enter your phone number:</label><br />
        <input type="tel" id="phone" name="phone" /><br />

        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" /><br />

        <label htmlFor="birthdate">Birthdate:</label><br />
        <input type="date" id="birthdate" name="birthdate" /><br />

        <label htmlFor="website">Website:</label><br />
        <input type="url" id="website" name="website" /><br />

        <label htmlFor="quantity">Quantity (between 1 and 5):</label><br />
        <input 
          type="number" 
          id="quantity" 
          name="quantity" 
          min="1" 
          max="5" 
        /><br />

        <label htmlFor="bio">Bio:</label><br />
        <textarea id="bio" name="bio"></textarea><br />

        <div>
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Male</label><br />
        </div>

        <div>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label><br />
        </div>

        <div>
          <input type="checkbox" id="terms" name="terms" value="agree" />
          <label htmlFor="terms">I agree to the terms and conditions</label><br />
        </div>

        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" />
        <button disabled>Disabled button</button>
      </form>
      <hr />
    </>
  )
} 