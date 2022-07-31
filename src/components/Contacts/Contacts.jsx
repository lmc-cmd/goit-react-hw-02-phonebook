const Contacts = ({ state }) => {
  state.map(el => {
    return (
      <>
        <title>Contacts</title>
        <ul>
          <li>
            1<span>{el.name}</span>
          </li>
        </ul>
      </>
    );
  });
};
export default Contacts;
