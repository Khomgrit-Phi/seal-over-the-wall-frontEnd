// src/components/ComponentB.jsx
import { useMessageStore } from '../../stores/useMessageStore';

function Test2() {
  const message = useMessageStore((state) => state.message);

  return (
    <div>
      <h3>ข้อความจาก Test:</h3>
      <p>{message}</p>
    </div>
  );
}

export default Test2;