// Continuação do exercício 2, adicionando funcionalidade para excluir ao clicar

...

<tbody>
  {people.map((p, i) => (
    <tr key={i} onClick={() => remove(i)}>
      <td style={cell}>{p.name}</td>
      <td style={cell}>{p.age}</td>
    </tr>
  ))}
</tbody>

...

function remove(index: number) {
  setPeople(people.filter((_, i) => i !== index));
}
