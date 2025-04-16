...

<tbody>
  {people.map((p, i) => (
    <tr key={i} onContextMenu={(e) => handleRightClick(e, i)}>
      <td style={cell}>{p.name}</td>
      <td style={cell}>{p.age}</td>
    </tr>
  ))}
</tbody>

...

function handleRightClick(e: React.MouseEvent, index: number) {
  e.preventDefault();
  setPeople(people.filter((_, i) => i !== index));
}
