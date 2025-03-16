export function MouseClicker() {
  function handleClickName(event) {
    console.log(event.target.name);
  }
  function handleClickSrc(event) {
    console.log(event.target.src);
  }
  return (
    <div>
      <button name="one" onClick={handleClickName}>
        Click one
      </button>
      <br />
      <button name="two" onClick={handleClickSrc}>
        <img
          width={25}
          height={25}
          src="https://as2.ftcdn.net/v2/jpg/00/47/00/27/1000_F_47002791_qm6N11DpoZLRapHZmfKXE6oscWnLtrEa.jpg"
          alt=""
        />
        Click two
      </button>
    </div>
  );
}
