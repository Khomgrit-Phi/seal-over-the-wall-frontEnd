// src/components/ComponentA.jsx
import { useMessageStore } from '../../stores/useMessageStore';

function Test() {
  const setMessage = useMessageStore((state) => state.setMessage);

  return (
    <div>
      <input
        type="text"
        placeholder="พิมพ์ข้อความ"
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
}
export default Test;