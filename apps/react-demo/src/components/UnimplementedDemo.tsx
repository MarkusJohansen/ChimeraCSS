export function UnimplementedDemo() {
  return (
    <>
      <hr />
      <p>
        <bdi>bdi</bdi>
        <bdo>bdo</bdo>
      </p>
      <figcaption>Hello, world!</figcaption>
      
      <label htmlFor="favcolor">Select your favorite color:</label>
      <input type="color" id="favcolor" name="favcolor" />
      
      <label htmlFor="myfile">Select a file:</label>
      <input type="file" id="myfile" name="myfile" />
      
      <label htmlFor="volume">Volume control:</label>
      <input type="range" id="volume" name="volume" min="0" max="10" />
      
      <label htmlFor="week">Select a week:</label>
      <input type="week" id="week" name="week" />
      
      <label htmlFor="birthmonth">Enter your birth month and year:</label>
      <input type="month" id="birthmonth" name="birthmonth" />
      
      <input type="hidden" id="userid" name="userid" value="123456" />
      
      <label htmlFor="car-select">Choose a car:</label>
      <select id="car-select" name="car">
        <optgroup label="Swedish Cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
        </optgroup>
        <optgroup label="German Cars">
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </optgroup>
      </select>
      
      <datalist id="cars">
        <option value="Volvo" />
        <option value="Saab" />
        <option value="Mercedes" />
        <option value="Audi" />
      </datalist>
      
      <fieldset>
        <legend>Personalia:</legend>
        <label htmlFor="name-input">Name:</label>
        <input type="text" id="name-input" name="name" /><br />
        <label htmlFor="email-input">Email:</label>
        <input type="text" id="email-input" name="email" /><br />
        <label htmlFor="dob-input">Date of birth:</label>
        <input type="text" id="dob-input" name="dob" />
      </fieldset>
      
      <output>2048</output>
      <progress value="70" max="100">70%</progress>
      <meter value="0.6">60%</meter>
      
      <details>
        <summary>Click me to see more</summary>
        <p>Here is some more text</p>
      </details>
      
      <dialog open>
        <p>Hello world</p>
        <p>Hi coder</p>
      </dialog>
      
      <menu>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </menu>
    </>
  )
} 