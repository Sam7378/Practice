let CurrentTime = () => {
  let time = new Date();
  return (
    <p className="lead">
      This is current Time:{time.toDateString()} -{time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
