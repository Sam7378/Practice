function Hello() {
  let myName = 'Sam';
  let number = 456;
  let fullName = () => {
    return 'Samrat';
  }
  return <h3>
    MessageNo: {number}. I am your master - {fullName()}
    </h3>
  
}

export default Hello;