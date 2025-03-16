export function AlertClock() {
  function handleButtonClick() {
    const now = new Date();
    alert(`Current time is ${now.toLocaleTimeString()}`);
  }
  return (
    <div>
      <button onClick={handleButtonClick}>Click</button>
    </div>
  );
}
