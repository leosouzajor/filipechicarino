import React from 'react';

const PullQuote = ({ children }) => {
  return (
    <blockquote className="border-l-4 border-[#C85A3A] bg-[#C85A3A]/5 p-8 rounded-r-xl shadow-sm italic text-xl md:text-2xl my-10 text-[#001F3F] font-serif leading-relaxed">
      "{children}"
    </blockquote>
  );
};

export default PullQuote;