function Content(){
  return <div>Content Component</div>
}
function Section(){
  return (
  <div>
    <h2>Section Component</h2>
    <Content></Content>
    <Content></Content>
  </div>
  )
}

function App() {
  return (    
    <div className="App">
      <Section></Section>
      <Section></Section>
    </div>
  );
}
export default App;
