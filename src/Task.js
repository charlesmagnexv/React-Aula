import "./task.css";
export function TaskCard(ready) {
  console.log(ready);
  const cardStyles = { background: "#202020", color: "#fff", padding: "20px" };
  const titleStyle = { fontWeight: "lighter" };
  return (
    <div className="card">
      <h1>Minha Primeira Tarefa</h1>
      <span className={ready?'green':'red'}>{ready?"Tarefa realizada":"Tarefa pendente"}</span>
    </div>
    //<div style={cardStyles}>
    //<h1 style={titleStyle}>Minha Primeira Tarefa</h1>
    //<p>Tarefa Realizada</p>
    //</div>
    /*
    <div style={{ background: "#202020", color: "#fff", padding: "20px" }}>
      <h1 style={{ fontWeight: "bolder" }}>Minha primeira tarefa</h1>
      <p>Tarefa criada</p>
    </div>*/
  );
}
