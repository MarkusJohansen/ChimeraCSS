export function TablesDemo() {
  return (
    <>
      <h1>Tables</h1>
      <p>
        Tables are a great way to display data which is why chimera provides you with 
        beautiful table styles. Below is an example of a table with some data.
      </p>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>Doe</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Johnny</td>
            <td>Doe</td>
            <td>15</td>
          </tr>
        </tbody>
      </table>
      <hr />
    </>
  )
} 