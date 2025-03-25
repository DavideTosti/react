import { useState } from "react";

function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(true);

  function handleCollapse() {
    setCollapsed((c) => !c);
  }

  return (
    <div className="container">
      <div>
        {title}
        {collapsed ? (
          <button onClick={handleCollapse}>Show</button>
        ) : (
          <button onClick={handleCollapse}>Collapse</button>
        )}
      </div>
      <div className={!collapsed ? "show" : "not-show"}>{children}</div>
    </div>
  );
}

export default Container;
