import RailzConnect from "@railzai/railz-connect";
import { useEffect, useRef } from "react";

function App() {
  const ref = useRef();

  useEffect(() => {
    const widget = new RailzConnect();
    widget.open({
      parentElement: ref.current,
      widgetId: "wid_dev_bd3774f1-2422-44bb-bb80-90fb71256ee5",
      endpoint: "http://localhost:3000",
      options: {
        components: {
          back: true,
        },
      },
    });
  }, []);

  return <div id="gabriel"></div>;
}

export default App;
