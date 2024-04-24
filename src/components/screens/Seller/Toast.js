import React, { useEffect } from 'react';

const Toast = ({ message, onCloseToast }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onCloseToast();
    }, 3000); // Close toast after 3 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [onCloseToast]);

  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md">
      {message}
    </div>
  );
};

export default Toast;
