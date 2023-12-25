import { useState } from 'react';
import EntryPage from './EntryPage';
import ResumePage from './ResumePage';

function App() {
  const [content, setContent] = useState(0);

  const handleContent = () => {
    content === 0 ? setContent(1) : setContent(0);
  };

  if (content === 0) {
    return <EntryPage handleContent={handleContent} />;
  } else {
    return <ResumePage handleContent={handleContent} />;
  }
}

export default App;
