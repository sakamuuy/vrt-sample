import { Logo } from "./components/atoms/Logo";
import { Form } from "./components/molecules/Form";

function App() {
  return (
    <div style={{
      background: '#333',
      padding: '24px',
      minHeight: '100vh',
    }}>
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Logo />
        </div>
      <div
        style={{
          marginTop: '24px'
        }}
      >
        <Form />
      </div>
    </div>
  );
}

export default App;
