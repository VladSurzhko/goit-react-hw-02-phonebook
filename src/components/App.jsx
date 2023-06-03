import State from "../components/Phonebook/phonebook"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
       >
      <State
        state={{
          contacts: [],
          filter: '',
          name: '',
          number: ''
        }}
      />
    </div>
  );
};
