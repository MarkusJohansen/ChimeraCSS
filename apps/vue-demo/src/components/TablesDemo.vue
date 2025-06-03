<template>
  <div>
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
        <tr v-for="person in people" :key="person.firstname">
          <td>{{ person.firstname }}</td>
          <td>{{ person.lastname }}</td>
          <td>{{ person.age }}</td>
        </tr>
      </tbody>
    </table>
    <hr />
  </div>
</template>

<script setup lang="ts">
const people = [
  { firstname: 'John', lastname: 'Doe', age: 30 },
  { firstname: 'Jane', lastname: 'Doe', age: 25 },
  { firstname: 'Johnny', lastname: 'Doe', age: 15 }
]
</script> 