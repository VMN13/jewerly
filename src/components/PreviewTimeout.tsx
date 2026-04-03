// "use client";

// import { useEffect, useState } from 'react';

// interface PreviewTimeoutProps {
//   timeout?: number; // секунды, по умолчанию 3
// }

// export default function PreviewTimeout({ timeout = 3 }: PreviewTimeoutProps) {
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShow(false);
//     }, timeout * 1000);

//     return () => clearTimeout(timer);
//   }, [timeout]);

//   if (!show) return null;

//   return (
//     <div className="preview-timeout-overlay">
//       <div className="preview-timeout-content">
//         <h1 className="preview-title">Для Сашеньки...</h1>
//       </div>
//     </div>
//   );
// }

